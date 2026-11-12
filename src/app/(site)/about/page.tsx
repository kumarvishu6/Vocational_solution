import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Building2, House, Video } from "lucide-react";
import { Expandable } from "@/components/site/expandable";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { company, credentials, memberships, team } from "@/data/vc";

export const metadata: Metadata = {
  title: `About | ${company.name}`,
  description: company.intro,
};

const lead = team[0];

const ways = [
  {
    icon: Building2,
    title: "In-office",
    text: "We meet clients in a professional Regus office suite, with locations across Florida and the country.",
  },
  {
    icon: Video,
    title: "Virtual",
    text: "Virtual vocational evaluations through video meetings, reducing cost where in-person is not required.",
  },
  {
    icon: House,
    title: "At home",
    text: "When it serves the client best, our evaluators come to them. We travel throughout the state, and nationally if needed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the firm" title="Vocational & rehabilitation expert services" crumbs={[{ label: "About" }]}>
        {company.intro}
      </PageHero>

      <section className="bg-white py-14 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading eyebrow="Company overview" title="Individual expertise for every vocational need" />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-ink-700 sm:text-lg">
                Vocational Concepts LLC offers a wide range of vocational and rehabilitation services throughout the U.S.
                and Florida, specializing in forensic vocational testimony for marital dissolution, personal injury,
                Social Security, and other forensic rehabilitation cases.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Our counselors are all master&apos;s-level Certified Rehabilitation Counselors, and we are partners with
                the Florida Division of Vocational Rehabilitation.
              </p>
            </Reveal>
          </div>
          <Reveal from="right" className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-sm border-2 border-gold-400 sm:block" />
            <div className="group relative aspect-[16/11] overflow-hidden rounded-sm shadow-2xl shadow-navy-900/20">
              <Image
                src="/images/consultation.jpg"
                alt="Vocational Concepts consultants reviewing case documents"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading center eyebrow="How we work" title="Three ways to meet with us" />
          <div className="mobile-swipe mt-8 grid sm:mt-12 gap-5 sm:grid-cols-3">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 110}>
                <div className="group h-full rounded-sm bg-white p-8 text-center shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-gold-300 transition-transform duration-500 group-hover:rotate-[360deg]">
                    <w.icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading mt-6 text-2xl font-bold uppercase tracking-wide text-navy-900">{w.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ms-fisher" className="scroll-mt-28 bg-white py-14 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal from="left" className="relative mx-auto w-full max-w-[16rem] sm:max-w-sm lg:sticky lg:top-32 lg:max-w-none lg:self-start">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-sm bg-gold-400" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-navy-900/25">
              <Image
                src={lead.photo!}
                alt={`${lead.name}, ${lead.credentials}`}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-sm bg-navy-900 px-4 py-3 text-white shadow-xl sm:-right-6">
              <Award className="h-5 w-5 text-gold-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">ABVE Diplomate</span>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Director & owner" title="Meet Ms. Fisher" />
            <Reveal delay={100}>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amaranth-500">
                {lead.name} · {lead.credentials}
              </p>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
                {lead.bio.slice(0, 2).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <Expandable label="Read full biography" openLabel="Show less">
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-700">
                  {lead.bio.slice(2).map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </Expandable>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {credentials.map((c) => (
                  <li key={c.abbr} className="flex items-start gap-3 rounded-sm border border-navy-900/10 p-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span>
                      <span className="font-heading block text-lg font-bold text-navy-900">{c.abbr}</span>
                      <span className="text-sm text-ink-500">{c.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow-line text-center text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
              Professional & certifying associations
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {memberships.map((m, i) => (
              <Reveal key={m.name} delay={i * 110}>
                <div className="h-full border-l-2 border-gold-400 pl-5">
                  <p className="font-heading text-xl font-bold uppercase leading-tight tracking-wide">{m.name}</p>
                  <p className="mt-2 text-sm text-white/60">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-10">
          <Reveal>
            <p className="font-heading text-2xl font-bold uppercase tracking-wide text-navy-900 sm:text-3xl">
              Five more certified evaluators stand behind every case.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/team"
              className="font-heading group inline-flex h-12 shrink-0 items-center gap-2 rounded-sm bg-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-800"
            >
              Meet the team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
