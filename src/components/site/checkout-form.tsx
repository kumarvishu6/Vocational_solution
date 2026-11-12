"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Lock, ShieldCheck, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/site/cart";
import { formatPrice, isHourly } from "@/data/vc";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3 text-[0.95rem] text-navy-900 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-400/30";
const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy-900";

export function CheckoutForm() {
  const router = useRouter();
  const { items, subtotal, setQty, clear } = useCart();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const customer = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, items: items.map((i) => ({ id: i.product.id, qty: i.qty })) }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      if (json.mode === "stripe") {
        window.location.href = json.url;
        return;
      }
      clear();
      router.push(`/checkout/success?ref=${json.reference}&mode=request`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (items.length === 0) {
    return (
      <div className="rounded-sm bg-white p-12 text-center ring-1 ring-navy-900/10">
        <ShoppingBag className="mx-auto h-10 w-10 text-gold-500" />
        <p className="font-heading mt-4 text-2xl font-bold uppercase tracking-wide text-navy-900">Your cart is empty</p>
        <Link
          href="/shop"
          className="font-heading mt-6 inline-flex h-12 items-center rounded-sm bg-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          Go to the shop
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-sm bg-white p-6 ring-1 ring-navy-900/10 sm:p-10">
        <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">Step 1</p>
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
          <div className="sm:col-span-2">
            <label htmlFor="c-phone" className={label}>Phone</label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="c-notes" className={label}>Case name, invoice number, or notes</label>
            <textarea id="c-notes" name="notes" rows={4} className={cn(field, "resize-y")} />
          </div>
        </div>
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

          {status === "error" && <p className="mt-4 text-sm text-amaranth-200">{error}</p>}

          <button
            type="submit"
            disabled={status === "sending"}
            className="shine font-heading mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-sm bg-gold-400 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300 disabled:opacity-70"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            Pay securely
          </button>
          <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-white/55">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
            You&apos;ll enter card details on our payment provider&apos;s secure page. Card details are never stored on this
            website.
          </p>
        </div>
      </div>
    </form>
  );
}
