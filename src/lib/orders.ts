import { after } from "next/server";
import { productLabel } from "@/data/vc";
import { getProducts } from "@/lib/content";
import { sendInquiryEmails } from "@/lib/email";
import { saveInquiry, type InquiryInput } from "@/lib/inquiries";
import { orderTotal, type OrderLine } from "@/lib/paypal";

export type CartItemInput = { id: string; qty: number };
export type CustomerInput = { name: string; email: string; phone?: string; firm?: string; notes?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validCustomer = (c?: Partial<CustomerInput>): c is CustomerInput =>
  Boolean(c?.name && c.email && emailPattern.test(c.email));

export const newReference = () => `VC-${Date.now().toString(36).toUpperCase().slice(-6)}`;

/** Prices always come from the catalog on the server, never from the browser. */
export async function buildLines(items: CartItemInput[] | undefined): Promise<OrderLine[]> {
  const products = await getProducts();
  return (items ?? []).flatMap(({ id, qty }) => {
    const product = products.find((p) => p.id === id);
    const quantity = Math.floor(Number(qty));
    if (!product || product.price === null || !(quantity >= 1 && quantity <= 50)) return [];
    return [{ product, quantity }];
  });
}

/** Saves the order to the admin inbox and emails the office and the client. */
export async function recordOrder({
  reference,
  customer,
  lines,
  payment,
  origin,
}: {
  reference: string;
  customer: CustomerInput;
  lines: OrderLine[];
  payment: { paid: boolean; amount?: number; paypalOrderId?: string; captureId?: string; status?: string } | null;
  origin: string;
}) {
  const total = orderTotal(lines);
  const paidAmount = payment?.amount ?? 0;
  const inquiry: InquiryInput = {
    kind: "order",
    reference,
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    subject: payment?.paid
      ? `Paid order ${reference} · $${paidAmount.toLocaleString("en-US")}`
      : `Invoice requested ${reference} · $${total.toLocaleString("en-US")}`,
    message: [customer.firm ? `Firm / company: ${customer.firm}` : "", customer.notes ?? ""].filter(Boolean).join("\n\n"),
    details: {
      total,
      paid: Boolean(payment?.paid),
      paidAmount,
      amountMatches: payment?.paid ? Math.abs(paidAmount - total) < 0.01 : true,
      paypalOrderId: payment?.paypalOrderId ?? null,
      paypalCaptureId: payment?.captureId ?? null,
      paypalStatus: payment?.status ?? null,
      items: lines.map((l) => ({ id: l.product.id, name: productLabel(l.product), qty: l.quantity, price: l.product.price })),
    },
  };
  const saved = await saveInquiry(inquiry);
  if (saved) after(() => sendInquiryEmails(inquiry, origin));
  return saved;
}
