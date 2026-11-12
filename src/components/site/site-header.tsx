"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, CreditCard, Mail, Menu, Phone, X } from "lucide-react";
import { CartButton } from "@/components/site/cart";
import { SiteIcon } from "@/components/site/icon";
import { company, navLinks, services } from "@/data/vc";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function ServicesMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100">
      <div className="overflow-hidden rounded-sm bg-white shadow-2xl shadow-navy-900/15 ring-1 ring-navy-900/10">
        <span className="block h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-amaranth-500" />
        <ul className="p-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group/link flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-cloud hover:text-navy-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy-900 text-gold-300 transition-colors group-hover/link:bg-gold-400 group-hover/link:text-navy-950">
                  <SiteIcon name={s.icon} className="h-4 w-4" />
                </span>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/fees"
          className="group/fees flex items-center justify-between gap-3 border-t border-navy-900/10 bg-navy-900 px-5 py-4 text-white transition-colors hover:bg-navy-800"
        >
          <span className="flex items-center gap-3">
            <CreditCard className="h-4 w-4 text-gold-300" />
            <span>
              <span className="font-heading block text-sm font-semibold uppercase tracking-[0.14em]">Fees &amp; Online Payment</span>
              <span className="block text-xs text-white/60">Published fees · pay securely online</span>
            </span>
          </span>
          <ArrowRight className="h-4 w-4 text-gold-300 transition-transform group-hover/fees:translate-x-1" />
        </Link>
      </div>
    </div>
  );
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
            <Link href="/fees" className="flex items-center gap-2 text-white/70 transition-colors hover:text-white">
              <CreditCard className="h-3.5 w-3.5" /> Pay Online
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

          <nav className="hidden min-w-0 items-center gap-4 lg:flex 2xl:gap-7">
            {navLinks.map((link) => {
              const isServices = link.href === "/services";
              const active = isActive(pathname, link.href) || (isServices && pathname.startsWith("/fees"));
              return (
                <div key={link.href} className="group/item relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "font-heading relative flex items-center whitespace-nowrap py-1.5 text-[0.9rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                      active ? "text-gold-500" : "text-navy-900 hover:text-gold-500"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-gold-400 transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100"
                      )}
                    />
                  </Link>
                  {isServices && <ServicesMenu />}
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <CartButton />
            <Link
              href="/book"
              className="shine font-heading hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-sm bg-navy-900 px-4 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-navy-800 xl:inline-flex"
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
                href="/fees"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-sm border border-white/25 text-sm font-semibold"
              >
                <CreditCard className="h-4 w-4" /> Pay Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
