import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { whenNeeded, otherReasons } from "@/data/site";

export function BoldWhenNeeded() {
  return (
    <section id="when-needed" className="bg-paper-100 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono-case text-xs uppercase tracking-[0.2em] text-amaranth-600">
            / For Attorneys
          </p>
          <h2 className="font-oswald mt-4 max-w-2xl text-4xl uppercase leading-[1.05] text-noir-950 sm:text-5xl">
            When might your client need a vocational expert?
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-noir-950/15">
          {whenNeeded.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="flex flex-col gap-2 border-b border-noir-950/15 py-7 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="font-mono-case shrink-0 text-sm text-amaranth-600 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-oswald flex-1 text-2xl uppercase leading-tight text-noir-950">
                  {item.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-noir-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-14 bg-noir-950 p-9 lg:p-12">
            <h3 className="font-oswald text-2xl uppercase text-paper-100">
              Other reasons you may need to hire an expert
            </h3>
            <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
              {otherReasons.map((reason) => (
                <li key={reason} className="flex gap-3.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amaranth-500 text-paper-100">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-paper-100/70">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
