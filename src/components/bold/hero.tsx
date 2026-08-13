import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { StatReveal } from "@/components/bold/stat-reveal";
import { stats, siteConfig, memberships, credentialBadges } from "@/data/site";

export function BoldHero() {
  return (
    <section className="bg-grain relative overflow-hidden border-b border-charcoal-950/10 bg-stone-100">
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-clay-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(28,23,18,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(28,23,18,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-20 sm:pt-28 lg:px-10 lg:pb-20">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-clay-600 animate-fade-up">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-clay-500" />
          Board-Certified Vocational Expert Witness
        </div>

        <h1
          className="font-oswald mt-8 max-w-3xl text-4xl font-medium uppercase leading-[1.08] tracking-tight text-charcoal-950 sm:text-6xl lg:text-[4.25rem] animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Expertise that stands up to <span className="text-clay-600">scrutiny.</span>
        </h1>

        <div
          className="mt-10 flex flex-col gap-8 border-t border-charcoal-950/15 pt-8 sm:flex-row sm:items-end sm:justify-between animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          <p className="max-w-md text-lg leading-relaxed text-charcoal-700">
            For nearly two decades, {siteConfig.name} has provided attorneys and courts
            with objective, evidence-based vocational testimony &mdash; qualified as an
            expert in most Florida counties and federal courts.
          </p>
          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 border-b-2 border-charcoal-950 pb-1 text-lg font-medium text-charcoal-950 transition-colors hover:border-clay-600 hover:text-clay-600"
          >
            Schedule a Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="relative border-t border-charcoal-950/15">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-x-12 gap-y-8 px-6 py-8 lg:px-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex min-w-[9rem] flex-col gap-2.5 ${i !== 0 ? "sm:border-l sm:border-charcoal-950/15 sm:pl-12" : ""}`}
            >
              <StatReveal value={stat.value} delay={i * 150} />
              <span className="text-xs uppercase tracking-wide text-charcoal-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-charcoal-950/15 bg-charcoal-950/[0.03] py-3.5">
        <Marquee
          items={[...memberships.map((m) => m.name), ...credentialBadges.map((c) => `${c} Certified`)]}
          itemClassName="text-charcoal-500 normal-case tracking-normal text-xs font-medium"
          dotClassName="bg-clay-500/60"
        />
      </div>
    </section>
  );
}
