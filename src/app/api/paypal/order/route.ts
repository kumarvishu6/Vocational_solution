import { NextResponse } from "next/server";
import { company } from "@/data/vc";
import { buildLines, newReference, type CartItemInput } from "@/lib/orders";
import { createPayPalOrder, paypalConfigured } from "@/lib/paypal";

/** Creates a PayPal order for the cart; the total is computed here, never trusted from the browser. */
export async function POST(request: Request) {
  if (!paypalConfigured) return NextResponse.json({ error: "Online payment is not set up yet." }, { status: 503 });

  let body: { items?: CartItemInput[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const lines = await buildLines(body.items);
  if (lines.length === 0) return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });

  try {
    const reference = newReference();
    const id = await createPayPalOrder(lines, reference, company.legalName);
    return NextResponse.json({ id, reference });
  } catch (err) {
    console.error("[paypal] create order:", err);
    return NextResponse.json({ error: "Payment could not be started. Please try again or call our office." }, { status: 502 });
  }
}
