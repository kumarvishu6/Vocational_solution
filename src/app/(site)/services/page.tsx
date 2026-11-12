import type { Metadata } from "next";
import { FaqList } from "@/components/site/faq-list";
import { FinalCta } from "@/components/site/home/sections";
import { ReasonsTabs } from "@/components/site/home/reasons-tabs";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { Reveal } from "@/components/ui/reveal";
import { company, faqs, services } from "@/data/vc";

export const metadata: Metadata = {
  title: `Services | ${company.name}`,
  description:
    "Vocational services and litigation support: personal injury, marital dissolution, collaborative divorce, vocational rehabilitation, career counseling, and more.",
};

const groups = [
  {
    name: "Litigation Support" as const,
    blurb: "Forensic vocational evaluation, earning capacity analysis, and expert testimony for attorneys and courts.",
  },
  {
    name: "Rehabilitation & Careers" as const,
    blurb: "Evaluations, rehabilitation counseling, and career planning for individuals.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Practice areas" title="Vocational services & litigation support" crumbs={[{ label: "Services" }]}>
        Every engagement follows the same independent method: careful testing, real labor market data, and reporting
        built to hold up in court.
      </PageHero>

      {groups.map((g, gi) => (
        <section key={g.name} className={gi % 2 === 0 ? "bg-white py-20 sm:py-24" : "bg-cloud py-20 sm:py-24"}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading eyebrow={`Practice area 0${gi + 1}`} title={g.name}>
              {g.blurb}
            </SectionHeading>
            <div className="mobile-swipe mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.group === g.name)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 110}>
                    <ServiceCard service={s} />
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <ReasonsTabs />

      <section className="bg-cloud py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionHeading eyebrow="Questions" title="Frequently asked">
            Not sure whether a vocational expert fits your matter? Start here, or call {company.phone}.
          </SectionHeading>
          <Reveal delay={100}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
