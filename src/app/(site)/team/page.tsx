import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { TeamCard } from "@/components/site/team-card";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/vc";
import { getTeam } from "@/lib/content";

export const metadata: Metadata = {
  title: `Team | ${company.name}`,
  description: "Meet the Vocational Concepts team of evaluators: master's-level Certified Rehabilitation Counselors led by Cindy L. Fisher.",
};

export default async function TeamPage() {
  const [lead, ...others] = await getTeam();

  return (
    <>
      <PageHero eyebrow="Our team" title="Team of evaluators" crumbs={[{ label: "Team" }]}>
        Our counselors are all master&apos;s-level Certified Rehabilitation Counselors, with mental health counselors
        who understand how psychiatric disabilities affect a person&apos;s ability to work.
      </PageHero>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="group grid overflow-hidden rounded-sm bg-navy-900 text-white shadow-2xl shadow-navy-900/20 md:grid-cols-[320px_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto">
                <Image
                  src={lead.photo!}
                  alt={lead.name}
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative p-8 sm:p-12">
                <div className="animate-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />
                <p className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
                  <Award className="h-4 w-4" /> {lead.role}
                </p>
                <h2 className="font-heading relative mt-3 text-4xl font-bold uppercase tracking-wide">{lead.name}</h2>
                <p className="relative mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">{lead.credentials}</p>
                <p className="relative mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{lead.summary}</p>
                <Link
                  href="/about#ms-fisher"
                  className="font-heading group/link relative mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 hover:text-white"
                >
                  Full biography <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Evaluators & specialists" title="The professionals behind every report" />
          <div className="mt-8 grid sm:mt-12 items-start gap-6 lg:grid-cols-2">
            {others.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 2) * 110}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
