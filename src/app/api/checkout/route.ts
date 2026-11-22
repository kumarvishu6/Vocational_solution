import { after, NextResponse } from "next/server";
import { productLabel } from "@/data/vc";
import { getProducts } from "@/lib/content";
import { sendInquiryEmails } from "@/lib/email";
import { saveInquiry, type InquiryInput } from "@/lib/inquiries";

interface CheckoutPayload {
  items: { id: string; qty: number }[];
  customer: { name: string; email: string; phone?: string; firm?: string; notes?: string };
  payment: { orderId: string; status: string; amount: string };
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Records an order after PayPal has captured the payment in the browser. */
export async function POST(request: Request) {
  let body: Partial<CheckoutPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { customer, payment } = body;
  if (!customer?.name || !customer.email || !emailPattern.test(customer.email)) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }
  if (!payment?.orderId) {
    return NextResponse.json({ error: "Missing payment details." }, { status: 400 });
  }

  // Prices always come from the catalog on the server, never from the browser.
  const products = await getProducts();
  const lines = (body.items ?? []).flatMap(({ id, qty }) => {
    const product = products.find((p) => p.id === id);
    const quantity = Math.floor(Number(qty));
    if (!product || product.price === null || !(quantity >= 1 && quantity <= 50)) return [];
    return [{ product, quantity }];
  });

  const total = lines.reduce((sum, l) => sum + l.product.price! * l.quantity, 0);
  const paidAmount = Number(payment.amount);
  const completed = payment.status === "COMPLETED";
  // Flag anything the office should double-check in PayPal before starting work.
  const amountMatches = Math.abs(paidAmount - total) < 0.01;

  const reference = `VC-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const inquiry: InquiryInput = {
    kind: "order",
    reference,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    subject: `${completed ? "Paid order" : "Order (payment not confirmed)"} ${reference} · $${(paidAmount || total).toLocaleString("en-US")}`,
    message: [customer.firm ? `Firm / company: ${customer.firm}` : "", customer.notes ?? ""].filter(Boolean).join("\n\n"),
    details: {
      total,
      paid: completed,
      paidAmount,
      amountMatches,
      paypalOrderId: payment.orderId.slice(0, 40),
      paypalStatus: payment.status.slice(0, 40),
      items: lines.map((l) => ({ id: l.product.id, name: productLabel(l.product), qty: l.quantity, price: l.product.price })),
    },
  };

  const saved = await saveInquiry(inquiry);
  if (saved) after(() => sendInquiryEmails(inquiry, new URL(request.url).origin));

  return NextResponse.json({ reference, saved });
}
