import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, FileText, Mic, Scale } from "lucide-react";
import { FaqList } from "@/components/site/faq-list";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { PodcastCover } from "@/components/site/podcast-cover";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { company, faqs, podcast } from "@/data/vc";

export const metadata: Metadata = {
  title: `Resources | ${company.name}`,
  description: "Articles, guides, podcast episodes, and answers on vocational evidence and earning capacity.",
};

const categories = [
  { icon: FileText, title: "Articles", text: "Practical writing on vocational evaluation and earning capacity." },
  { icon: Scale, title: "Legal resources", text: "Guides for attorneys on when and how to retain a vocational expert." },
  { icon: BookOpen, title: "Educational materials", text: "Plain-English explanations for individuals and families." },
  { icon: Mic, title: "Podcast", text: "Conversations on vocational evidence and rehabilitation practice." },
];

const links = [
  { name: "Florida Division of Vocational Rehabilitation", href: "https://www.rehabworks.org" },
  { name: "American Board of Vocational Experts", href: "https://www.abve.net" },
  { name: "Social Security disability benefits", href: "https://www.ssa.gov/disability" },
  { name: "Regus office locations", href: "https://www.regus.com/en-us/united-states" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Resource library" title="Insight, guidance & answers" crumbs={[{ label: "Resources" }]}>
        Articles, legal and educational resources, and podcast episodes for attorneys, employers, and individuals.
      </PageHero>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="The library" title="What you'll find here" />
          <div className="mobile-swipe mt-8 grid sm:mt-12 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="group h-full rounded-sm border border-navy-900/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold-100 text-gold-600 transition-colors group-hover:bg-navy-900 group-hover:text-gold-300">
                    <c.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading mt-5 text-xl font-bold uppercase tracking-wide text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative mt-10 overflow-hidden rounded-sm bg-navy-900 p-8 text-white sm:p-12">
              <div className="animate-glow pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">Coming soon</p>
              <h3 className="font-heading relative mt-3 text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                The first articles are on their way
              </h3>
              <p className="relative mt-4 max-w-2xl text-white/70">
                New articles and guides will appear here as they are published. In the meantime, the answers below cover
                the questions we hear most, and our office is a phone call away.
              </p>
              <a
                href={`tel:${company.phoneHref}`}
                className="font-heading relative mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-gold-400 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-navy-950 transition-colors hover:bg-gold-300"
              >
                Call {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Answers for attorneys & clients" />
          <Reveal delay={100}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal from="left">
            <Link href="/podcast" className="group flex items-center gap-6 rounded-sm bg-cloud p-5 transition-shadow hover:shadow-xl">
              <PodcastCover compact className="h-28 w-28 shrink-0 rounded-sm sm:h-36 sm:w-36" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amaranth-500">Podcast</p>
                <p className="font-heading mt-2 text-2xl font-bold uppercase tracking-wide text-navy-900">{podcast.title}</p>
                <p className="mt-1 text-sm text-ink-500">{podcast.status}</p>
                <span className="font-heading mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-amaranth-500">
                  Visit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Helpful links" title="Useful organizations" />
            <Reveal delay={100}>
              <ul className="mt-8 divide-y divide-navy-900/10 border-y border-navy-900/10">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-4 text-[0.95rem] font-medium text-navy-900 transition-colors hover:text-amaranth-500"
                    >
                      {l.name}
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
