import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges, siteConfig } from "@/data/site";
import { hasExpertPhoto } from "@/lib/expert-photo";

export function MinimalAboutMe() {
  const hasPhoto = hasExpertPhoto(expert.photo);

  return (
    <section id="about" className="bg-dust-100 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-amaranth-600">
            About
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-noir-950 sm:text-6xl">
            {expert.greeting}
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-noir-600">
            {expert.shortBio}
          </p>

          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-noir-400">
            {expert.methodology}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-noir-600 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-amaranth-500 px-8 py-4 text-sm font-semibold text-white shadow-sm shadow-amaranth-500/25 transition-colors hover:bg-amaranth-600"
          >
            Work with Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amaranth-500 to-amaranth-700">
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
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%)",
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-4xl font-semibold text-white">
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <p className="mt-5 text-lg font-semibold text-white">{expert.name}</p>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-white/70">
                    {siteConfig.motto}
                  </p>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
