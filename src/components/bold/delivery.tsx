import { MapPin, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { delivery } from "@/data/site";

const icons = [MapPin, MonitorSmartphone];

export function BoldDelivery() {
  return (
    <section className="border-y border-noir-950/15 bg-paper-50 py-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1fr_1fr_auto] lg:gap-14 lg:px-10">
        {delivery.map((item, i) => {
          const Icon = icons[i] ?? MapPin;
          return (
            <Reveal key={item.title} delay={i * 90} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amaranth-500 text-paper-100">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-oswald text-lg uppercase tracking-wide text-noir-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-noir-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}

        <Reveal delay={180}>
          <p className="font-serif text-xl italic leading-snug text-amaranth-600 lg:text-right">
            Make sure you hire
            <br />
            the right expert.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
