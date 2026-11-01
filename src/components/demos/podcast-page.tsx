import Link from "next/link";
import { ArrowLeft, Mic } from "lucide-react";
import { podcast } from "@/data/site";
import { cn } from "@/lib/utils";
import type { DemoVariant } from "@/components/demos/demo-nav";

const accent: Record<DemoVariant, { text: string; icon: string; panel: string }> = {
  courthouse: {
    text: "text-gold-600",
    icon: "bg-navy-900 text-gold-300",
    panel: "border border-gold-400/50",
  },
  journal: {
    text: "text-amaranth-500",
    icon: "bg-amaranth-500 text-gold-200",
    panel: "border-y-[3px] border-double border-navy-900",
  },
  casefile: {
    text: "text-gold-600",
    icon: "bg-navy-900 text-gold-300 rounded-2xl",
    panel: "rounded-[2rem] bg-cream-100",
  },
};

export function PodcastPage({ base, variant }: { base: string; variant: DemoVariant }) {
  const style = accent[variant];

  return (
    <section className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Link href={base} className="inline-flex items-center gap-2 text-sm font-medium text-navy-900/70 hover:text-navy-900">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <p className={cn("mt-10 text-xs font-semibold uppercase tracking-[0.2em]", style.text)}>Podcast</p>
        <h1 className="font-display mt-4 text-4xl leading-tight text-navy-900 sm:text-6xl">{podcast.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-700">{podcast.blurb}</p>

        <div className={cn("mt-12 flex items-center gap-5 p-6 sm:p-8", style.panel)}>
          <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center", style.icon)}>
            <Mic className="h-6 w-6" />
          </span>
          <div>
            <div className="font-semibold text-navy-900">{podcast.status}</div>
            <p className="mt-1 text-sm text-ink-500">New episodes will be listed here with a built-in player.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
