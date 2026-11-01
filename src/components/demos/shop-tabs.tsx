"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { shop } from "@/data/site";
import { cn } from "@/lib/utils";

export function ShopTabs({ contactHref }: { contactHref: string }) {
  const [active, setActive] = useState(shop[0].category);
  const group = shop.find((g) => g.category === active) ?? shop[0];

  return (
    <div>
      <div role="tablist" aria-label="Shop categories" className="flex flex-wrap gap-2">
        {shop.map((g) => (
          <button
            key={g.category}
            role="tab"
            aria-selected={g.category === active}
            onClick={() => setActive(g.category)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              g.category === active ? "bg-navy-900 text-white" : "bg-white text-navy-900 ring-1 ring-navy-900/15 hover:ring-navy-900/40"
            )}
          >
            {g.category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item) => (
          <article
            key={item.name + item.detail}
            className="group flex flex-col rounded-3xl bg-white p-7 ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{item.detail}</p>
            <h3 className="mt-2 flex-1 text-lg font-bold leading-snug text-navy-900">{item.name}</h3>
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-3xl font-extrabold tracking-tight text-navy-900">{item.price}</span>
              <a
                href={contactHref}
                aria-label={`Book ${item.name}, ${item.detail}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-navy-900 transition-transform group-hover:translate-x-0.5"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
