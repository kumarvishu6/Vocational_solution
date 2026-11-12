import type { Metadata } from "next";
import { ArrowUpRight, Building2, Car, Globe2, MapPin, Video } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { company, offices } from "@/data/vc";

export const metadata: Metadata = {
  title: `Locations | ${company.name}`,
  description:
    "Regus office suites in Tampa, Saint Petersburg, Sarasota, and Fort Myers, plus virtual and at-home evaluations throughout Florida and nationally.",
};

const reach = [
  { icon: Building2, title: "Regus office suites", text: "Professional offices across Florida, with Regus locations available nationwide." },
  { icon: Video, title: "Virtual evaluations", text: "Secure video meetings throughout the state of Florida and beyond." },
  { icon: Car, title: "Mobile evaluators", text: "We travel throughout the state, and nationally if needed — including home visits." },
  { icon: Globe2, title: "Career Transition, nationwide", text: "Available in person, by phone, or by videoconference anywhere in the U.S." },
];

const mapsUrl = (lines: string[]) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(", "))}`;

export default function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Wherever your case takes us" crumbs={[{ label: "Locations" }]}>
        We meet with our clients in an in-office setting through a Regus suite, virtually, or at home — throughout
        Florida, and nationally if needed.
      </PageHero>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Florida offices" title="Our Regus office locations">
            Appointments are by arrangement. Mail and correspondence go to our mailing address below.
          </SectionHeading>
          <div className="mt-8 grid sm:mt-12 gap-5 sm:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={(i % 2) * 110}>
                <div className="group relative flex h-full items-start gap-5 overflow-hidden rounded-sm border border-navy-900/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold-400 transition-transform duration-500 group-hover:scale-y-100" />
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amaranth-500">Regus office</p>
                    <h3 className="font-heading mt-1 text-2xl font-bold uppercase tracking-wide text-navy-900">{o.city}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                      {o.lines[0]}
                      <br />
                      {o.lines[1]}
                    </p>
                    <a
                      href={mapsUrl(o.lines)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading mt-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-amaranth-500 hover:text-navy-900"
                    >
                      Open in Maps <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 flex flex-col gap-4 rounded-sm bg-cloud p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-heading text-lg font-bold uppercase tracking-wide text-navy-900">Mailing address</p>
                <p className="text-sm text-ink-500">
                  {company.mailing.join(", ")} · Fax {company.fax}
                </p>
              </div>
              <a
                href="https://www.regus.com/en-us/united-states"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-amaranth-500 hover:text-navy-900"
              >
                Find a Regus office near you <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
        <div className="animate-glow pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amaranth-500/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading light center eyebrow="Coverage" title="Florida-based, ready to travel" />
          <div className="mobile-swipe mt-8 grid sm:mt-12 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reach.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="h-full rounded-sm border border-white/10 bg-white/5 p-7 transition-colors hover:border-gold-400/60 hover:bg-white/10">
                  <r.icon className="h-7 w-7 text-gold-300" strokeWidth={1.6} />
                  <h3 className="font-heading mt-5 text-xl font-bold uppercase tracking-wide">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
