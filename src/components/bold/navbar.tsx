"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function BoldNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const flatLinks = navLinks.filter((l) => l.label !== "Services");

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-950/10 bg-stone-100/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal-950 text-sm font-bold text-stone-100">
            {siteConfig.shortName.charAt(0)}
          </span>
          <span className="font-oswald text-lg font-medium tracking-wide text-charcoal-950">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {flatLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-charcoal-700 transition-colors hover:text-clay-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-charcoal-950 px-6 py-3 text-sm font-medium text-stone-100 transition-colors hover:bg-clay-600 lg:inline-flex"
        >
          Schedule Consultation
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center text-charcoal-950 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-charcoal-950/10 bg-stone-100 transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col px-6 py-4">
            {flatLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="border-b border-charcoal-950/10 py-3 text-sm font-medium text-charcoal-700"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-full bg-charcoal-950 px-6 py-3 text-center text-sm font-medium text-stone-100"
              onClick={() => setMobileOpen(false)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
