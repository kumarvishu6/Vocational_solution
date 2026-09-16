import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";

export function BoldFooter() {
  return (
    <footer className="border-t border-noir-950/10 bg-paper-100 text-noir-600">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/brand/logo-horizontal.png"
              alt={`${siteConfig.legalName} — ${siteConfig.descriptor}`}
              width={1284}
              height={265}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-noir-400">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-amaranth-600">
              <Mail className="h-4 w-4 text-amaranth-500" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2.5 hover:text-amaranth-600">
              <Phone className="h-4 w-4 text-amaranth-500" /> {siteConfig.phone}
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="font-oswald text-sm uppercase tracking-wide text-noir-950">
              {group.replaceAll("_", " ")}
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-noir-400 transition-colors hover:text-amaranth-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-noir-950/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-noir-400 sm:flex-row lg:px-10">
          <p className="font-mono-case">
            &copy; {new Date().getFullYear()} {siteConfig.name.toUpperCase()}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amaranth-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amaranth-600">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
