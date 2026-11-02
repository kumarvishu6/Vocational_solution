import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

const BASE = "/templates/journal";

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 border-b border-navy-900 pb-4">
      <span className="text-sm font-semibold text-amaranth-500">{number}</span>
      <h2 className="font-display text-4xl leading-tight text-navy-900 sm:text-6xl">{title}</h2>
    </div>
  );
}

export function JournalHome() {
  return (
    <>
      {/* Phone cover: the page opens like the front of a magazine. */}
      <section className="relative h-[calc(100svh-136px)] min-h-[540px] overflow-hidden bg-navy-900 lg:hidden">
        <Image
          src="/brand/courthouse-tall.jpg"
          alt="The American flag flying in front of the United States Supreme Court"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom origin-top object-cover object-top"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-navy-950/95 to-[84%]" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-7">
          <p className="animate-fade-up inline-block bg-amaranth-500 px-3 py-1.5 text-xs font-semibold text-gold-200">
            Forensic vocational expert witness
          </p>
          <h1 className="font-display animate-fade-up mt-4 text-[4.1rem] leading-[0.94] text-white sm:text-8xl" style={{ animationDelay: "100ms" }}>
            Testimony built to <em className="block whitespace-nowrap text-gold-300">hold up.</em>
          </h1>
        </div>
      </section>

      {/* Front page */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 pt-10 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-16 lg:pt-12">
          <div className="lg:col-span-7">
            <p className="animate-fade-up hidden text-sm font-semibold text-amaranth-500 lg:block">Forensic vocational expert witness</p>
            <h1
              className="font-display animate-fade-up mt-4 hidden text-8xl leading-[0.98] text-navy-900 lg:block xl:text-[7.25rem]"
              style={{ animationDelay: "100ms" }}
            >
              Testimony built to <em className="text-amaranth-500">hold up.</em>
            </h1>
            <div className="animate-fade-up lg:mt-8 lg:border-t lg:border-navy-900/25 lg:pt-6" style={{ animationDelay: "200ms" }}>
              <p className="text-xl leading-relaxed text-navy-900 first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-amaranth-500">
                For over twenty years, {siteConfig.name} has given attorneys and courts objective,
                evidence-based opinions on earning capacity, employability, and vocational loss, with
                testimony in all but two Florida counties and in federal court.
              </p>
              <a
                href={`${BASE}#contact`}
                className="mt-7 inline-flex items-center gap-2 bg-amaranth-500 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-amaranth-600"
              >
                Book a Consultation <ArrowUpRight className="h-4 w-4 text-gold-300" />
              </a>
            </div>
          </div>

          <figure className="animate-fade-up hidden lg:col-span-5 lg:block" style={{ animationDelay: "160ms" }}>
            <div className="relative aspect-[1100/1450] w-full overflow-hidden">
              <Image
                src="/brand/courthouse-tall.jpg"
                alt="The American flag flying in front of the United States Supreme Court"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 border-b border-navy-900/25 pb-2 text-sm italic text-navy-900/70">
              The Supreme Court of the United States, Washington, D.C.
            </figcaption>
          </figure>
        </div>
      </section>

      <MovingBar />

      {/* By the record */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-amaranth-500 pl-5">
                <div className="font-display text-5xl text-navy-900 sm:text-6xl">{stat.value}</div>
                <div className="mt-1 text-sm italic text-navy-900/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="01" title="The Profile" />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={expert.photo} alt={`${expert.name}, ${expert.credentials}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm italic text-navy-900/70">{expert.name}, {expert.credentials}</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-8">
              <h3 className="font-display text-6xl leading-none text-navy-900 sm:text-8xl">{expert.greeting}</h3>
              <p className="font-display mt-6 text-3xl italic leading-snug text-amaranth-500">
                &ldquo;What can this person realistically earn?&rdquo;
              </p>
              <div className="mt-7 gap-10 text-[1.05rem] leading-relaxed text-navy-900/85 md:columns-2">
                <p>{expert.shortBio}</p>
                <p className="mt-4">{expert.bio}</p>
                <p className="mt-4">{expert.methodology}</p>
              </div>
              <a href={`${BASE}#contact`} className="mt-7 inline-flex items-center gap-2 rounded-full border border-navy-900 px-6 py-3 font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white">
                Work with Ms. Fisher <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services index */}
      <section id="services" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="02" title="Areas of Practice" />
          <div className="grid grid-cols-1 gap-x-14 lg:grid-cols-2">
            {services.map((service, i) => (
              <article key={service.id} className="group flex gap-5 border-b border-navy-900/20 py-7">
                <span className="w-7 shrink-0 pt-1.5 text-sm font-semibold text-amaranth-500">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-3xl text-navy-900 transition-colors group-hover:text-amaranth-500 group-hover:italic">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy-900/75">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The record: pull quotes on navy */}
      <section className="bg-navy-900 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-14 gap-y-10 px-6 md:grid-cols-2 lg:px-10">
          {credibility.map((item) => (
            <Reveal key={item.title} className="border-t border-gold-400/50 pt-6">
              <h2 className="font-display text-4xl italic leading-tight text-gold-300 sm:text-5xl">{item.title}.</h2>
              <p className="mt-3 max-w-lg leading-relaxed text-white/75">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why retain */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="03" title="Why Retain Us" />
          <div className="mobile-swipe mt-8 grid grid-cols-1 gap-x-10 gap-y-10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyRetain.map((item) => (
              <div key={item.title} className="border-t-2 border-amaranth-500 pt-4 sm:border-t-0 sm:pt-0">
                <h3 className="font-display text-3xl text-navy-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-900/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special report */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 border-y-[3px] border-double border-navy-900 md:grid-cols-2">
            {specialFocus.map((item, i) => (
              <article key={item.id} className={`py-10 md:px-10 ${i === 0 ? "border-b border-navy-900/20 md:border-b-0 md:border-r md:pl-0" : "md:pr-0"}`}>
                <p className="text-sm font-semibold text-amaranth-500">Special report · {item.eyebrow}</p>
                <h2 className="font-display mt-3 text-6xl text-navy-900 sm:text-7xl">{item.title}</h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-900/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* When needed */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="04" title="When Might Your Client Need an Expert?" />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-7">
              {whenNeeded.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-3xl text-navy-900">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-navy-900/75">{item.description}</p>
                </div>
              ))}
            </div>
            <aside className="bg-amaranth-100 p-8">
              <h3 className="font-display text-3xl italic text-amaranth-600">Other reasons to hire an expert</h3>
              <ul className="mt-5 space-y-3 leading-relaxed text-navy-900">
                {otherReasons.map((reason) => (
                  <li key={reason} className="border-t border-amaranth-500/25 pt-3">{reason}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="05" title="The Team" />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-display text-4xl text-navy-900">{expert.name}</h3>
              <p className="mt-1 font-semibold text-amaranth-500">{expert.credentials}</p>
              <p className="mt-4 leading-relaxed text-navy-900/75">{expert.title}. {expert.education}</p>
              <p className="mt-4 text-sm italic text-navy-900/70">Member: {memberships.map((m) => m.name).join("; ")}.</p>
            </div>
            <dl className="lg:col-span-7">
              {credentials.map((c) => (
                <div key={c.abbr} className="flex gap-6 border-t border-navy-900/20 py-4">
                  <dt className="w-20 shrink-0 font-semibold text-navy-900">{c.abbr}</dt>
                  <dd className="text-navy-900/75">{c.title}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Shop: fee schedule */}
      <section id="shop" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="06" title="The Shop" />
          <div className="mobile-swipe mt-8 grid grid-cols-1 items-start gap-12 sm:mt-10 lg:grid-cols-3">
            {shop.map((group) => (
              <div key={group.category}>
                <h3 className="font-display text-3xl italic text-amaranth-500">{group.category}</h3>
                <ul className="mt-5 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.name + item.detail}>
                      <div className="flex items-baseline gap-2 text-navy-900">
                        <span className="font-medium">{item.name}</span>
                        <span aria-hidden className="dotted-leader" />
                        <span className="font-display text-2xl">{item.price}</span>
                      </div>
                      <div className="text-sm italic text-navy-900/65">{item.detail}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-navy-900 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-gold-300">On air · {podcast.status}</p>
            <h2 className="font-display mt-2 text-4xl leading-tight text-white sm:text-6xl">{podcast.title}</h2>
            <p className="mt-3 text-white/75">{podcast.blurb}</p>
          </div>
          <a href={`${BASE}/podcast`} className="inline-flex shrink-0 items-center gap-2 self-start border-b-2 border-gold-400 pb-1 font-semibold text-white md:self-end">
            Visit the Podcast <ArrowUpRight className="h-4 w-4 text-gold-300" />
          </a>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle number="07" title="Resources" />
          <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-3xl italic text-navy-900">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-navy-900/75">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section id="contact" className="scroll-mt-24 border-t-[3px] border-double border-navy-900 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-6xl leading-[0.98] text-navy-900 sm:text-8xl">
            Make sure you hire <em className="text-amaranth-500">the right expert.</em>
          </h2>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-xl">
            <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-navy-900 underline decoration-amaranth-500 underline-offset-4">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="break-all text-navy-900 underline decoration-amaranth-500 underline-offset-4">{siteConfig.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
