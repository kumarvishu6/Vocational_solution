import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges, siteConfig } from "@/data/site";
import { hasExpertPhoto } from "@/lib/expert-photo";

export function BoldAboutMe() {
  const hasPhoto = hasExpertPhoto(expert.photo);

  return (
    <section id="about" className="bg-paper-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.8fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            {/* solid amaranth block offset behind the portrait */}
            <div
              aria-hidden
              className="absolute -left-5 -top-5 h-full w-full bg-amaranth-500"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-noir-950">
              {hasPhoto ? (
                <Image
                  src={expert.photo}
                  alt={`${expert.name}, ${expert.title}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                  <span className="font-oswald text-7xl text-paper-100">
                    {expert.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="mt-4 h-0.5 w-12 bg-amaranth-500" />
                  <p className="font-oswald mt-4 text-lg uppercase tracking-wide text-paper-100">
                    {expert.name}
                  </p>
                  <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-paper-100/50">
                    {siteConfig.motto}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono-case text-xs uppercase tracking-[0.2em] text-amaranth-600">
            / About
          </p>

          <h2 className="font-oswald mt-5 text-[2.5rem] uppercase leading-[1.05] text-noir-950 sm:text-5xl lg:text-6xl">
            {expert.greeting}
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-noir-600">
            {expert.shortBio}
          </p>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-noir-400">
            {expert.methodology}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="border border-noir-950/20 px-3 py-1 font-mono-case text-xs text-noir-600"
              >
                {badge}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 border-b-2 border-amaranth-500 pb-1 text-lg font-medium text-noir-950 transition-colors hover:text-amaranth-600"
          >
            Work with Me
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
