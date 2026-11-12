import Link from "next/link";
import { Phone } from "lucide-react";
import { company } from "@/data/vc";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[auto_1fr] gap-2 border-t border-navy-900/10 bg-white/95 p-2.5 backdrop-blur lg:hidden">
      <a
        href={`tel:${company.phoneHref}`}
        className="flex h-12 items-center justify-center gap-2 rounded-sm border border-navy-900 px-5 text-sm font-semibold text-navy-900"
      >
        <Phone className="h-4 w-4" /> Call
      </a>
      <Link
        href="/book"
        className="font-heading flex h-12 items-center justify-center rounded-sm bg-navy-900 text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        Book a Consultation
      </Link>
    </div>
  );
}
