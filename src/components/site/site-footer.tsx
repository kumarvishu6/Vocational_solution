import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { company, navLinks, services } from "@/data/vc";

export function SiteFooter() {
  return (
    <footer className="relative bg-navy-950 text-white">
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] lg:px-10">
        <div>
          <Image
            src="/brand/logo-horizontal-dark.png"
            alt={company.legalName}
            width={1284}
            height={265}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">{company.intro}</p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Quick navigation</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[{ label: "Home", href: "/" }, ...navLinks, { label: "Book a Consultation", href: "/book" }].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/70 transition-colors hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm text-white/70">
            <li>
              <a href={`tel:${company.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phoneAltHref}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" /> {company.phoneAlt}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="h-4 w-4 text-gold-400" /> Fax {company.fax}
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-400" /> {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-400" />
              <span>
                {company.mailing[0]}
                <br />
                {company.mailing[1]}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
