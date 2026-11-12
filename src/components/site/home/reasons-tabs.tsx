"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { reasons } from "@/data/vc";
import { cn } from "@/lib/utils";

export function ReasonsTabs() {
  const [active, setActive] = useState(reasons[0].id);
  const current = reasons.find((r) => r.id === active)!;

  return (
    <section className="bg-white py-14 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading center eyebrow="When to retain an expert" title="Reasons for a vocational evaluation" />

        <Reveal delay={100}>
          <div className="mx-auto mt-10 grid max-w-md grid-cols-2 rounded-sm bg-cloud p-1.5" role="tablist">
            {reasons.map((r) => (
              <button
                key={r.id}
                role="tab"
                aria-selected={active === r.id}
                onClick={() => setActive(r.id)}
                className={cn(
                  "font-heading rounded-sm py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300",
                  active === r.id ? "bg-navy-900 text-white shadow-md" : "text-navy-900/70 hover:text-navy-900"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul key={current.id} className="mt-10 grid gap-3 sm:grid-cols-2" role="tabpanel">
          {current.items.map((item, i) => (
            <li
              key={item}
              className="animate-fade-up flex items-start gap-4 rounded-sm border border-navy-900/10 bg-white p-5 transition-colors hover:border-gold-400"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amaranth-500 text-gold-300">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-[0.95rem] leading-relaxed text-ink-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
