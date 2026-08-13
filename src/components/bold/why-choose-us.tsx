import { Reveal } from "@/components/ui/reveal";
import { credentials, whyChooseUs, memberships } from "@/data/site";

export function BoldWhyChooseUs() {
  return (
    <section className="bg-charcoal-950 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-oswald text-3xl uppercase text-stone-100 sm:text-4xl">
            Credentials &amp; Affiliations
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-px bg-stone-100/10 sm:grid-cols-2">
            {credentials.map((c, i) => (
              <Reveal key={c.abbr} delay={i * 60} className="bg-charcoal-950 p-6">
                <div className="font-oswald text-2xl text-clay-400">{c.abbr}</div>
                <div className="mt-1.5 text-sm text-stone-100">{c.title}</div>
                <div className="mt-1 text-xs text-stone-100/40">{c.org}</div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} className="border-l-2 border-clay-500 pl-5">
                <h3 className="font-oswald text-lg uppercase text-stone-100">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-100/50">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-14 border-t border-stone-100/10 pt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-100/50">
            {memberships.map((m, i) => (
              <span key={m.name} className="flex items-center gap-3">
                {i !== 0 && <span className="h-1 w-1 rounded-full bg-stone-100/25" />}
                <span className="text-stone-100/80">{m.name}</span>
                <span className="text-xs uppercase tracking-wide text-clay-400">{m.role}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
