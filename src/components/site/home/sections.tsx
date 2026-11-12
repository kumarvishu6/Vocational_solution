import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Building2, Check, Mic, Phone, Quote } from "lucide-react";
import { SiteIcon } from "@/components/site/icon";
import { SectionHeading } from "@/components/site/section-heading";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { company, credentials, offices, podcast, services, specialPrograms, stats, team, whyRetain } from "@/data/vc";

function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`font-heading group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] ${
        light ? "text-gold-300 hover:text-white" : "text-amaranth-500 hover:text-navy-900"
      } transition-colors`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function WhoWeAre() {
  return (
    <section className="overflow-hidden bg-cloud py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionHeading eyebrow="Who we are" title="An established voice in forensic vocational consulting" />
          <Reveal delay={100}>
            <p className="mt-6 text-base leading-relaxed text-ink-700 sm:text-lg">
              Vocational Concepts offers individual expertise to meet all of your vocational needs. Career planning,
              labor market research, and wage-earning capacity are just a few of our services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We meet with our clients in an in-office setting through a Regus suite, virtually, or at home. We travel
              throughout the state, and nationally if needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <TextLink href="/about">About the firm</TextLink>
              <TextLink href="/team">Meet the team</TextLink>
            </div>
          </Reveal>
        </div>

        <Reveal from="right" className="relative">
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-sm border-2 border-gold-400 sm:block" />
          <div className="group relative aspect-[16/11] overflow-hidden rounded-sm shadow-2xl shadow-navy-900/20">
            <Image
              src="/images/consultation.jpg"
              alt="Vocational Concepts consultants reviewing case documents"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
          </div>
          <div className="animate-float absolute -bottom-6 left-4 flex items-center gap-4 rounded-sm bg-navy-900 px-5 py-4 text-white shadow-xl sm:-left-6">
            <span className="font-heading text-4xl font-bold text-gold-300">20+</span>
            <span className="text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-white/80">
              Years of
              <br />
              practice
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyRetain() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading center eyebrow="Why retain Vocational Concepts" title="Six reasons attorneys choose us" />
        <div className="mobile-swipe mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyRetain.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 110}>
              <div className="group relative h-full overflow-hidden rounded-sm border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-xl hover:shadow-navy-900/10">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-amaranth-500 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-gold-100 text-gold-600 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold-300">
                  <SiteIcon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-heading mt-6 text-xl font-bold uppercase tracking-wide text-navy-900">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedServices() {
  return (
    <section className="bg-cloud py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Featured services" title="Litigation-ready vocational expertise">
            Vocational services and litigation support for attorneys and courts, and rehabilitation and career services
            for individuals.
          </SectionHeading>
          <Reveal>
            <Link
              href="/services"
              className="font-heading group inline-flex h-12 items-center gap-2 rounded-sm border border-navy-900 px-6 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              All services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mobile-swipe mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 110}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-navy-900 transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-gold-300 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                  <SiteIcon name={s.icon} className="h-5 w-5" />
                </span>
                <p className="relative mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amaranth-500 transition-colors group-hover:text-gold-300">
                  {s.group}
                </p>
                <h3 className="font-heading relative mt-2 text-2xl font-bold uppercase tracking-wide text-navy-900 transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500 transition-colors group-hover:text-white/75">
                  {s.summary}
                </p>
                <span className="font-heading relative mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amaranth-500 transition-colors group-hover:text-gold-300">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpecialPrograms() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
      <div className="animate-glow pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-amaranth-500/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div>
          <SectionHeading light eyebrow={specialPrograms.eyebrow} title={specialPrograms.title}>
            {specialPrograms.body}
          </SectionHeading>
          <Reveal delay={100}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {specialPrograms.groups.map((g) => (
                <li key={g} className="flex items-center gap-3 text-[0.95rem] text-white/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-white/65">{specialPrograms.proof}</p>
            <div className="mt-8">
              <TextLink href="/contact" light>
                Discuss a transition
              </TextLink>
            </div>
          </Reveal>
        </div>
        <Reveal from="right">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-gold-400/30 shadow-2xl shadow-black/40">
            <Image
              src="/images/athletes-veterans.jpg"
              alt="An athlete and a saluting veteran before an American flag at a stadium"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PodcastFeature() {
  const bars = [0.5, 0.9, 0.65, 1, 0.75, 0.45, 0.85, 0.6, 0.95, 0.55, 0.8, 0.4];
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <Reveal from="left" className="mx-auto w-full max-w-md">
          <div className="relative">
            <div className="animate-glow absolute inset-6 rounded-full bg-gold-400/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-sm border-4 border-white shadow-2xl shadow-navy-900/30 ring-1 ring-gold-400/40">
              <Image src="/images/podcast-cover.jpg" alt="The Vocational Concepts Podcast cover art" width={900} height={900} className="h-auto w-full" />
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="The podcast" title="Conversations on vocational evidence">
            {podcast.blurb}
          </SectionHeading>
          <Reveal delay={120}>
            <div className="mt-8 flex items-end gap-1.5" aria-hidden>
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="animate-wave w-1.5 origin-bottom rounded-full bg-gradient-to-t from-amaranth-500 to-gold-400"
                  style={{ height: `${h * 44}px`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-sm border border-navy-900/10 bg-cloud p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                  <Mic className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-bold uppercase tracking-wide text-navy-900">{podcast.title}</p>
                  <p className="text-sm text-ink-500">{podcast.status}</p>
                </div>
              </div>
              <TextLink href="/podcast">Visit the podcast</TextLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-amaranth-500 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120} className="border-white/15 px-2 text-center lg:border-l lg:first:border-l-0">
            <p className="font-heading whitespace-nowrap text-5xl font-bold text-gold-300 sm:text-6xl">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-3 max-w-[12rem] text-xs font-semibold uppercase leading-snug tracking-[0.2em] text-white/85">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Leadership() {
  const [lead, ...others] = team;
  return (
    <section className="bg-cloud py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal from="left" className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-sm bg-gold-400" />
            <div className="relative overflow-hidden rounded-sm bg-navy-900 p-8 text-white shadow-2xl shadow-navy-900/25 sm:p-10">
              <div className="animate-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-3xl" />
              <Award className="relative h-9 w-9 text-gold-300" />
              <p className="font-heading relative mt-6 text-5xl font-bold uppercase text-gold-300">Diplomate</p>
              <p className="relative mt-3 text-sm leading-relaxed text-white/75">
                The highest certification with the American Board of Vocational Experts.
              </p>
              <ul className="relative mt-8 space-y-4 border-t border-white/15 pt-6">
                {credentials.slice(1).map((c) => (
                  <li key={c.abbr} className="flex items-baseline gap-4">
                    <span className="font-heading w-16 shrink-0 text-lg font-bold text-gold-300">{c.abbr}</span>
                    <span className="text-sm leading-snug text-white/80">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Leadership" title="Meet Ms. Fisher" />
            <Reveal delay={100}>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-amaranth-500">
                {lead.name} · {lead.credentials}
              </p>
              <Quote className="mt-6 h-8 w-8 text-gold-400" />
              <p className="mt-3 text-base leading-relaxed text-ink-700 sm:text-lg">{lead.bio[0]}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{lead.bio[1]}</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <TextLink href="/team/cindy-fisher">Full biography</TextLink>
                <TextLink href="/team">Team of evaluators</TextLink>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">Team of evaluators</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {others.map((m, i) => (
              <Reveal key={m.slug} delay={i * 90}>
                <Link href={`/team#${m.slug}`} className="group block overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-900">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="(min-width: 1024px) 18vw, 45vw"
                        className="object-cover object-top grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      <span className="font-heading absolute inset-0 flex items-center justify-center text-5xl font-bold text-gold-300">
                        {m.name.split(" ").map((p) => p[0]).join("")}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-heading text-lg font-bold uppercase leading-tight tracking-wide text-navy-900">{m.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">{m.credentials}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfficesStrip() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Locations" title="Where we meet our clients">
            In an office setting through a Regus suite, virtually, or at home. To find a Regus office near you, see our
            locations page.
          </SectionHeading>
          <Reveal>
            <TextLink href="/locations">All locations</TextLink>
          </Reveal>
        </div>
        <div className="mobile-swipe mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 100}>
              <div className="group h-full rounded-sm border border-navy-900/10 p-6 transition-all duration-300 hover:border-gold-400 hover:bg-gold-100/40">
                <Building2 className="h-6 w-6 text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <p className="font-heading mt-4 text-xl font-bold uppercase tracking-wide text-navy-900">{o.city}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {o.lines[0]}
                  <br />
                  {o.lines[1]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-center text-white sm:py-28">
      <Image src="/images/courthouse-dusk.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading center light eyebrow="Next step" title="Retain the right vocational expert">
          Request a free consultation to discuss your matter, your timeline, and the vocational questions at issue.
        </SectionHeading>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/book"
              className="shine font-heading group inline-flex h-14 items-center justify-center gap-3 rounded-sm bg-gold-400 px-8 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              Book a Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="font-heading inline-flex h-14 items-center justify-center gap-3 rounded-sm border border-white/40 px-8 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
