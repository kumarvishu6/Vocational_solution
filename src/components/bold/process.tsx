import { Reveal } from "@/components/ui/reveal";
import { process } from "@/data/site";

export function BoldProcess() {
  return (
    <section className="bg-noir-950 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-oswald text-3xl uppercase text-paper-100 sm:text-4xl">
            How We Work
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-4">
          <div
            aria-hidden
            className="animate-grow-x absolute left-0 right-0 top-3 hidden h-px origin-left bg-paper-100/15 sm:block"
            style={{ animationDelay: "200ms" }}
          />
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 90} className="relative">
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-amaranth-500 font-mono-case text-[0.65rem] text-paper-100 transition-transform duration-300 hover:scale-125">
                {i + 1}
              </span>
              <h3 className="font-oswald mt-5 text-lg uppercase text-paper-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-100/50">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
