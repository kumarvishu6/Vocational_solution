import { NextResponse } from "next/server";
import { buildLines, newReference, recordOrder, validCustomer, type CartItemInput, type CustomerInput } from "@/lib/orders";

/** Invoice request: used while online payment is not set up. The office sends a PayPal invoice. */
export async function POST(request: Request) {
  let body: { items?: CartItemInput[]; customer?: Partial<CustomerInput> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!validCustomer(body.customer)) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }

  const lines = await buildLines(body.items);
  if (lines.length === 0) return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });

  const reference = newReference();
  const saved = await recordOrder({ reference, customer: body.customer, lines, payment: null, origin: new URL(request.url).origin });
  if (!saved) return NextResponse.json({ error: "Your order could not be sent. Please call our office." }, { status: 502 });

  return NextResponse.json({ reference });
}
