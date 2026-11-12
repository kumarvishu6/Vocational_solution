"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { company, navLinks } from "@/data/vc";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-navy-950 text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[0.7rem] uppercase tracking-[0.2em] lg:px-10">
          <p className="truncate text-white/70">
            {company.descriptor}
            <span className="hidden xl:inline"> · Florida &amp; Nationwide</span>
          </p>
          <div className="flex shrink-0 items-center gap-6 whitespace-nowrap">
            <a href={`tel:${company.phoneHref}`} className="flex items-center gap-2 text-gold-300 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hidden items-center gap-2 text-white/70 transition-colors hover:text-white md:flex"
            >
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <Link href="/shop" className="flex items-center gap-2 text-white/70 transition-colors hover:text-white">
              <ShoppingBag className="h-3.5 w-3.5" /> Shop &amp; Payment
            </Link>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all duration-300",
          scrolled ? "border-navy-900/10 shadow-lg shadow-navy-900/5" : "border-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 lg:px-10",
            scrolled ? "py-2.5" : "py-3.5"
          )}
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${company.name} home`}>
            <Image
              src="/brand/logo-horizontal.png"
              alt={`${company.legalName} — ${company.descriptor}`}
              width={1284}
              height={265}
              priority
              className={cn("w-auto transition-all duration-300", scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12")}
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-heading group relative py-1.5 text-[0.95rem] font-semibold uppercase tracking-[0.12em] transition-colors",
                    active ? "text-gold-500" : "text-navy-900 hover:text-gold-500"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-gold-400 transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/book"
            className="shine font-heading hidden items-center gap-2 whitespace-nowrap rounded-sm bg-navy-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-800 xl:inline-flex"
          >
            Book a Consultation
          </Link>

          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-navy-900/15 text-navy-900 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-navy-950 px-6 pb-8 pt-5 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">Menu</span>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/50 text-gold-300"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-6 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-heading animate-fade-up flex items-baseline gap-4 border-b border-white/10 py-3 text-[1.9rem] font-semibold uppercase leading-tight tracking-wide",
                  isActive(pathname, link.href) && "text-gold-300"
                )}
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <span className="w-6 font-sans text-xs font-semibold text-gold-400">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="font-heading flex h-14 items-center justify-center gap-2 rounded-sm bg-gold-400 font-semibold uppercase tracking-[0.14em] text-navy-950"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${company.phoneHref}`}
                className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/25 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <Link
                href="/shop"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/25 text-sm font-semibold"
              >
                <ShoppingBag className="h-4 w-4" /> Shop
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
