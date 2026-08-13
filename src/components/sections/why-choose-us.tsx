import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { credentials, whyChooseUs } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
      />
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Why Attorneys Trust Us"
            title="Credentials that build credibility in the courtroom"
            description="Our opinions are only as strong as the credentials behind them. We hold the highest certifications in forensic vocational evaluation and maintain active membership in the leading professional organisations."
            light
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {credentials.map((c) => (
              <div
                key={c.abbr}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/[0.05]"
              >
                <div className="font-serif text-xl text-gold-300 transition-transform duration-300 group-hover:translate-x-0.5">
                  {c.abbr}
                </div>
                <div className="mt-1.5 text-sm text-white">{c.title}</div>
                <div className="mt-1 text-xs text-white/40">{c.org}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 lg:pt-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="flex gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-serif text-lg text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
