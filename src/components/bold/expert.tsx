import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges } from "@/data/site";

export function BoldExpert() {
  return (
    <section className="bg-stone-100 py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.8fr_1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <div className="animate-float relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-clay-500">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(80% 60% at 30% 20%, rgba(28,23,18,0.35) 0%, rgba(28,23,18,0) 60%)",
              }}
            />
            <div
              aria-hidden
              className="animate-holo pointer-events-none absolute -top-1/2 -left-1/2 h-[200%] w-[200%] bg-gradient-to-br from-transparent via-white/15 to-transparent"
            />
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="font-oswald text-7xl text-stone-100">
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="mt-4 h-px w-12 bg-stone-100/60" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-100/80">
                Director &amp; Owner
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay-600">
            Meet the Expert
          </p>
          <h2 className="font-oswald mt-4 text-4xl uppercase leading-tight text-charcoal-950 sm:text-5xl">
            {expert.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-charcoal-500">{expert.credentials}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-700">
            {expert.bio}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-charcoal-950/15 px-3 py-1 text-xs font-semibold tracking-wide text-charcoal-950"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal-950 px-7 py-3.5 text-sm font-medium text-stone-100 transition-colors hover:bg-clay-600"
            >
              Schedule a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
