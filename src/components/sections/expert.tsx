import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges } from "@/data/site";

export function Expert() {
  return (
    <section id="expert" className="bg-cream-50 py-24 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Meet the Expert
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-navy-950 sm:text-4xl">
            {expert.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-ink-500">{expert.credentials}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
            {expert.bio}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500">
            {expert.education}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-navy-950/15 px-3 py-1 text-xs font-semibold tracking-wide text-navy-950"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-grain relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-950">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 60% at 50% 30%, rgba(201,162,77,0.22) 0%, rgba(201,162,77,0) 65%)",
              }}
            />
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="font-serif text-6xl text-gold-300">
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="mt-4 h-px w-12 bg-gold-400/60" />
              <p className="mt-4 font-serif text-lg text-white">Director &amp; Owner</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Vocational Concepts
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
