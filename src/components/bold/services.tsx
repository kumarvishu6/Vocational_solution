import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

export function BoldServices() {
  return (
    <section className="bg-paper-100 py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-noir-950/15 pb-8 sm:flex-row sm:items-end">
            <h2 className="font-oswald text-3xl uppercase text-noir-950 sm:text-4xl">
              What We Do
            </h2>
            <p className="max-w-sm text-sm text-noir-400">
              The full spectrum of vocational services attorneys, courts, and
              individuals rely on.
            </p>
          </div>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 5) * 40}>
              <a
                href="/contact"
                className="group flex flex-col gap-2 border-b border-noir-950/15 py-6 transition-colors duration-300 hover:bg-amaranth-100/40 sm:flex-row sm:items-center sm:gap-8 sm:py-8"
              >
                <span className="font-mono-case shrink-0 text-sm text-amaranth-600 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-oswald flex-1 text-2xl uppercase leading-tight text-noir-950 transition-colors duration-300 group-hover:text-amaranth-600 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-noir-400 sm:text-right">
                  {service.description}
                </p>
                <ArrowUpRight className="hidden h-6 w-6 shrink-0 text-noir-950/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-amaranth-600 sm:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
