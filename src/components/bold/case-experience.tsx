import { Reveal } from "@/components/ui/reveal";
import { caseExperience } from "@/data/site";

export function BoldCaseExperience() {
  return (
    <section className="bg-stone-100 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-oswald text-3xl uppercase text-charcoal-950 sm:text-4xl">
            Case Experience
          </h2>
          <p className="mt-3 max-w-lg text-sm text-charcoal-500">
            Representative case types drawn from our practice areas &mdash; not a
            record of specific case outcomes.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseExperience.map((item, i) => (
            <Reveal key={item.id} delay={i * 80}>
              <a
                href="/contact"
                className="group flex h-full flex-col justify-between rounded-sm border border-charcoal-950/15 bg-stone-50 p-8 transition-colors duration-300 hover:border-clay-500/60"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-clay-600">
                    {item.category}
                  </span>
                  <h3 className="font-oswald mt-3 text-2xl uppercase leading-tight text-charcoal-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
                    {item.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
