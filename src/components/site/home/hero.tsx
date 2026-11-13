import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { company } from "@/data/vc";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/courthouse-dusk.jpg"
          alt="Neoclassical American courthouse at dusk with the United States flag"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-[20%_center] lg:object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/30 via-navy-950/60 to-navy-950/90 lg:bg-gradient-to-r lg:from-navy-950/95 lg:via-navy-950/75 lg:to-navy-950/20" />
      <span className="animate-grow-y absolute inset-y-0 left-0 w-1 origin-top bg-gold-400" />

      <div className="mx-auto grid max-w-7xl items-center min-h-[calc(100svh-170px)] gap-12 px-6 py-14 sm:min-h-[620px] sm:py-20 lg:min-h-[680px] lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p
            className="animate-fade-up flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-300 sm:gap-4 sm:text-xs sm:tracking-[0.3em]"
            style={{ animationDelay: "150ms" }}
          >
            <span className="animate-grow-x h-px w-8 origin-left bg-gold-400 sm:w-12" style={{ animationDelay: "300ms" }} />
            Forensic vocational experts
          </p>

          <h1 className="mt-4 text-white sm:mt-6">
            <span
              className="font-heading animate-fade-up block text-[1.6rem] font-semibold uppercase leading-[1.08] tracking-[0.06em] sm:text-[2.5rem] lg:text-[2.95rem]"
              style={{ animationDelay: "250ms" }}
            >
              Vocational Expert Witness
            </span>
            <span
              className="font-accent animate-fade-up mt-2 block text-[1.55rem] font-normal leading-tight tracking-[0.01em] text-gold-300 sm:text-[2.3rem] lg:text-[2.6rem]"
              style={{ animationDelay: "400ms" }}
            >
              for Litigation Support
            </span>
          </h1>
          <span
            className="animate-grow-x mt-5 block h-0.5 w-20 sm:mt-7 sm:w-24 origin-left bg-gradient-to-r from-gold-400 to-transparent"
            style={{ animationDelay: "550ms" }}
          />

          <p
            className="animate-fade-up mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-white/80 sm:mt-6 sm:text-lg"
            style={{ animationDelay: "650ms" }}
          >
            <span className="sm:hidden">{company.introShort}</span>
            <span className="hidden sm:inline">{company.intro}</span>
          </p>

          <div
            className="animate-fade-up mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            style={{ animationDelay: "780ms" }}
          >
            <Link
              href="/book"
              className="shine font-heading group inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-gold-400 px-8 text-[0.85rem] sm:h-14 sm:text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-gold-300"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="font-heading inline-flex h-12 items-center justify-center rounded-sm border border-white/40 px-8 text-[0.85rem] sm:h-14 sm:text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              Explore our services
            </Link>
          </div>

          <p
            className="animate-fade-up mt-6 flex items-center gap-2.5 text-[0.65rem] uppercase tracking-[0.18em] text-white/60 sm:mt-9 sm:gap-3 sm:text-xs sm:tracking-[0.24em]"
            style={{ animationDelay: "900ms" }}
          >
            <MapPin className="h-4 w-4 text-gold-400" />
            Florida &amp; nationwide · In-office · Virtual · At home
          </p>
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
