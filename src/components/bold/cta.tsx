import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function BoldCta() {
  return (
    <section className="bg-charcoal-950 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="font-oswald text-4xl uppercase leading-[1.05] text-stone-100 sm:text-6xl">
            Have a complex case?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-stone-100/50">
            We respond to all inquiries within one business day.
          </p>
          <div className="mt-9">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 border-b-2 border-clay-500 pb-1 text-lg font-medium text-stone-100 transition-colors hover:text-clay-400"
            >
              Schedule a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
