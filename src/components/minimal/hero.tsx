import { ArrowRight, PhoneCall, ShieldCheck, Award } from "lucide-react";
import { ScalesIllustration } from "@/components/minimal/scales-illustration";
import { credentialBadges, siteConfig } from "@/data/site";

export function MinimalHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amaranth-100 blur-2xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-amaranth-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amaranth-600">
            <span className="h-1.5 w-1.5 rounded-full bg-amaranth-500" />
            Board-Certified Vocational Expert Witness
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.15] text-balance text-noir-950 sm:text-5xl lg:text-[3.25rem]">
            Vocational testimony you can{" "}
            <span className="text-amaranth-600">build a case on.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-noir-400">
            For nearly two decades, {siteConfig.name} has provided attorneys and courts
            with objective, evidence-based opinions on earning capacity, employability,
            and vocational loss.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-amaranth-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-amaranth-500/25 transition-colors hover:bg-amaranth-600"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-dust-300 px-6 py-3.5 text-sm font-semibold text-noir-600 transition-colors hover:border-amaranth-400 hover:text-amaranth-600"
            >
              <PhoneCall className="h-4 w-4" /> Speak with an Expert
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-noir-300">
            {credentialBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-2">
                {i !== 0 && <span className="h-1 w-1 rounded-full bg-dust-400" />}
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amaranth-500 to-amaranth-700">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 45%)",
              }}
            />
            <ScalesIllustration className="absolute inset-0 m-auto h-56 w-56 text-white/90" />
          </div>

          <div className="animate-float absolute -left-8 top-8 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-noir-950/10">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-dust-200 text-amaranth-600">
              <Award className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold text-noir-950">ABVE/D</div>
              <div className="text-[0.7rem] text-noir-300">Diplomate</div>
            </div>
          </div>

          <div
            className="animate-float absolute -right-6 bottom-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-noir-950/10"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amaranth-100 text-amaranth-600">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold text-noir-950">20 Years</div>
              <div className="text-[0.7rem] text-noir-300">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
