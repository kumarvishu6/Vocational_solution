import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { caseExperience } from "@/data/site";

export function CaseExperience() {
  return (
    <section id="case-experience" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Case Experience"
            title="The kinds of matters we support"
            description="Representative case types drawn from our practice areas — not a record of specific case outcomes."
          />
        </Reveal>

        <div className="mt-14 border-t border-navy-950/10">
          {caseExperience.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <a
                href="/contact"
                className="group grid grid-cols-1 gap-3 border-b border-navy-950/10 py-8 transition-colors duration-300 hover:bg-cream-50 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
                  {item.category}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-navy-950">{item.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-navy-950/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-600 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
