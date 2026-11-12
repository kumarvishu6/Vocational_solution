import type { Metadata } from "next";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { InquiryForm } from "@/components/site/inquiry-form";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { company, offices } from "@/data/vc";

export const metadata: Metadata = {
  title: `Contact | ${company.name}`,
  description: `Request a free consultation with ${company.name}. Call ${company.phone} or send a message.`,
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  const defaultTopic = typeof topic === "string" ? topic.slice(0, 120) : "";

  const lines = [
    { icon: Phone, label: "Office", value: company.phone, href: `tel:${company.phoneHref}` },
    { icon: Phone, label: "Second line", value: company.phoneAlt, href: `tel:${company.phoneAltHref}` },
    { icon: Printer, label: "Fax", value: company.fax },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Mailing address", value: company.mailing.join(", ") },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Want to know your options?" crumbs={[{ label: "Contact" }]}>
        Leave your information and message below and we will be in touch as soon as possible. Request a free
        consultation.
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
          <Reveal>
            <div className="rounded-sm bg-cloud p-6 sm:p-10">
              <p className="eyebrow-line text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">Send a message</p>
              <h2 className="font-heading mt-3 text-3xl font-bold uppercase tracking-wide text-navy-900">
                Tell us about your matter
              </h2>
              <div className="mt-8">
                <InquiryForm defaultTopic={defaultTopic} />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal from="right">
              <div className="rounded-sm bg-navy-900 p-7 text-white">
                <p className="font-heading text-xl font-bold uppercase tracking-wide">Contact information</p>
                <ul className="mt-6 space-y-5">
                  {lines.map((l) => (
                    <li key={l.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">{l.label}</span>
                        {l.href ? (
                          <a href={l.href} className="text-[0.95rem] text-white transition-colors hover:text-gold-300">
                            {l.value}
                          </a>
                        ) : (
                          <span className="text-[0.95rem]">{l.value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal from="right" delay={100}>
              <div className="rounded-sm border border-navy-900/10 p-7">
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-navy-900">Office locations</p>
                <ul className="mt-5 space-y-4">
                  {offices.map((o) => (
                    <li key={o.city} className="text-sm leading-relaxed text-ink-500">
                      <span className="font-semibold text-navy-900">{o.city}</span>
                      <br />
                      {o.lines.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
