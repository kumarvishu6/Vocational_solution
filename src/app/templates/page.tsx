import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const templates = [
  {
    slug: "courthouse",
    name: "The Courthouse",
    subtitle: "Navy & Gold",
    image: "/brand/courthouse-wide.jpg",
    description:
      "Classic and commanding. The courthouse fills the screen, with an elegant serif, fine gold rules and framed panels.",
  },
  {
    slug: "journal",
    name: "The Journal",
    subtitle: "White & Crimson",
    image: "/brand/courthouse-tall.jpg",
    description:
      "Laid out like a respected legal magazine, with large editorial headlines, ruled columns and crimson accents.",
  },
  {
    slug: "casefile",
    name: "The Case File",
    subtitle: "Modern Navy & Gold",
    image: "/brand/courthouse-tall.jpg",
    description:
      "Clean and modern. The courthouse sits in an arched window, with soft rounded panels and a shop you can browse by tab.",
  },
];

export default function TemplatePicker() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Image
            src="/brand/logo-horizontal.png"
            alt={siteConfig.legalName}
            width={1284}
            height={265}
            priority
            className="mx-auto h-14 w-auto"
          />
          <h1 className="mt-8 text-3xl font-semibold text-balance text-navy-900 sm:text-4xl">
            Choose a homepage direction
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-500">
            Three homepage designs with the same content. Open each one, then let us know which
            direction to build the rest of the site on.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {templates.map((t) => (
            <Link
              key={t.slug}
              href={`/templates/${t.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amaranth-500">{t.subtitle}</div>
                <h2 className="mt-2 text-xl font-semibold text-navy-900">{t.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{t.description}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                  View Homepage <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
