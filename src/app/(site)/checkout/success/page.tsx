import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { ClearCart } from "@/components/site/clear-cart";
import { company } from "@/data/vc";

export const metadata: Metadata = {
  title: `Thank you | ${company.name}`,
  robots: { index: false },
};

export default async function CheckoutSuccessPage({ searchParams }: PageProps<"/checkout/success">) {
  const { ref, mode } = await searchParams;
  const reference = typeof ref === "string" ? ref.slice(0, 20) : "";
  const isRequest = mode === "request";

  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-center text-white sm:py-32">
      <ClearCart />
      <div className="animate-glow pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-xl px-6">
        <span className="animate-cart-bump mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-400 text-navy-950">
          <CheckCircle2 className="h-10 w-10" />
        </span>
        <h1 className="font-heading animate-fade-up mt-8 text-4xl font-bold uppercase tracking-wide sm:text-5xl">
          {isRequest ? "Order received" : "Payment complete"}
        </h1>
        <p className="animate-fade-up mt-4 text-white/75" style={{ animationDelay: "120ms" }}>
          {isRequest
            ? "Thank you. Our office will email you a secure payment link and confirm the next steps."
            : "Thank you. A receipt is on its way to your email, and our office will be in touch about next steps."}
        </p>
        {reference && (
          <p className="animate-fade-up mt-8 inline-block rounded-sm border border-gold-400/50 px-5 py-2 text-sm tracking-[0.2em] text-gold-300" style={{ animationDelay: "200ms" }}>
            Reference {reference}
          </p>
        )}
        <div className="animate-fade-up mt-10 flex flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
          <Link
            href="/"
            className="font-heading inline-flex h-12 items-center justify-center rounded-sm bg-gold-400 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-navy-950"
          >
            Back to home
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="font-heading inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-7 text-sm font-semibold uppercase tracking-[0.14em]"
          >
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
