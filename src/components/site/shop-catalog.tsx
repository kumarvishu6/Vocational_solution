"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Compass, FileSearch } from "lucide-react";
import { formatPrice, shopCategories } from "@/data/vc";
import { cn } from "@/lib/utils";

const icons = { court: Briefcase, career: Compass, other: FileSearch } as const;

export function ShopCatalog() {
  const [active, setActive] = useState(shopCategories[0].id);
  const category = shopCategories.find((c) => c.id === active)!;

  return (
    <div>
      <div className="mobile-swipe grid gap-3 sm:grid-cols-3" role="tablist">
        {shopCategories.map((c) => {
          const Icon = icons[c.id as keyof typeof icons];
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c.id)}
              className={cn(
                "group flex items-start gap-4 rounded-sm border p-5 text-left transition-all duration-300",
                isActive
                  ? "border-navy-900 bg-navy-900 text-white shadow-xl shadow-navy-900/20"
                  : "border-navy-900/10 bg-white text-navy-900 hover:border-gold-400"
              )}
            >
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-sm transition-colors",
                  isActive ? "bg-gold-400 text-navy-950" : "bg-gold-100 text-gold-600"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="font-heading block text-lg font-bold uppercase tracking-wide">{c.title}</span>
                <span className={cn("mt-1 block text-sm", isActive ? "text-white/70" : "text-ink-500")}>{c.blurb}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div key={category.id} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {category.products.map((p, i) => {
          const label = p.detail ? `${p.name} (${p.detail})` : p.name;
          return (
            <div
              key={label}
              className="animate-fade-up group relative flex flex-col overflow-hidden rounded-sm bg-white p-6 shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-amaranth-500 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">{category.title}</p>
              <h3 className="font-heading mt-2 text-xl font-bold uppercase leading-tight tracking-wide text-navy-900">{p.name}</h3>
              {p.detail && <p className="mt-1 text-sm text-ink-500">{p.detail}</p>}
              <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <p className={cn("font-heading font-bold text-navy-900", p.price === null ? "text-base" : "text-3xl")}>
                  {formatPrice(p.price)}
                </p>
                <Link
                  href={`/contact?topic=${encodeURIComponent(label)}`}
                  className="font-heading group/btn inline-flex h-10 items-center gap-1.5 rounded-sm bg-navy-900 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-400 hover:text-navy-950"
                >
                  Request <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
