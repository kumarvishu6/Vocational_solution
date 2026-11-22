"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Loader2, Lock, Minus, Plus, ShieldCheck, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart";
import { PayPalCheckout } from "@/components/site/paypal-checkout";
import { company, formatPrice, isHourly } from "@/data/vc";
import { cn } from "@/lib/utils";

const input =
  "h-12 w-full rounded-md border border-navy-900/20 bg-white px-4 text-[0.95rem] text-navy-900 outline-none transition-colors placeholder:text-ink-300 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10";
const labelClass = "mb-1.5 block text-sm font-medium text-ink-700";

function OrderSummary() {
  const { items, subtotal, setQty, remove } = useCart();
  return (
    <div>
      <ul className="divide-y divide-navy-900/10">
        {items.map(({ product, qty }) => (
          <li key={product.id} className="flex gap-4 py-4 first:pt-0">
            <div className="min-w-0 flex-1">
              <p className="font-medium leading-snug text-navy-900">{product.name}</p>
              {product.detail && <p className="text-sm text-ink-500">{product.detail}</p>}
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center rounded-md border border-navy-900/15 bg-white">
                  <button type="button" onClick={() => setQty(product.id, qty - 1)} aria-label={`Fewer ${product.name}`} className="flex h-8 w-8 items-center justify-center text-ink-500 hover:text-navy-900">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="min-w-6 text-center text-sm font-medium text-navy-900">{qty}</span>
                  <button type="button" onClick={() => setQty(product.id, qty + 1)} aria-label={`More ${product.name}`} className="flex h-8 w-8 items-center justify-center text-ink-500 hover:text-navy-900">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
                {isHourly(product) && <span className="text-xs text-ink-500">hours</span>}
                <button type="button" onClick={() => remove(product.id)} className="text-xs font-medium text-ink-500 underline-offset-2 hover:text-amaranth-500 hover:underline">
                  Remove
                </button>
              </div>
            </div>
            <p className="shrink-0 font-medium text-navy-900">{formatPrice((product.price ?? 0) * qty)}</p>
          </li>
        ))}
      </ul>
      <div className="mt-2 space-y-2 border-t border-navy-900/10 pt-4 text-sm">
        <div className="flex justify-between text-ink-500">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-baseline justify-between pt-2">
          <span className="text-base font-semibold text-navy-900">Total</span>
          <span className="font-heading text-3xl font-bold text-navy-900">
            <span className="mr-1.5 align-middle text-xs font-medium text-ink-500">USD</span>
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CheckoutForm({ paymentsEnabled }: { paymentsEnabled: boolean }) {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const { items, subtotal, clear } = useCart();
  const [showNotes, setShowNotes] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const cartItems = items.map((i) => ({ id: i.product.id, qty: i.qty }));

  // Shows what's missing and returns null, so PayPal won't open until the details are filled in.
  const getCustomer = () => {
    if (!form.current?.reportValidity()) return null;
    return Object.fromEntries(new FormData(form.current)) as Record<string, string>;
  };

  const finish = (reference: string, paid: boolean) => {
    setDone(true);
    clear();
    router.push(`/checkout/success?ref=${encodeURIComponent(reference)}${paid ? "" : "&mode=invoice"}`);
  };

  async function placeInvoiceOrder() {
    const customer = getCustomer();
    if (!customer) return;
    setPlacing(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, items: cartItems }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      finish(json.reference, false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setPlacing(false);
    }
  }

  if (items.length === 0 && !done) {
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cloud text-gold-600">
          <ShoppingBag className="h-7 w-7" />
        </span>
        <p className="font-heading mt-5 text-2xl font-bold uppercase tracking-wide text-navy-900">Your cart is empty</p>
        <p className="mt-2 text-sm text-ink-500">Add a consultation or retainer to check out.</p>
        <Link
          href="/fees"
          className="font-heading mt-6 inline-flex h-12 items-center rounded-md bg-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:bg-navy-800"
        >
          View services & fees
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14">
      {/* Order summary: folded on phones, a side panel on larger screens. */}
      <details className="group rounded-lg bg-cloud lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
          <span className="flex items-center gap-2 text-sm font-medium text-navy-900">
            <ShoppingBag className="h-4 w-4 text-gold-600" />
            <span className="group-open:hidden">Show order summary</span>
            <span className="hidden group-open:inline">Hide order summary</span>
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
          </span>
          <span className="font-heading text-xl font-bold text-navy-900">{formatPrice(subtotal)}</span>
        </summary>
        <div className="px-5 pb-5">
          <OrderSummary />
        </div>
      </details>

      <form ref={form} onSubmit={(e) => e.preventDefault()} className="min-w-0 space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-navy-900">Contact information</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="c-email" className={labelClass}>Email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@lawfirm.com" className={input} />
            </div>
            <div>
              <label htmlFor="c-name" className={labelClass}>Full name</label>
              <input id="c-name" name="name" required autoComplete="name" className={input} />
            </div>
            <div>
              <label htmlFor="c-phone" className={labelClass}>
                Phone <span className="font-normal text-ink-300">(optional)</span>
              </label>
              <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={input} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-firm" className={labelClass}>
                Law firm or company <span className="font-normal text-ink-300">(optional)</span>
              </label>
              <input id="c-firm" name="firm" autoComplete="organization" className={input} />
            </div>
            <div className="sm:col-span-2">
              {showNotes ? (
                <>
                  <label htmlFor="c-notes" className={labelClass}>Case notes</label>
                  <textarea
                    id="c-notes"
                    name="notes"
                    rows={3}
                    autoFocus
                    placeholder="Case name, deadlines, or anything we should know."
                    className={cn(input, "h-auto resize-y py-3")}
                  />
                </>
              ) : (
                <button type="button" onClick={() => setShowNotes(true)} className="flex items-center gap-1.5 text-sm font-medium text-navy-900 underline-offset-4 hover:underline">
                  <Plus className="h-4 w-4" /> Add a note about your case
                </button>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy-900">Payment</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
            <Lock className="h-3.5 w-3.5" /> All transactions are secure and encrypted.
          </p>
          <div className="mt-5">
            {paymentsEnabled ? (
              <PayPalCheckout items={cartItems} getCustomer={getCustomer} onPaid={(ref) => finish(ref, true)} />
            ) : (
              <div className="rounded-lg border border-navy-900/15 p-5">
                <p className="text-sm text-ink-700">
                  Place your order and our office will email you a secure PayPal invoice within one business day. Pay by
                  PayPal, debit or credit card.
                </p>
                <button
                  type="button"
                  onClick={placeInvoiceOrder}
                  disabled={placing}
                  className="font-heading mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-md bg-navy-900 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-800 disabled:opacity-60"
                >
                  {placing && <Loader2 className="h-4 w-4 animate-spin" />}
                  Place order · {formatPrice(subtotal)}
                </button>
                {error && <p className="mt-3 text-sm text-amaranth-500">{error}</p>}
              </div>
            )}
          </div>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            Card details are handled by PayPal and never stored on this website. For retainers, our office follows up for
            the scope of service letter and case information. Questions? Call {company.phone}.
          </p>
        </section>
      </form>

      <aside className="hidden lg:block">
        <div className="sticky top-28 rounded-lg bg-cloud p-7">
          <h2 className="mb-5 text-lg font-semibold text-navy-900">Order summary</h2>
          <OrderSummary />
        </div>
      </aside>
    </div>
  );
}
