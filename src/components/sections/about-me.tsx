import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges, siteConfig } from "@/data/site";
import { hasExpertPhoto } from "@/lib/expert-photo";

export function AboutMe() {
  const hasPhoto = hasExpertPhoto(expert.photo);

  return (
    <section id="about" className="bg-cream-100 py-16 sm:py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            About
          </p>

          <h2 className="mt-5 font-serif text-[2.5rem] leading-[1.08] text-navy-900 sm:text-5xl lg:text-6xl">
            {expert.greeting}
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-700">
            {expert.shortBio}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-500">
            {expert.methodology}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-navy-900/15 px-3.5 py-1 text-xs font-semibold tracking-wide text-navy-900"
              >
                {badge}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-300"
          >
            Work with Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-sm">
            {/* offset gold mat, echoing the flyer's gold rules */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-gold-400/50"
            />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-navy-900">
              {hasPhoto ? (
                <Image
                  src={expert.photo}
                  alt={`${expert.name}, ${expert.title}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(70% 55% at 50% 22%, rgba(208,169,68,0.28) 0%, rgba(208,169,68,0) 65%)",
                    }}
                  />
                  <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                    <span className="font-serif text-7xl text-gold-300">
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="mt-5 h-px w-14 bg-gold-400/70" />
                    <p className="mt-5 font-serif text-lg text-white">{expert.name}</p>
                    <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-white/50">
                      {siteConfig.motto}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
