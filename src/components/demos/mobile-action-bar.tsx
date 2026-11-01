import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileActionBar({ base }: { base: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-navy-900/10 bg-white/95 p-2.5 backdrop-blur lg:hidden">
      <a
        href={`tel:${siteConfig.phoneHref}`}
        className="flex h-12 items-center justify-center gap-2 rounded-lg border border-navy-900 text-sm font-semibold text-navy-900"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={`${base}#contact`}
        className="flex h-12 items-center justify-center rounded-lg bg-navy-900 text-sm font-semibold text-white"
      >
        Book a Consultation
      </a>
    </div>
  );
}
