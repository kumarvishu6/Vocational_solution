import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { company } from "@/data/vc";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-navy-950 px-6 py-20 text-center text-white">
      <Image src="/images/courthouse-dusk.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-navy-950/70" />
      <div className="max-w-xl">
        <Image
          src="/brand/logo-horizontal-dark.png"
          alt={company.legalName}
          width={1284}
          height={265}
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">Page not found</p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">This page isn&apos;t here</h1>
        <p className="mt-5 text-white/70">
          The page may have moved. Head back home, or call our office and we&apos;ll point you in the right direction.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold-400 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-navy-950"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-7 text-sm font-semibold uppercase tracking-[0.14em]"
          >
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
