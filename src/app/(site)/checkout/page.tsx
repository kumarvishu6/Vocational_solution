import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CheckoutForm } from "@/components/site/checkout-form";
import { company } from "@/data/vc";
import { paypalConfigured } from "@/lib/paypal";

export const metadata: Metadata = {
  title: `Checkout | ${company.name}`,
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <nav aria-label="Checkout steps" className="flex items-center gap-2 text-sm text-ink-500">
          <Link href="/fees" className="hover:text-navy-900">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-medium text-navy-900">Checkout</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>Confirmation</span>
        </nav>
        <h1 className="font-heading mt-3 text-3xl font-bold uppercase tracking-wide text-navy-900 sm:text-4xl">Checkout</h1>
        <div className="mt-8 sm:mt-10">
          <CheckoutForm paymentsEnabled={paypalConfigured} />
        </div>
      </div>
    </section>
  );
}
