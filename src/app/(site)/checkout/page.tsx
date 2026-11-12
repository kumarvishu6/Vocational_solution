import type { Metadata } from "next";
import { CheckoutForm } from "@/components/site/checkout-form";
import { PageHero } from "@/components/site/page-hero";
import { company } from "@/data/vc";

export const metadata: Metadata = {
  title: `Checkout | ${company.name}`,
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero eyebrow="Secure checkout" title="Checkout" crumbs={[{ label: "Fees & Online Payment", href: "/fees" }, { label: "Checkout" }]}>
        Review your order, add your details, and continue to secure payment.
      </PageHero>
      <section className="bg-cloud py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <CheckoutForm />
        </div>
      </section>
    </>
  );
}
