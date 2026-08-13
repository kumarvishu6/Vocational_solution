import { ArrowRight, PhoneCall } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ScalesIllustration } from "@/components/minimal/scales-illustration";

export function MinimalCta() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-azure-500 to-azure-700 px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 40%)",
          }}
        />
        <ScalesIllustration className="pointer-events-none absolute -right-10 -bottom-10 hidden h-64 w-64 text-white/10 md:block" />

        <Reveal className="relative">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to discuss your case?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Schedule a consultation or request an evaluation. We respond to all inquiries
            within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-azure-700 transition-colors hover:bg-azure-50"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
            >
              <PhoneCall className="h-4 w-4" /> Speak with an Expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
