import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { PayPalDemo } from "@/components/site/paypal-demo";
import { company } from "@/data/vc";

export const metadata: Metadata = { title: `PayPal preview | ${company.name}`, robots: { index: false, follow: false } };

// Private walkthrough of the PayPal step for the client. Not linked anywhere on the site.
export default function PayPalPreviewPage() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-xl px-6">
        <p className="flex items-center gap-2 rounded-md bg-gold-100 px-4 py-3 text-sm text-navy-900 ring-1 ring-gold-400/40">
          <FlaskConical className="h-4 w-4 shrink-0 text-gold-600" />
          Preview in PayPal&apos;s test mode. No real money can move. Try both buttons to see what clients see.
        </p>
        <h1 className="font-heading mt-8 text-3xl font-bold uppercase tracking-wide text-navy-900">Payment</h1>
        <div className="mt-6 rounded-lg bg-cloud p-5">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-navy-900">
              Case Consultation <span className="font-normal text-ink-500">· 1 hour</span>
            </span>
            <span className="font-medium text-navy-900">$350</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between border-t border-navy-900/10 pt-3">
            <span className="font-semibold text-navy-900">Total</span>
            <span className="font-heading text-3xl font-bold text-navy-900">$350</span>
          </div>
        </div>
        <div className="mt-6">
          <PayPalDemo />
        </div>
      </div>
    </section>
  );
}
