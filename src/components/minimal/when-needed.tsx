import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { whenNeeded, otherReasons } from "@/data/site";

export function MinimalWhenNeeded() {
  return (
    <section id="when-needed" className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-amaranth-600">
              For Attorneys
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-noir-950 sm:text-4xl">
              When might your client need a vocational expert?
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {whenNeeded.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amaranth-500 text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-noir-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-noir-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-dust-100 p-8 lg:p-10">
            <h3 className="text-xl font-semibold leading-snug text-noir-950">
              Other reasons you may need to hire an expert
            </h3>
            <ul className="mt-6 flex flex-col gap-3.5">
              {otherReasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-amaranth-600 shadow-sm">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-noir-600">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
