import Image from "next/image";
import { ArrowRight, Mic, Phone, Shield, Trophy } from "lucide-react";
import { MovingBar } from "@/components/demos/moving-bar";
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
  shop,
  siteConfig,
  specialFocus,
  stats,
  whenNeeded,
  whyRetain,
} from "@/data/site";

const BASE = "/templates/courthouse";
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

function Heading({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <svg aria-hidden viewBox="0 0 120 22" className="mx-auto h-5 w-24 text-gold-400">
        <path d="M2 20 L60 3 L118 20 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-gold-300" : "text-gold-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
    </div>
  );
}

export function CourthouseHome() {
  return (
    <>
      {/* Hero: the courthouse fills the frame, with white rising out of the clouds on the left. */}
      <section className="relative bg-white">
        <div className="relative lg:h-[min(62vw,88vh)] lg:min-h-[620px]">
          <div className="absolute inset-x-0 top-0 h-[122vw] overflow-hidden sm:h-[90vw] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[70%]">
            <Image
              src="/brand/courthouse-tall.jpg"
              alt="The American flag flying in front of the United States Supreme Court"
              fill
              priority
              sizes="100vw"
              className="animate-slow-zoom origin-top object-cover object-top lg:hidden"
            />
            <Image
              src="/brand/courthouse-wide.jpg"
              alt="The United States Supreme Court with the American flag flying in front"
              fill
              sizes="70vw"
              className="hidden object-cover object-left-top lg:block"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent from-50% to-white to-[82%] lg:hidden" />
            <div
              aria-hidden
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.9) 12%, rgba(255,255,255,0) 27%)",
              }}
            />
          </div>

          <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 pb-10 pt-[102vw] sm:pt-[72vw] lg:px-10 lg:py-0">
            <div className="flex max-w-xl flex-col items-start lg:block lg:max-w-[26rem] xl:max-w-[33rem]">
              <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
                Board-Certified Vocational Expert Witness
              </p>
              <h1
                className="font-display animate-fade-up mt-3 text-[2.9rem] font-semibold leading-[1.02] lg:mt-5 lg:leading-[1.04] text-navy-900 sm:text-6xl lg:text-[3.4rem] xl:text-7xl"
                style={{ animationDelay: "100ms" }}
              >
                Testimony that withstands the toughest cross.
              </h1>
              <p
                className="animate-fade-up order-last mt-6 max-w-md text-lg leading-relaxed text-ink-700"
                style={{ animationDelay: "200ms" }}
              >
                Over twenty years of objective, evidence-based vocational opinions for attorneys and
                courts, in all but two Florida counties and in federal court.
              </p>
              <div className="animate-fade-up mt-6 flex flex-wrap items-center gap-5 lg:mt-8" style={{ animationDelay: "300ms" }}>
                <a
                  href={`${BASE}#contact`}
                  className="inline-flex items-center gap-2 bg-navy-900 px-7 py-4 text-sm font-semibold tracking-wide text-white ring-1 ring-offset-4 ring-gold-400 transition-colors hover:bg-navy-800"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4 text-gold-300" />
                </a>
                <a href={`tel:${siteConfig.phoneHref}`} className="hidden items-center gap-2 text-sm font-semibold text-navy-900 lg:inline-flex">
                  <Phone className="h-4 w-4 text-gold-500" /> {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MovingBar />

      {/* Record: four engraved figures */}
      <section className="bg-navy-900 lg:bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-8 lg:grid-cols-4 lg:px-10 lg:py-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`px-2 py-5 text-center lg:px-4 ${i !== 0 ? "lg:border-l lg:border-gold-400/50" : ""} ${i % 2 === 1 ? "border-l border-gold-400/50" : ""}`}>
              <div className="font-display whitespace-nowrap text-[2.35rem] font-semibold leading-none text-gold-300 sm:text-5xl lg:text-navy-900">{stat.value}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 lg:text-ink-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-cream-100 py-14 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <Reveal className="order-2 lg:order-none">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">About</p>
            <h2 className="font-display mt-4 text-5xl font-semibold leading-none text-navy-900 sm:text-7xl">{expert.greeting}</h2>
            <p className="mt-7 text-xl leading-relaxed text-ink-700">{expert.shortBio}</p>
            <p className="mt-5 leading-relaxed text-ink-500">{expert.bio}</p>
            <a
              href={`${BASE}#contact`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Work with Ms. Fisher <ArrowRight className="h-4 w-4 text-gold-300" />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm">
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-gold-400" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image src={expert.photo} alt={`${expert.name}, ${expert.credentials}`} fill sizes="(max-width: 1024px) 90vw, 400px" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-white py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Heading eyebrow="The record" title="A record built in the courtroom." />
          <div className="mt-10 grid grid-cols-1 border-t border-gold-400/60 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {credibility.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className={`border-b border-gold-400/60 p-8 lg:border-b-0 ${i !== 0 ? "lg:border-l lg:border-gold-400/60" : ""}`}>
                <h3 className="font-display text-2xl font-semibold leading-snug text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services: framed plaques */}
      <section id="services" className="scroll-mt-20 bg-cream-50 py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Heading eyebrow="Services" title="Vocational services & litigation support." />
          <div className="mobile-swipe mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 70} className="h-full">
                <article className="group h-full bg-white p-2 shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className="h-full border border-gold-400/50 p-7 transition-colors duration-300 group-hover:border-gold-400">
                    <span className="font-display text-xl font-semibold text-gold-500">{ROMAN[i]}</span>
                    <h3 className="font-display mt-2 text-[1.7rem] font-semibold leading-tight text-navy-900">{service.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why retain us */}
      <section className="bg-navy-900 py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Heading eyebrow="Why retain us" title="Six reasons counsel call." light />
          <div className="mobile-swipe mt-10 grid grid-cols-1 gap-px bg-gold-400/25 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {whyRetain.map((item) => (
              <div key={item.title} className="bg-navy-900 p-8 ring-1 ring-gold-400/30 sm:ring-0">
                <h3 className="font-display text-2xl font-semibold text-gold-300">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletes & veterans */}
      <section className="bg-white py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Heading eyebrow="Special focus" title="Athletes & veterans." />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {specialFocus.map((item) => {
              const Icon = item.id === "athletes" ? Trophy : Shield;
              return (
                <Reveal key={item.id} className="h-full">
                  <article className="flex h-full flex-col gap-6 sm:flex-row border-l-4 border-gold-400 bg-cream-100 p-8 sm:p-10">
                    <Icon className="h-9 w-9 shrink-0 text-navy-900" strokeWidth={1.4} />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">{item.eyebrow}</p>
                      <h3 className="font-display mt-2 text-4xl font-semibold text-navy-900">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-ink-700">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* When needed */}
      <section className="bg-cream-50 py-14 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">For counsel</p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              When might your client need a vocational expert?
            </h2>
            <ul className="mt-8 space-y-3">
              {otherReasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-700">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <div className="divide-y divide-gold-400/50 border-y border-gold-400/50">
            {whenNeeded.map((item) => (
              <div key={item.title} className="py-6">
                <h3 className="font-display text-2xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-20 bg-white py-14 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Heading eyebrow="Team" title={`Led by ${expert.name}.`} />
          <p className="mt-4 text-center font-medium text-gold-600">{expert.credentials}</p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-ink-500">{expert.title}. {expert.education}</p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-5">
            {credentials.map((c) => (
              <div key={c.abbr} className="border border-gold-400/50 p-5 text-center">
                <div className="font-display text-2xl font-semibold text-navy-900">{c.abbr}</div>
                <div className="mt-2 text-xs leading-relaxed text-ink-500">{c.title}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-500">
            Member: {memberships.map((m) => m.name).join(" · ")}
          </p>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="scroll-mt-20 bg-cream-100 py-14 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Heading eyebrow="Shop" title="Book & pay for services online." />
          <div className="mobile-swipe mt-10 grid grid-cols-1 items-start gap-6 sm:mt-14 lg:grid-cols-3">
            {shop.map((group) => (
              <div key={group.category} className="bg-white p-2 shadow-sm ring-1 ring-navy-900/10">
                <div className="border border-gold-400/50 p-7">
                  <h3 className="font-display border-b border-gold-400/50 pb-4 text-2xl font-semibold text-navy-900">{group.category}</h3>
                  <ul className="mt-2 divide-y divide-navy-900/8">
                    {group.items.map((item) => (
                      <li key={item.name + item.detail} className="flex items-start justify-between gap-4 py-4">
                        <div>
                          <div className="text-[0.95rem] font-medium leading-snug text-navy-900">{item.name}</div>
                          <div className="mt-0.5 text-xs text-ink-500">{item.detail}</div>
                        </div>
                        <div className="font-display shrink-0 text-xl font-semibold text-gold-600">{item.price}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 border-y border-gold-400/60 px-6 py-12 text-center md:flex-row md:text-left">
          <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-300">
            <Mic className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Podcast · {podcast.status}</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy-900 sm:text-4xl">{podcast.title}</h2>
            <p className="mt-2 text-ink-500">{podcast.blurb}</p>
          </div>
          <a href={`${BASE}/podcast`} className="shrink-0 border border-navy-900 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white">
            Visit the Podcast
          </a>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-20 bg-white pb-14 pt-4 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <Heading eyebrow="Resources" title="Questions from counsel." />
          <div className="mt-10 divide-y divide-gold-400/50 border-y border-gold-400/50">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-2xl font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span aria-hidden className="text-gold-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-cream-100 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-display text-5xl font-semibold leading-tight text-navy-900 sm:text-6xl">Make sure you hire the right expert.</p>
          <p className="mt-5 text-lg text-ink-700">Call or email to discuss your case.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`tel:${siteConfig.phoneHref}`} className="bg-navy-900 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800">
              Call {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="border border-navy-900 px-7 py-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-white">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
