import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Schedule a consultation or send an inquiry to ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Ready to discuss your case?"
            description="Schedule a consultation or request an evaluation. We respond to all inquiries within one business day."
            light
          />
        </Container>
      </section>

      <section className="bg-cream-50 py-20 lg:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <InfoCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              detail={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="Phone"
              detail={siteConfig.phone}
              href={`tel:${siteConfig.phoneHref}`}
            />
            <InfoCard
              icon={<Clock className="h-5 w-5" />}
              title="Response Time"
              detail="Within one business day"
            />
          </div>

          <div className="rounded-2xl border border-navy-950/8 bg-white p-8 lg:p-10">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  detail,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-xl border border-navy-950/8 bg-white p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-gold-300">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-ink-500">{title}</div>
        <div className="mt-1 font-serif text-base text-navy-950">{detail}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
