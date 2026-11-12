import type { Metadata } from "next";
import { Lock, Phone, ShieldCheck } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { PageHero } from "@/components/site/page-hero";
import { ShopCatalog } from "@/components/site/shop-catalog";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/vc";

export const metadata: Metadata = {
  title: `Fees & Online Payment | ${company.name}`,
  description: "Court services, career counseling packages, and other vocational services with published fees.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero eyebrow="Fees & online payment" title="Services & fees" crumbs={[{ label: "Services", href: "/services" }, { label: "Fees & Online Payment" }]}>
        Court services, career counseling packages, and other vocational services. Choose a category to see what&apos;s
        included and the fee.
      </PageHero>

      <section className="bg-cloud py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ShopCatalog />

          <Reveal>
            <div className="mt-8 grid sm:mt-12 gap-4 rounded-sm bg-white p-6 ring-1 ring-navy-900/10 sm:grid-cols-3 sm:p-8">
              <p className="flex items-start gap-3 text-sm text-ink-700">
                <Lock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                Add services to your cart and check out. Payment is completed on our provider&apos;s secure checkout
                page.
              </p>
              <p className="flex items-start gap-3 text-sm text-ink-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                Card details are never entered or stored on this website.
              </p>
              <a href={`tel:${company.phoneHref}`} className="flex items-start gap-3 text-sm font-semibold text-navy-900 hover:text-amaranth-500">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                Prefer to pay by phone? Call {company.phone}.
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
