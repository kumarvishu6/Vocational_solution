import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/data/site";

export function Process() {
  return (
    <section className="bg-navy-950 py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear, defensible process from intake to testimony"
            light
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <div className="border-t border-gold-400/30 pt-6">
                <span className="font-serif text-2xl text-gold-400">{item.step}</span>
                <h3 className="mt-3 font-serif text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
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
