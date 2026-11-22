"use client";

import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useCart } from "@/components/site/cart";
import { formatPrice, productLabel, type Product } from "@/data/vc";
import { cn } from "@/lib/utils";

/** Adds the service and opens the cart, so checkout is one click away. */
function AddToCartButton({ id }: { id: string }) {
  const { add, items, setOpen } = useCart();
  const inCart = items.some((i) => i.product.id === id);

  return (
    <button
      type="button"
      onClick={() => {
        if (!inCart) add(id);
        setOpen(true);
      }}
      className={cn(
        "font-heading inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm px-5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
        inCart ? "bg-gold-400 text-navy-950 hover:bg-gold-300" : "bg-navy-900 text-white hover:bg-navy-800"
      )}
    >
      {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      {inCart ? "In your cart" : "Add to cart"}
    </button>
  );
}

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <article
      className="animate-fade-up group relative flex h-full flex-col overflow-hidden rounded-sm bg-white p-7 shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-amaranth-500 transition-transform duration-500 group-hover:scale-x-100" />
      <h3 className="font-heading text-xl font-bold uppercase leading-tight tracking-wide text-navy-900">{product.name}</h3>
      <p className="mt-3 flex items-baseline gap-2">
        <span className="font-heading text-4xl font-bold text-navy-900">{formatPrice(product.price)}</span>
        {product.detail && <span className="text-sm text-ink-500">{product.detail}</span>}
      </p>
      {product.description && <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-500">{product.description}</p>}
      <div className={cn("pt-6", !product.description && "mt-auto")}>
        {product.price === null ? (
          <Link
            href={`/contact?topic=${encodeURIComponent(productLabel(product))}`}
            className="font-heading inline-flex h-11 w-full items-center justify-center gap-2 rounded-sm border border-navy-900 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <AddToCartButton id={product.id} />
        )}
      </div>
    </article>
  );
}

/** Compact row for services priced on request. */
export function QuoteRow({ product }: { product: Product }) {
  return (
    <li className="flex items-center justify-between gap-4 border-b border-navy-900/10 py-4 last:border-0">
      <span className="font-medium text-navy-900">{product.name}</span>
      <Link
        href={`/contact?topic=${encodeURIComponent(productLabel(product))}`}
        className="font-heading inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-amaranth-500 transition-colors hover:text-navy-900"
      >
        Request a quote <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </li>
  );
}
