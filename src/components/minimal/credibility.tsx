import { ShieldCheck, Award, Landmark, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { credibility } from "@/data/site";

const icons = [ShieldCheck, Award, Landmark, FileCheck2];

export function MinimalCredibility() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-amaranth-600">
            Why Attorneys Retain Us
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-semibold leading-tight text-noir-950 sm:text-4xl">
            A record that speaks before she does
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-3xl bg-dust-100 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amaranth-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-noir-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-noir-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
