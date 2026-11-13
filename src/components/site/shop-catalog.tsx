"use client";

import { useState } from "react";
import { Briefcase, Compass, FileSearch } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import type { ProductCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = { court: Briefcase, career: Compass, other: FileSearch } as const;

export function ShopCatalog({ categories }: { categories: ProductCategory[] }) {
  const [active, setActive] = useState(categories[0].id);
  const category = categories.find((c) => c.id === active)!;

  return (
    <div>
      <div className="mobile-swipe grid gap-3 sm:grid-cols-3" role="tablist">
        {categories.map((c) => {
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
        {category.products.map((p, i) => (
          <ProductCard key={p.id} product={p} eyebrow={category.title} delay={i * 60} />
        ))}
      </div>
    </div>
  );
}
