import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Globe2,
  Handshake,
  MapPin,
  Mic,
  Phone,
  Play,
  Scale,
  Shield,
  Trophy,
  Video,
} from "lucide-react";
import { MovingBar } from "@/components/demos/moving-bar";
import { ShopTabs } from "@/components/demos/shop-tabs";
import { Reveal } from "@/components/ui/reveal";
import {
  credibility,
  credentials,
  expert,
  faqs,
  memberships,
  otherReasons,
  podcast,
  services,
  siteConfig,
  specialFocus,
  stats,
  whenNeeded,
  whyRetain,
} from "@/data/site";

const BASE = "/templates/casefile";
const WHY_ICONS = [Scale, Handshake, Video, MapPin, Globe2, FileCheck2];

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="inline-flex rounded-full bg-gold-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 sm:text-5xl">{title}</h2>
    </div>
  );
}

export function CaseFileHome() {
  return (
    <>
      {/* Hero: photo in an arched window */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-14 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20 lg:pt-16">
          <div className="order-2 lg:order-none">
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
              <BadgeCheck className="h-4 w-4" /> Board-certified vocational expert
            </p>
            <h1
              className="font-display animate-fade-up mt-4 text-[2.9rem] lg:mt-6 font-extrabold leading-[1.03] tracking-tight text-navy-900 sm:text-6xl lg:text-[4.25rem]"
              style={{ animationDelay: "100ms" }}
            >
              The expert your case <span className="text-amaranth-500">can stand on.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-ink-700" style={{ animationDelay: "200ms" }}>
              Objective, evidence-based opinions on earning capacity, employability, and vocational
              loss, from over twenty years of testimony in all but two Florida counties and in federal court.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "300ms" }}>
              <a href={`${BASE}#contact`} className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800">
                Book a Consultation <ArrowRight className="h-4 w-4 text-gold-300" />
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="hidden items-center gap-2 rounded-full px-5 py-4 lg:inline-flex text-sm font-bold text-navy-900 ring-1 ring-navy-900/15 transition-colors hover:ring-navy-900/40">
                <Phone className="h-4 w-4 text-gold-500" /> {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="animate-fade-up relative order-1 mx-auto w-[calc(100%-1rem)] max-w-md lg:order-none lg:w-full" style={{ animationDelay: "150ms" }}>
            <div aria-hidden className="absolute -inset-3 rounded-t-[50%] rounded-b-[2.5rem] border-2 border-gold-400/70" />
            <div className="relative aspect-[9/10] overflow-hidden rounded-t-[50%] rounded-b-[2rem] lg:aspect-[1100/1450]">
              <Image
                src="/brand/courthouse-tall.jpg"
                alt="The American flag flying in front of the United States Supreme Court"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 450px"
                className="animate-slow-zoom origin-top object-cover object-top lg:animate-none"
              />
            </div>
            <div className="animate-float absolute -left-1 top-[40%] rounded-2xl bg-navy-900 px-4 py-3 shadow-xl shadow-navy-900/30 lg:hidden">
              <div className="text-xl font-extrabold leading-none text-gold-300">1 of 70</div>
              <div className="mt-1 text-[0.68rem] font-semibold text-white/75">ABVE Diplomates</div>
            </div>
            <div className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl shadow-navy-900/15">
              <span className="text-3xl font-extrabold text-navy-900">Zero</span>
              <span className="text-xs font-semibold leading-tight text-ink-500">Daubert<br />exclusions</span>
            </div>
          </div>
        </div>
      </section>

      <MovingBar />

      {/* Stat tiles */}
      <section className="bg-white pt-8 lg:pt-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`rounded-3xl p-6 ${i === 0 ? "bg-navy-900 text-white" : "bg-cream-100 text-navy-900"}`}>
              <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">{stat.value}</div>
              <div className={`mt-2 text-sm font-medium ${i === 0 ? "text-white/70" : "text-ink-500"}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About, in the Adri style */}
      <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 rounded-[2.5rem] bg-cream-100 p-4 pb-8 sm:p-12 lg:grid-cols-2 lg:gap-10 lg:p-16">
              <div className="order-2 px-3 sm:px-0 lg:order-none">
                <h2 className="font-display text-5xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">{expert.greeting}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-700">{expert.shortBio}</p>
                <p className="mt-4 leading-relaxed text-ink-500">{expert.bio}</p>
                <a href={`${BASE}#contact`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-300">
                  Work with Ms. Fisher <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden lg:order-none rounded-[2rem] shadow-2xl shadow-navy-900/20">
                <Image src={expert.photo} alt={`${expert.name}, ${expert.credentials}`} fill sizes="(max-width: 1024px) 90vw, 400px" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services bento: folder-tab cards */}
      <section id="services" className="scroll-mt-24 bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="Services" title="One expert for every vocational question." />
          <div className="mobile-swipe mobile-swipe-tabbed mt-8 grid grid-cols-1 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 70} className="h-full">
                <article className={`group relative h-full rounded-3xl rounded-tl-none p-7 pt-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/15 ${i === 0 ? "bg-navy-900" : "bg-cream-100 hover:bg-white hover:ring-1 hover:ring-navy-900/10"}`}>
                  <span aria-hidden className={`absolute -top-4 left-0 h-5 w-24 rounded-t-xl ${i === 0 ? "bg-navy-900" : "bg-cream-100 group-hover:bg-gold-300"}`} />
                  <span className={`text-xs font-bold ${i === 0 ? "text-gold-300" : "text-gold-600"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={`mt-2 text-xl font-bold ${i === 0 ? "text-white" : "text-navy-900"}`}>{service.title}</h3>
                  <p className={`mt-2.5 text-[0.95rem] leading-relaxed ${i === 0 ? "text-white/70" : "text-ink-500"}`}>{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="The record" title="Proof, not promises." />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {credibility.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="h-full">
                <div className="flex h-full gap-4 rounded-3xl bg-white p-7">
                  <BadgeCheck className="h-6 w-6 shrink-0 text-gold-500" />
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-500">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why retain */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="Why retain us" title="Built around how counsel work." />
          <div className="mobile-swipe mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyRetain.map((item, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div key={item.title} className="rounded-3xl bg-cream-100 p-6 sm:bg-transparent sm:p-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Athletes & veterans */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
          {specialFocus.map((item) => {
            const isAthletes = item.id === "athletes";
            const Icon = isAthletes ? Trophy : Shield;
            return (
              <Reveal key={item.id} className="h-full">
                <article className={`h-full rounded-[2.5rem] p-8 sm:p-10 ${isAthletes ? "bg-amaranth-500" : "bg-navy-900"}`}>
                  <Icon className="h-9 w-9 text-gold-300" strokeWidth={1.6} />
                  <p className="mt-10 text-xs font-bold uppercase tracking-wider text-gold-300">{item.eyebrow}</p>
                  <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{item.title}</h2>
                  <p className="mt-3 leading-relaxed text-white/80">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* When needed */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="For counsel" title="When might your client need a vocational expert?" />
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whenNeeded.map((item) => (
                <div key={item.title} className="rounded-3xl p-6 ring-1 ring-navy-900/10">
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-gold-100 p-7">
              <h3 className="font-bold text-navy-900">Other reasons to hire an expert</h3>
              <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-700">
                {otherReasons.map((reason) => <li key={reason}>{reason}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="Team" title={`Led by ${expert.name}.`} />
          <p className="mt-4 font-semibold text-gold-600">{expert.credentials}</p>
          <p className="mt-2 max-w-2xl text-ink-500">{expert.title}. {expert.education}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span key={c.abbr} title={c.title} className="rounded-full bg-cream-100 px-4 py-2 text-sm font-semibold text-navy-900">
                {c.abbr} · {c.title}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-500">Member: {memberships.map((m) => m.name).join(" · ")}</p>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-24 rounded-[2.5rem] bg-cream-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading eyebrow="Shop" title="Book and pay for services in one place." />
          <div className="mt-10">
            <ShopTabs contactHref={`${BASE}#contact`} />
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 rounded-[2.5rem] bg-navy-900 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-300">
                <Mic className="h-4 w-4" /> Podcast · {podcast.status}
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{podcast.title}</h2>
              <p className="mt-3 max-w-xl text-white/70">{podcast.blurb}</p>
            </div>
            <a href={`${BASE}/podcast`} className="flex items-center gap-4 rounded-full bg-white/10 p-2 pr-7 font-bold text-white transition-colors hover:bg-white/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-900">
                <Play className="h-5 w-5 fill-current" />
              </span>
              Visit the Podcast
            </a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-24 bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading eyebrow="Resources" title="Answers for counsel." />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl bg-cream-100 px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden className="text-xl text-gold-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.5rem] bg-gold-100 p-8 text-center sm:p-16">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl">Make sure you hire the right expert.</h2>
            <p className="mt-4 text-lg text-ink-700">Call or email to discuss your case.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${siteConfig.phoneHref}`} className="rounded-full bg-navy-900 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-800">
                Call {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="rounded-full bg-white px-7 py-4 text-sm font-bold text-navy-900 transition-colors hover:bg-cream-50">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
