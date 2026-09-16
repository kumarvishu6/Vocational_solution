import { MapPin, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { delivery } from "@/data/site";

const icons = [MapPin, MonitorSmartphone];

export function Delivery() {
  return (
    <section className="border-y border-navy-900/10 bg-cream-100 py-14">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr_auto] lg:gap-14">
        {delivery.map((item, i) => {
          const Icon = icons[i] ?? MapPin;
          return (
            <Reveal key={item.title} delay={i * 90} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}

        <Reveal delay={180}>
          <p className="font-serif text-xl italic leading-snug text-gold-600 lg:text-right">
            Make sure you hire
            <br />
            the right expert.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
