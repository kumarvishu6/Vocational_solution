import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/60 font-serif text-base text-gold-300">
              {siteConfig.shortName.charAt(0)}
            </span>
            <span className="font-serif text-lg text-white">{siteConfig.shortName}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-gold-300">
              <Mail className="h-4 w-4 text-gold-400" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 hover:text-gold-300">
              <Phone className="h-4 w-4 text-gold-400" /> {siteConfig.phone}
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-gold-400" /> Offices throughout Florida
            </span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="font-serif text-sm tracking-wide text-white">
              {group.replaceAll("_", " ")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 transition-colors hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-300">Terms of Use</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
