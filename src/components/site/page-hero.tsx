import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  children,
  crumbs = [],
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image
        src="/images/courthouse-dusk.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns -z-20 object-cover object-[30%_center] opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      <span className="animate-grow-y absolute inset-y-0 left-0 w-1 origin-top bg-gold-400" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="animate-fade-up flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55"
        >
          <Link href="/" className="transition-colors hover:text-gold-300">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-gold-300">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gold-300">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p
          className="animate-fade-up mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300"
          style={{ animationDelay: "100ms" }}
        >
          <span className="animate-grow-x h-px w-10 origin-left bg-gold-400" style={{ animationDelay: "250ms" }} />
          {eyebrow}
        </p>
        <h1
          className="font-heading animate-fade-up mt-5 max-w-4xl text-[2.3rem] font-semibold uppercase leading-[1.06] tracking-[0.02em] sm:text-5xl lg:text-[3.4rem]"
          style={{ animationDelay: "200ms" }}
        >
          {title}
        </h1>
        {children && (
          <p
            className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ animationDelay: "320ms" }}
          >
            {children}
          </p>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
    </section>
  );
}
