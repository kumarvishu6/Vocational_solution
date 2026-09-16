"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-cream-50 transition-shadow duration-300",
        scrolled
          ? "shadow-[0_1px_0_0_rgba(0,38,66,0.10),0_8px_24px_-16px_rgba(0,38,66,0.35)]"
          : "border-b border-navy-900/8"
      )}
    >
      <Container className="flex h-24 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/brand/logo-horizontal.png"
            alt={`${siteConfig.legalName} — ${siteConfig.descriptor}`}
            width={1284}
            height={265}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-900/75 transition-colors hover:text-navy-900"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-navy-900/40" strokeWidth={2.5} />
                )}
              </Link>

              {link.dropdown && (
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-all duration-150",
                    openDropdown === link.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="overflow-hidden rounded-xl border border-navy-900/10 bg-white shadow-xl shadow-navy-900/10">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-ink-700 transition-colors hover:bg-cream-100 hover:text-navy-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 lg:inline-flex"
        >
          Schedule a Consultation
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center text-navy-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden border-t border-navy-900/8 bg-cream-50 transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 pb-8 pt-2">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-navy-900/8 py-1">
                <Link
                  href={link.href}
                  className="block py-2.5 text-base font-medium text-navy-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="mb-2 flex flex-col gap-0.5 pl-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="py-1.5 text-sm text-ink-500"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-5 w-full rounded-full bg-navy-900 px-6 py-3.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
