import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const templates = [
  {
    slug: "prestige",
    name: "Prestige",
    subtitle: "Navy & Gold",
    description:
      "Editorial serif headlines, deep navy with warm gold accents, credential-badge motifs. Traditional courtroom authority with a modern finish.",
    swatches: ["#0b1730", "#c9a24d", "#faf7f0"],
    bg: "bg-[#0b1730]",
    text: "text-white",
    accent: "text-[#c9a24d]",
    border: "border-[#c9a24d]/30 hover:border-[#c9a24d]/70",
  },
  {
    slug: "bold",
    name: "Authority",
    subtitle: "Ivory & Clay",
    description:
      "Warm ivory and charcoal with a terracotta accent. Drama comes from oversized editorial type and scale, not darkness — confident and modern.",
    swatches: ["#f3ecdd", "#b8582f", "#1c1712"],
    bg: "bg-[#f3ecdd]",
    text: "text-charcoal-950",
    accent: "text-[#cf7952]",
    border: "border-[#b8582f]/30 hover:border-[#b8582f]/70",
  },
  {
    slug: "minimal",
    name: "Clarity",
    subtitle: "White & Azure",
    description:
      "Friendly, rounded, approachable. White backgrounds, a confident blue accent, tinted icon chips, and soft illustration panels — modern consultancy warmth.",
    swatches: ["#ffffff", "#3563e9", "#f3ecdd"],
    bg: "bg-white",
    text: "text-slate-900",
    accent: "text-[#3563e9]",
    border: "border-[#3563e9]/25 hover:border-[#3563e9]/60",
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
