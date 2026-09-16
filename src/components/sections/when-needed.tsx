import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { whenNeeded, otherReasons } from "@/data/site";

export function WhenNeeded() {
  return (
    <section id="when-needed" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              For Attorneys
            </p>
            <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-navy-900 sm:text-4xl">
              When might your client need a vocational expert?
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-7">
            {whenNeeded.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400 text-navy-950">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-cream-100 p-9 lg:p-11">
            <h3 className="font-serif text-2xl italic leading-snug text-navy-900">
              Other reasons you may need to hire an expert
            </h3>
            <span className="mt-5 block h-px w-16 bg-gold-400" />

            <ul className="mt-7 flex flex-col gap-4">
              {otherReasons.map((reason) => (
                <li key={reason} className="flex gap-3.5">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
