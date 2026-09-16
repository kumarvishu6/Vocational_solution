import { Reveal } from "@/components/ui/reveal";
import { credibility } from "@/data/site";

export function BoldCredibility() {
  return (
    <section className="bg-noir-950 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-mono-case text-xs uppercase tracking-[0.2em] text-amaranth-400">
            / Why Attorneys Retain Us
          </p>
          <h2 className="font-oswald mt-4 max-w-2xl text-4xl uppercase leading-[1.05] text-paper-100 sm:text-5xl">
            A record that speaks before she does
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-paper-100/10 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="bg-noir-950 p-8">
              <span className="font-mono-case text-xs text-amaranth-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-oswald mt-4 text-xl uppercase leading-tight text-paper-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-100/50">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
