import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/site";

export function MinimalFooter() {
  return (
    <footer className="bg-slate-50 text-slate-500">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-500 text-sm font-bold text-white">
              {siteConfig.shortName.charAt(0)}
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-slate-900">
              {siteConfig.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-azure-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-azure-50 text-azure-600">
                <Mail className="h-4 w-4" />
              </span>
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 hover:text-azure-600">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-azure-50 text-azure-600">
                <Phone className="h-4 w-4" />
              </span>
              {siteConfig.phone}
            </a>
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-azure-50 text-azure-600">
                <MapPin className="h-4 w-4" />
              </span>
              Offices throughout Florida
            </span>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="text-sm font-semibold text-slate-900">{group.replaceAll("_", " ")}</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 transition-colors hover:text-azure-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-azure-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-azure-600">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
