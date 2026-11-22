"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, ShieldCheck, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart";
import { PayPalCheckout } from "@/components/site/paypal-checkout";
import { formatPrice, isHourly, productLabel } from "@/data/vc";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";
const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900";

export function CheckoutForm() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const { items, subtotal, setQty, clear } = useCart();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const lines = items
    .filter((i) => i.product.price !== null)
    .map((i) => ({ id: i.product.id, name: productLabel(i.product), qty: i.qty, price: i.product.price ?? 0 }));

  // Runs before PayPal opens: the client's details must be filled in first.
  const validate = () => form.current?.reportValidity() ?? false;

  async function onPaid(payment: { orderId: string; status: string; amount: string }) {
    setSaving(true);
    setError("");
    const customer = Object.fromEntries(new FormData(form.current!)) as Record<string, string>;
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, items: items.map((i) => ({ id: i.product.id, qty: i.qty })), payment }),
      });
      const json = await res.json();
      clear();
      router.push(`/checkout/success?ref=${json.reference ?? payment.orderId}`);
    } catch {
      // The payment itself succeeded at PayPal; only our record failed.
      clear();
      router.push(`/checkout/success?ref=${payment.orderId}`);
    }
  }

  if (items.length === 0 && !saving) {
    return (
      <div className="rounded-sm bg-white p-12 text-center ring-1 ring-navy-900/10">
        <ShoppingBag className="mx-auto h-10 w-10 text-gold-500" />
        <p className="font-heading mt-4 text-2xl font-bold uppercase tracking-wide text-navy-900">Your cart is empty</p>
        <Link
          href="/fees"
          className="font-heading mt-6 inline-flex h-12 items-center rounded-sm bg-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          View services & fees
        </Link>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={(e) => e.preventDefault()} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-sm bg-white p-6 ring-1 ring-navy-900/10 sm:p-10">
        <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.28em] text-gold-600">Step 1</p>
        <h2 className="font-heading mt-3 text-3xl font-bold uppercase tracking-wide text-navy-900">Your details</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-name" className={label}>Full name</label>
            <input id="c-name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="c-email" className={label}>Email</label>
            <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="c-phone" className={label}>Phone</label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={field} />
          </div>
          <div>
            <label htmlFor="c-firm" className={label}>Law firm or company (optional)</label>
            <input id="c-firm" name="firm" autoComplete="organization" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="c-notes" className={label}>Case name and notes</label>
            <textarea
              id="c-notes"
              name="notes"
              rows={4}
              placeholder="Case name, opposing party, deadlines, or anything we should know."
              className={cn(field, "resize-y")}
            />
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-500">
          For retainers, our office will follow up for the scope of service letter and case information form after payment.
        </p>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-sm bg-navy-900 p-6 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">Step 2</p>
          <h2 className="font-heading mt-2 text-2xl font-bold uppercase tracking-wide">Order summary</h2>
          <ul className="mt-6 divide-y divide-white/10">
            {items.map(({ product, qty }) => (
              <li key={product.id} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium leading-snug">{product.name}</p>
                  <p className="mt-0.5 text-xs text-white/55">
                    {product.detail ? `${product.detail} · ` : ""}
                    {formatPrice(product.price)} × {qty}
                    {isHourly(product) ? " hrs" : ""}
                  </p>
                  <div className="mt-2 flex gap-3 text-xs">
                    <button type="button" onClick={() => setQty(product.id, qty - 1)} className="text-gold-300 hover:text-white">
                      − Less
                    </button>
                    <button type="button" onClick={() => setQty(product.id, qty + 1)} className="text-gold-300 hover:text-white">
                      + More
                    </button>
                  </div>
                </div>
                <p className="font-heading text-lg font-bold">{formatPrice((product.price ?? 0) * qty)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-5">
            <p className="text-sm uppercase tracking-[0.18em] text-white/60">Total</p>
            <p className="font-heading text-4xl font-bold text-gold-300">{formatPrice(subtotal)}</p>
          </div>

          <div className="mt-6">
            {saving ? (
              <p className="flex items-center justify-center gap-2 py-6 text-sm text-white/80">
                <Loader2 className="h-4 w-4 animate-spin" /> Payment received. Finishing your order…
              </p>
            ) : (
              <PayPalCheckout lines={lines} validate={validate} onPaid={onPaid} />
            )}
          </div>
          {error && <p className="mt-4 text-sm text-amaranth-200">{error}</p>}

          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-white/55">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
            Pay with PayPal, debit or credit card, or Venmo. Payments are processed securely by PayPal; card details never
            touch this website.
          </p>
        </div>
      </div>
    </form>
  );
}
