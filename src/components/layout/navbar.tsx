"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-navy-950/95 backdrop-blur shadow-[0_1px_0_0_rgba(201,162,77,0.15)]"
          : "bg-navy-950"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/60 font-serif text-base text-gold-300">
            {siteConfig.shortName.charAt(0)}
          </span>
          <span className="font-serif text-lg tracking-wide text-white">
            {siteConfig.shortName}
          </span>
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
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-white/50" strokeWidth={2.5} />
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
                  <div className="overflow-hidden rounded-xl border border-navy-700 bg-navy-900 shadow-xl shadow-black/30">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-white/75 transition-colors hover:bg-navy-800 hover:text-gold-300"
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

        <div className="hidden lg:block">
          <Button href="/contact" size="md">
            Schedule a Consultation
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden bg-navy-950 transition-[grid-template-rows] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 pb-8 pt-2">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-white/5 py-1">
                <Link
                  href={link.href}
                  className="block py-2.5 text-base font-medium text-white/85"
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
                        className="py-1.5 text-sm text-white/55"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/contact" className="mt-5 w-full" onClick={() => setMobileOpen(false)}>
              Schedule a Consultation
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
