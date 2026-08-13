import { ArrowRight, PhoneCall, Scale, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { credentialBadges, stats, siteConfig, memberships } from "@/data/site";

export function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 55% at 88% 4%, rgba(201,162,77,0.20) 0%, rgba(201,162,77,0) 60%), radial-gradient(45% 40% at 8% 92%, rgba(201,162,77,0.10) 0%, rgba(201,162,77,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative grid grid-cols-1 gap-16 pb-16 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-24 lg:pt-28">
        <div>
          <div className="flex flex-wrap items-center gap-2 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-300" />
              Board-Certified Vocational Expert Witness
            </span>
          </div>

          <h1
            className="mt-7 max-w-xl font-serif text-[2.75rem] leading-[1.05] text-balance text-white sm:text-6xl lg:text-[3.4rem] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Vocational testimony that{" "}
            <span className="relative whitespace-nowrap text-gold-300">
              withstands cross-examination
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-400/70"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 C 60 2, 240 2, 298 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p
            className="mt-7 max-w-lg text-lg leading-relaxed text-white/60 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            For nearly two decades, {siteConfig.name} has provided attorneys and courts with
            objective, evidence-based opinions on earning capacity, employability, and
            vocational loss — qualified as an expert in most Florida counties and
            federal courts.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="/contact" size="lg">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <PhoneCall className="h-4 w-4" /> Speak with an Expert
            </Button>
          </div>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-white/15 px-3 py-1 font-serif text-sm tracking-wide text-white/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div
            aria-hidden
            className="absolute h-[300px] w-[300px] rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201,162,77,0.18) 0%, rgba(201,162,77,0) 70%)",
            }}
          />

          <div className="animate-drift relative w-[300px]">
            <div className="absolute inset-0 translate-x-4 translate-y-6 rotate-6 rounded-[1.75rem] border border-white/10 bg-navy-900/40" />
            <div className="absolute inset-0 translate-x-2 translate-y-3 rotate-3 rounded-[1.75rem] border border-white/10 bg-navy-900/60" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-400/30 bg-navy-900/90 p-7 shadow-2xl shadow-black/50 backdrop-blur">
              <div
                aria-hidden
                className="animate-holo pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent"
              />

              <div className="relative flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-300/80">
                  Expert Credential
                </span>
                <BadgeCheck className="h-4 w-4 text-gold-300" />
              </div>

              <div className="relative mt-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-gradient-to-br from-navy-800 to-navy-950">
                  <Scale className="h-7 w-7 text-gold-300" />
                </div>
                <div>
                  <div className="font-serif text-lg leading-tight text-white">
                    {siteConfig.shortName}
                  </div>
                  <div className="mt-1 text-xs text-white/45">Vocational Expert Witness</div>
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {credentialBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded border border-gold-400/30 bg-gold-400/10 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-gold-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                <div>
                  <div className="font-serif text-2xl text-white">{stats[2].value}</div>
                  <div className="mt-0.5 text-[0.7rem] text-white/40">{stats[2].label}</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-white">{stats[3].value}</div>
                  <div className="mt-0.5 text-[0.7rem] text-white/40">{stats[3].label}</div>
                </div>
              </div>

              <div className="relative mt-6 flex items-end gap-[3px]">
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2].map((w, i) => (
                  <span
                    key={i}
                    className="bg-white/15"
                    style={{ width: 2, height: `${w * 4 + 6}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-y border-white/10 bg-navy-900/40 py-4">
        <Marquee
          items={[...memberships.map((m) => m.name), ...credentialBadges.map((c) => `${c} Certified`)]}
        />
      </div>

      <Container className="relative grid grid-cols-2 gap-x-8 gap-y-10 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-3xl text-white sm:text-4xl">{stat.value}</div>
            <div className="mt-1.5 text-sm text-white/45">{stat.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}
