import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Comprehensive vocational expert services"
            description="From litigation support to career counseling, the full spectrum attorneys, courts, and individuals rely on."
          />
        </Reveal>

        <div className="mt-14 border-t border-navy-950/10">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 5) * 50}>
              <a
                href="/contact"
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-6 border-b border-navy-950/10 py-6 transition-colors duration-300 hover:bg-cream-50 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-x-10 sm:px-4"
              >
                <span className="font-serif text-lg text-gold-600 sm:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-navy-950 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-500 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100 sm:max-h-24 sm:opacity-70 sm:group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="mt-3 hidden h-5 w-5 shrink-0 text-navy-950/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-600 sm:mt-0 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
