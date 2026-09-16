"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { faqs } from "@/data/site";

export function BoldFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper-100 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-oswald text-3xl uppercase text-noir-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 50}>
                <div className="border-b border-noir-950/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-oswald text-xl uppercase text-noir-950">
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-amaranth-600 transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-noir-400">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
