import { ShieldCheck, Award, Landmark, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { credibility } from "@/data/site";

const icons = [ShieldCheck, Award, Landmark, FileCheck2];

export function Credibility() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, rgba(208,169,68,0.12) 0%, rgba(208,169,68,0) 65%)",
        }}
      />

      <Container className="relative">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Why Attorneys Retain Us
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-serif text-3xl leading-tight text-balance text-white sm:text-4xl">
            A record that speaks before she does
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.map((item, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-t border-gold-400/30 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
