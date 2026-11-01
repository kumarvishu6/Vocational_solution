"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { demoNavLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export type DemoVariant = "courthouse" | "journal" | "casefile";

function Logo({ base, className }: { base: string; className: string }) {
  return (
    <Link href={base} className="flex shrink-0 items-center">
      <Image
        src="/brand/logo-horizontal.png"
        alt={`${siteConfig.legalName} — ${siteConfig.descriptor}`}
        width={1284}
        height={265}
        priority
        className={cn("w-auto", className)}
      />
    </Link>
  );
}

export function DemoNav({ base, variant }: { base: string; variant: DemoVariant }) {
  const [open, setOpen] = useState(false);
  const links = demoNavLinks(base);

  const toggle = (
    <button
      className="flex h-10 w-10 shrink-0 items-center justify-center text-navy-900 lg:hidden"
      onClick={() => setOpen((v) => !v)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );

  const mobileMenu = open && (
    <nav className="border-t border-navy-900/10 bg-white px-6 pb-6 pt-2 lg:hidden">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => setOpen(false)}
          className="block border-b border-navy-900/8 py-3 text-base font-medium text-navy-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  if (variant === "courthouse") {
    return (
      <header className="sticky top-0 z-50 border-b border-gold-400/40 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
          <Logo base={base} className="h-11 sm:h-12" />
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap border-b border-transparent py-1 text-sm font-medium tracking-wide text-navy-900 transition-colors hover:border-gold-400 hover:text-gold-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy-900 xl:flex"
          >
            <Phone className="h-4 w-4 text-gold-500" /> {siteConfig.phone}
          </a>
          {toggle}
        </div>
        {mobileMenu}
      </header>
    );
  }

  if (variant === "journal") {
    return (
      <header className="sticky top-0 z-50 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
          <Logo base={base} className="h-10 sm:h-11" />
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[0.95rem] text-navy-900 transition-colors hover:text-amaranth-500 hover:underline hover:underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {toggle}
        </div>
        <div className="border-y-[3px] border-double border-navy-900" />
        {mobileMenu}
      </header>
    );
  }

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-navy-900/10 bg-white/95 shadow-lg shadow-navy-900/8 backdrop-blur lg:rounded-full">
        <div className="flex items-center justify-between gap-4 px-4 py-2 lg:pl-6 lg:pr-2">
          <Logo base={base} className="h-9 sm:h-10" />
          <nav className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-navy-900/80 transition-colors hover:text-navy-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={`${base}#contact`}
            className="hidden whitespace-nowrap rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 lg:inline-flex"
          >
            Book a Consultation
          </Link>
          {toggle}
        </div>
        {mobileMenu}
      </div>
    </header>
  );
}
