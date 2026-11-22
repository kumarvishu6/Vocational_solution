import { productLabel, type Product } from "@/data/vc";

/**
 * Server-side PayPal Orders API. Needs a PayPal REST app's Client ID and Secret
 * (PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET). Totals are always computed here from the catalog.
 */
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "";
const secret = process.env.PAYPAL_CLIENT_SECRET ?? "";
const apiBase = process.env.PAYPAL_ENV === "sandbox" ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";

export const paypalConfigured = Boolean(clientId && secret);

export type OrderLine = { product: Product; quantity: number };

async function accessToken() {
  const res = await fetch(`${apiBase}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`PayPal auth failed (${res.status})`);
  return ((await res.json()) as { access_token: string }).access_token;
}

const usd = (n: number) => n.toFixed(2);

export function orderTotal(lines: OrderLine[]) {
  return lines.reduce((sum, l) => sum + (l.product.price ?? 0) * l.quantity, 0);
}

export async function createPayPalOrder(lines: OrderLine[], reference: string, brandName: string) {
  const total = orderTotal(lines);
  const res = await fetch(`${apiBase}/v2/checkout/orders`, {
    method: "POST",
    headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          reference_id: reference,
          custom_id: reference,
          description: `${brandName} services`,
          amount: { currency_code: "USD", value: usd(total), breakdown: { item_total: { currency_code: "USD", value: usd(total) } } },
          items: lines.map((l) => ({
            name: productLabel(l.product).slice(0, 127),
            sku: l.product.id.slice(0, 127),
            quantity: String(l.quantity),
            unit_amount: { currency_code: "USD", value: usd(l.product.price ?? 0) },
            category: "DIGITAL_GOODS",
          })),
        },
      ],
      // Works for both the PayPal and the card buttons; nothing ships, so PayPal skips the address step.
      application_context: { brand_name: brandName, shipping_preference: "NO_SHIPPING", user_action: "PAY_NOW" },
    }),
    cache: "no-store",
  });
  const json = (await res.json()) as { id?: string; message?: string };
  if (!res.ok || !json.id) throw new Error(json.message ?? `PayPal order failed (${res.status})`);
  return json.id;
}

export type CaptureResult = { status: string; amount: number; reference: string; captureId: string };

export async function capturePayPalOrder(orderId: string): Promise<CaptureResult> {
  const res = await fetch(`${apiBase}/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, {
    method: "POST",
    headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json" },
    cache: "no-store",
  });
  const json = (await res.json()) as {
    status?: string;
    message?: string;
    purchase_units?: { reference_id?: string; payments?: { captures?: { id: string; status: string; amount: { value: string } }[] } }[];
  };
  if (!res.ok) throw new Error(json.message ?? `PayPal capture failed (${res.status})`);
  const unit = json.purchase_units?.[0];
  const capture = unit?.payments?.captures?.[0];
  return {
    status: capture?.status ?? json.status ?? "UNKNOWN",
    amount: Number(capture?.amount.value ?? 0),
    reference: unit?.reference_id ?? "",
    captureId: capture?.id ?? "",
  };
}
