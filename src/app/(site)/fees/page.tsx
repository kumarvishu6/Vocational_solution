import type { Metadata } from "next";
import { CalendarCheck, CreditCard, Phone, ShieldCheck } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { ProductCard, QuoteRow } from "@/components/site/product-card";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/vc";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: `Fees & Online Payment | ${company.name}`,
  description: "Case consultations, litigation retainers, and career counseling with secure online payment by PayPal, card, or Venmo.",
};

const assurances = [
  { icon: ShieldCheck, text: "Secure checkout by PayPal. Card details never touch this website." },
  { icon: CreditCard, text: "Pay with PayPal, any major debit or credit card, or Venmo." },
  { icon: CalendarCheck, text: "Our office follows up within one business day of payment." },
];

export default async function FeesPage() {
  const products = await getProducts();
  const payable = products.filter((p) => p.price !== null);
  const onRequest = products.filter((p) => p.price === null);

  return (
    <>
      <PageHero
        eyebrow="Fees & online payment"
        title="Services & fees"
        crumbs={[{ label: "Services", href: "/services" }, { label: "Fees & Online Payment" }]}
      >
        Pay for a consultation or retainer securely online, or request a quote for services priced to the case.
      </PageHero>

      <section className="bg-cloud py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Pay online" title="Consultations, retainers & counseling">
            Add a service to your cart and check out with PayPal, card, or Venmo.
          </SectionHeading>
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {payable.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={(i % 3) * 80} />
            ))}
          </div>

          <Reveal>
            <ul className="mt-10 grid gap-4 border-y border-navy-900/10 py-6 sm:grid-cols-3">
              {assurances.map((a) => (
                <li key={a.text} className="flex items-start gap-3 text-sm text-ink-700">
                  <a.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  {a.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {onRequest.length > 0 && (
        <section className="bg-white py-14 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <SectionHeading eyebrow="Call for pricing" title="Services priced to the case">
              These depend on the scope of the matter. Request a quote and our office will reply within one business day.
            </SectionHeading>
            <Reveal delay={100}>
              <ul className="rounded-sm bg-cloud px-6">
                {onRequest.map((p) => (
                  <QuoteRow key={p.id} product={p} />
                ))}
              </ul>
              <a
                href={`tel:${company.phoneHref}`}
                className="font-heading mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 hover:text-amaranth-500"
              >
                <Phone className="h-4 w-4 text-gold-600" /> Or call {company.phone}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
