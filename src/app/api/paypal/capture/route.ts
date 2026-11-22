import { NextResponse } from "next/server";
import { buildLines, recordOrder, validCustomer, type CartItemInput, type CustomerInput } from "@/lib/orders";
import { capturePayPalOrder, paypalConfigured } from "@/lib/paypal";

/** Captures an approved PayPal order, then records it in the admin inbox. */
export async function POST(request: Request) {
  if (!paypalConfigured) return NextResponse.json({ error: "Online payment is not set up yet." }, { status: 503 });

  let body: { orderId?: string; items?: CartItemInput[]; customer?: Partial<CustomerInput> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }
  if (!body.orderId) return NextResponse.json({ error: "Missing order." }, { status: 400 });
  if (!validCustomer(body.customer)) {
    return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
  }

  let capture;
  try {
    capture = await capturePayPalOrder(body.orderId);
  } catch (err) {
    console.error("[paypal] capture:", err);
    return NextResponse.json({ error: "The payment could not be completed. You have not been charged." }, { status: 502 });
  }
  if (capture.status !== "COMPLETED") {
    return NextResponse.json({ error: "The payment was not completed. Please try another payment method." }, { status: 402 });
  }

  const lines = await buildLines(body.items);
  await recordOrder({
    reference: capture.reference || body.orderId,
    customer: body.customer,
    lines,
    payment: { paid: true, amount: capture.amount, paypalOrderId: body.orderId, captureId: capture.captureId, status: capture.status },
    origin: new URL(request.url).origin,
  });

  return NextResponse.json({ reference: capture.reference || body.orderId });
}
