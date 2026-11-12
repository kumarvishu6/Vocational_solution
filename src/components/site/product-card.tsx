"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { useCart } from "@/components/site/cart";
import { formatPrice, productLabel, type Product } from "@/data/vc";
import { cn } from "@/lib/utils";

function AddToCartButton({ id }: { id: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1600);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <button
      onClick={() => {
        add(id);
        setAdded(true);
      }}
      className={cn(
        "font-heading inline-flex h-10 shrink-0 items-center gap-1.5 rounded-sm px-4 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300",
        added ? "bg-gold-400 text-navy-950" : "bg-navy-900 text-white hover:bg-gold-400 hover:text-navy-950"
      )}
    >
      {added ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      {added ? "Added" : "Add to cart"}
    </button>
  );
}

export function ProductCard({ product, eyebrow, delay = 0 }: { product: Product; eyebrow?: string; delay?: number }) {
  return (
    <div
      className="animate-fade-up group relative flex flex-col overflow-hidden rounded-sm bg-white p-6 shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-amaranth-500 transition-transform duration-500 group-hover:scale-x-100" />
      {eyebrow && <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">{eyebrow}</p>}
      <h3 className={cn("font-heading text-xl font-bold uppercase leading-tight tracking-wide text-navy-900", eyebrow && "mt-2")}>
        {product.name}
      </h3>
      {product.detail && <p className="mt-1 text-sm text-ink-500">{product.detail}</p>}
      <div className="mt-6 flex flex-1 items-end justify-between gap-4">
        <p className={cn("font-heading font-bold text-navy-900", product.price === null ? "text-base" : "text-3xl")}>
          {formatPrice(product.price)}
        </p>
        {product.price === null ? (
          <Link
            href={`/contact?topic=${encodeURIComponent(productLabel(product))}`}
            className="font-heading group/btn inline-flex h-10 items-center gap-1.5 rounded-sm border border-navy-900 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            Request <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>
        ) : (
          <AddToCartButton id={product.id} />
        )}
      </div>
    </div>
  );
}
