import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import { company, team } from "@/data/vc";

const lead = team[0];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div className="absolute inset-x-0 top-0 -z-20 h-[105vw] overflow-hidden sm:h-[70vw] lg:inset-0 lg:h-auto">
        <Image
          src="/images/courthouse-dusk.jpg"
          alt="Neoclassical American courthouse at dusk with the United States flag"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-[24%_center] lg:object-center"
        />
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[105vw] bg-gradient-to-b from-navy-950/10 via-navy-950/40 to-navy-950 sm:h-[70vw] lg:inset-0 lg:h-auto lg:bg-gradient-to-r lg:from-navy-950/95 lg:via-navy-950/75 lg:to-navy-950/20" />
      <span className="animate-grow-y absolute inset-y-0 left-0 w-1 origin-top bg-gold-400" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-[78vw] sm:pt-[52vw] lg:min-h-[640px] lg:grid-cols-[1.35fr_0.65fr] lg:px-10 lg:py-28">
        <div>
          <p
            className="animate-fade-up flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300"
            style={{ animationDelay: "150ms" }}
          >
            <span className="animate-grow-x h-px w-12 origin-left bg-gold-400" style={{ animationDelay: "300ms" }} />
            Forensic vocational experts
          </p>

          <h1 className="font-heading mt-6 text-[2.9rem] font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-[5.4rem]">
            <span className="animate-fade-up block" style={{ animationDelay: "250ms" }}>
              Vocational expert
            </span>
            <span className="animate-fade-up block" style={{ animationDelay: "380ms" }}>
              witness <span className="text-gold-400">&amp;</span> litigation
            </span>
            <span className="animate-fade-up block text-gold-300" style={{ animationDelay: "510ms" }}>
              support
            </span>
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={{ animationDelay: "650ms" }}
          >
            {company.intro}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "780ms" }}
          >
            <Link
              href="/book"
              className="shine font-heading group inline-flex h-14 items-center justify-center gap-3 rounded-sm bg-gold-400 px-8 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="font-heading inline-flex h-14 items-center justify-center rounded-sm border border-white/40 px-8 text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Explore our services
            </Link>
          </div>

          <p
            className="animate-fade-up mt-9 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/60"
            style={{ animationDelay: "900ms" }}
          >
            <MapPin className="h-4 w-4 text-gold-400" />
            Florida &amp; nationwide · In-office · Virtual · At home
          </p>
        </div>

        <div className="animate-fade-up hidden lg:block" style={{ animationDelay: "800ms" }}>
          <div className="animate-float rounded-sm border border-white/15 bg-white/10 p-5 shadow-2xl shadow-navy-950/40 backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src={lead.photo!} alt={lead.name} fill sizes="320px" className="object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" />
            </div>
            <p className="font-heading mt-4 text-2xl font-bold uppercase tracking-wide text-white">Ms. {lead.name}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{lead.credentials}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/75">
              <BadgeCheck className="h-4 w-4 text-gold-400" /> Diplomate, American Board of Vocational Experts
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-gold-300" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
    </section>
  );
}
