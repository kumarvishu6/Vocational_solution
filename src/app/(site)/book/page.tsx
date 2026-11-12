import type { Metadata } from "next";
import { CalendarCheck, CreditCard, Video } from "lucide-react";
import { BookingFlow } from "@/components/site/booking-flow";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/vc";

export const metadata: Metadata = {
  title: `Book a Consultation | ${company.name}`,
  description: "Choose a consultation type, pick a date and time, and request your appointment.",
};

const notes = [
  { icon: Video, title: "Flexible scheduling", text: "Weekday appointments, virtual or in person." },
  { icon: CalendarCheck, title: "Confirmation", text: "Our office confirms every request by email." },
  { icon: CreditCard, title: "Secure payment", text: "Paid consultations receive a secure payment link." },
];

export default function BookPage() {
  return (
    <>
      <PageHero eyebrow="Appointments" title="Book a consultation" crumbs={[{ label: "Book a Consultation" }]}>
        Five quick steps: choose your consultation, pick a date and time, add your details, and review.
      </PageHero>

      <section className="bg-cloud py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_300px] lg:px-10">
          <Reveal>
            <BookingFlow />
          </Reveal>
          <div className="space-y-4">
            {notes.map((n, i) => (
              <Reveal key={n.title} from="right" delay={i * 100}>
                <div className="flex items-start gap-4 rounded-sm bg-white p-5 ring-1 ring-navy-900/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                    <n.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="font-heading block text-lg font-bold uppercase tracking-wide text-navy-900">{n.title}</span>
                    <span className="text-sm text-ink-500">{n.text}</span>
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal from="right" delay={300}>
              <p className="px-1 text-sm text-ink-500">
                Prefer to talk first? Call{" "}
                <a href={`tel:${company.phoneHref}`} className="font-semibold text-navy-900 hover:text-amaranth-500">
                  {company.phone}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
