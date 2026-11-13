import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones, Mic, Radio } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { PodcastCover } from "@/components/site/podcast-cover";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { company, podcast } from "@/data/vc";
import { getEpisodes } from "@/lib/content";
import { formatDate } from "@/components/site/post-card";

export const metadata: Metadata = {
  title: `Podcast | ${company.name}`,
  description: podcast.blurb,
};

const topics = [
  "What makes a vocational opinion hold up under cross-examination",
  "Earning capacity versus actual earnings",
  "Career transition for athletes and veterans",
  "Returning to work after injury",
];

const bars = [0.45, 0.8, 0.6, 1, 0.7, 0.4, 0.9, 0.55, 0.85, 0.5, 0.75, 0.35, 0.95, 0.6, 0.8, 0.45];

export default async function PodcastPage() {
  const episodes = await getEpisodes();

  return (
    <>
      <PageHero eyebrow="The podcast" title={podcast.title} crumbs={[{ label: "Podcast" }]}>
        {podcast.blurb}
      </PageHero>

      <section className="bg-white py-14 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal from="left" className="mx-auto w-full max-w-md">
            <div className="relative">
              <div className="animate-glow absolute inset-6 rounded-full bg-gold-400/40 blur-3xl" />
              <div className="relative overflow-hidden rounded-sm border-4 border-white shadow-2xl shadow-navy-900/30 ring-1 ring-gold-400/40">
                <PodcastCover />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={episodes.length ? `${episodes.length} episode${episodes.length === 1 ? "" : "s"}` : podcast.status}
              title={episodes.length ? "Listen to the latest episodes" : "Coming soon to your headphones"}
            />
            <Reveal delay={100}>
              <div className="mt-8 flex h-14 items-end gap-1.5" aria-hidden>
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="animate-wave w-1.5 origin-bottom rounded-full bg-gradient-to-t from-amaranth-500 to-gold-400"
                    style={{ height: `${h * 56}px`, animationDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>
              {episodes.length > 0 ? (
                <ul className="mt-8 space-y-4">
                  {episodes.map((ep) => (
                    <li key={ep.id} className="rounded-sm border border-navy-900/10 p-5 transition-colors hover:border-gold-400">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">
                        Episode {String(ep.number).padStart(2, "0")}
                        {ep.duration ? ` · ${ep.duration}` : ""} · {formatDate(ep.published_at)}
                      </p>
                      <p className="font-heading mt-1.5 text-xl font-bold uppercase leading-tight tracking-wide text-navy-900">{ep.title}</p>
                      {ep.description && <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{ep.description}</p>}
                      {ep.listen_url && (
                        <a
                          href={ep.listen_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading mt-4 inline-flex h-10 items-center gap-2 rounded-sm bg-navy-900 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-400 hover:text-navy-950"
                        >
                          <Headphones className="h-3.5 w-3.5" /> Listen
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="mt-8 text-base leading-relaxed text-ink-700">
                    Interviews and analysis on vocational evidence, earning capacity, and rehabilitation practice — for
                    attorneys, employers, and anyone navigating a change in their working life. Topics we plan to cover:
                  </p>
                  <ul className="mt-6 space-y-3">
                    {topics.map((t, i) => (
                      <li key={t} className="flex items-center gap-4 rounded-sm border border-navy-900/10 p-4">
                        <span className="font-heading w-8 text-xl font-bold text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[0.95rem] text-ink-700">{t}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-3 lg:px-10">
          {[
            { icon: Headphones, title: "Listen anywhere", text: "Episodes will be available on the major podcast apps." },
            { icon: Mic, title: "Suggest a topic", text: "Tell us the questions you want answered on the show." },
            { icon: Radio, title: "Be a guest", text: "Attorneys and practitioners are welcome to get in touch." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="h-full border-l-2 border-gold-400 pl-5">
                <c.icon className="h-6 w-6 text-gold-300" />
                <p className="font-heading mt-3 text-xl font-bold uppercase tracking-wide">{c.title}</p>
                <p className="mt-1 text-sm text-white/65">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="font-heading group inline-flex h-12 items-center gap-2 rounded-sm bg-gold-400 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              Get in touch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
