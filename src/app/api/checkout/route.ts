import { NextResponse } from "next/server";
import { allProducts, productLabel } from "@/data/vc";

interface CheckoutPayload {
  items: { id: string; qty: number }[];
  customer: { name: string; email: string; phone?: string; notes?: string };
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<CheckoutPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const customer = body.customer;
  if (!customer?.name || !customer.email || !emailPattern.test(customer.email)) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }

  // Prices always come from the catalog on the server, never from the browser.
  const lines = (body.items ?? []).flatMap(({ id, qty }) => {
    const product = allProducts.find((p) => p.id === id);
    const quantity = Math.floor(Number(qty));
    if (!product || product.price === null || !(quantity >= 1 && quantity <= 50)) return [];
    return [{ product, quantity }];
  });
  if (lines.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const reference = `VC-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    // Stub until Stripe is connected: the order is logged for the office to send a payment link.
    console.log("[checkout] order request:", { reference, customer, lines: lines.map((l) => [productLabel(l.product), l.quantity]) });
    return NextResponse.json({ mode: "request", reference });
  }

  const origin = new URL(request.url).origin;
  const params = new URLSearchParams({
    mode: "payment",
    customer_email: customer.email,
    success_url: `${origin}/checkout/success?ref=${reference}`,
    cancel_url: `${origin}/checkout`,
    client_reference_id: reference,
    "metadata[reference]": reference,
    "metadata[name]": customer.name,
    "metadata[phone]": customer.phone ?? "",
    "metadata[notes]": (customer.notes ?? "").slice(0, 450),
  });
  lines.forEach(({ product, quantity }, i) => {
    params.set(`line_items[${i}][quantity]`, String(quantity));
    params.set(`line_items[${i}][price_data][currency]`, "usd");
    params.set(`line_items[${i}][price_data][unit_amount]`, String(product.price! * 100));
    params.set(`line_items[${i}][price_data][product_data][name]`, productLabel(product));
  });

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${secretKey}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const session = await res.json();
  if (!res.ok || !session.url) {
    console.error("[checkout] stripe error:", session.error?.message);
    return NextResponse.json({ error: "Payment could not be started. Please call our office." }, { status: 502 });
  }

  return NextResponse.json({ mode: "stripe", url: session.url, reference });
}
