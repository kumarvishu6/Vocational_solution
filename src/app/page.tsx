import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const templates = [
  {
    slug: "prestige",
    name: "Heritage",
    subtitle: "Navy & Gold",
    description:
      "Built directly on the logo — deep navy, champagne gold and ivory, with classical serif headlines and fine gold rules. The closest match to her existing brand and flyer.",
    swatches: ["#002642", "#d0a944", "#fdfbf7"],
    bg: "bg-[#002642]",
    text: "text-white",
    accent: "text-[#d0a944]",
    border: "border-[#d0a944]/30 hover:border-[#d0a944]/70",
  },
  {
    slug: "bold",
    name: "Counsel",
    subtitle: "Amaranth & Ink",
    description:
      "White-dominant and editorial, with deep amaranth as the signature and ink-black contrast blocks. Confident, high-contrast, driven by oversized type.",
    swatches: ["#faf7f8", "#840032", "#02040f"],
    bg: "bg-[#faf7f8]",
    text: "text-noir-950",
    accent: "text-[#840032]",
    border: "border-[#840032]/30 hover:border-[#840032]/70",
  },
  {
    slug: "minimal",
    name: "Sterling",
    subtitle: "Dust & Burgundy",
    description:
      "Warm dust grey with burgundy accents and soft rounded panels. The gentlest of the three — approachable and modern without losing authority.",
    swatches: ["#e5dada", "#840032", "#02040f"],
    bg: "bg-[#e5dada]",
    text: "text-noir-950",
    accent: "text-[#a61b4b]",
    border: "border-[#840032]/25 hover:border-[#840032]/60",
  },
];

export default function TemplatePicker() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 text-3xl font-medium text-balance sm:text-4xl">
            Choose a homepage direction
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/50">
            Three fully-built homepage concepts, same content, different visual language.
            Open each one, click around, then let us know which direction to build the rest
            of the site on.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {templates.map((t) => (
            <Link
              key={t.slug}
              href={`/templates/${t.slug}`}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition-colors duration-300 ${t.border}`}
            >
              <div className={`flex h-40 items-center justify-center gap-3 ${t.bg}`}>
                {t.swatches.map((c) => (
                  <span
                    key={c}
                    className="h-10 w-10 rounded-full ring-1 ring-white/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="flex flex-1 flex-col bg-neutral-900 p-6">
                <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.accent}`}>
                  {t.subtitle}
                </div>
                <h2 className="mt-2 text-xl font-medium text-white">{t.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                  {t.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
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
