"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MinimalNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const flatLinks = navLinks.filter((l) => l.label !== "Services");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-azure-500 text-sm font-bold text-white">
            {siteConfig.shortName.charAt(0)}
          </span>
          <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-slate-900">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {flatLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-azure-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-azure-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-azure-500/20 transition-colors hover:bg-azure-600 lg:inline-flex"
        >
          Schedule a Consultation
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-slate-100 bg-white transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col px-6 py-4">
            {flatLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="border-b border-slate-100 py-3 text-sm font-medium text-slate-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 rounded-xl bg-azure-500 px-6 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
