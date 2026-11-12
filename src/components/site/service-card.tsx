import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteIcon } from "@/components/site/icon";
import type { Service } from "@/data/vc";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-white p-7 shadow-sm ring-1 ring-navy-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-navy-900 transition-transform duration-500 ease-out group-hover:scale-y-100" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-sm bg-navy-900 text-gold-300 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
        <SiteIcon name={service.icon} className="h-5 w-5" />
      </span>
      <p className="relative mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amaranth-500 transition-colors group-hover:text-gold-300">
        {service.group}
      </p>
      <h3 className="font-heading relative mt-2 text-2xl font-bold uppercase tracking-wide text-navy-900 transition-colors group-hover:text-white">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-500 transition-colors group-hover:text-white/75">
        {service.summary}
      </p>
      <span className="font-heading relative mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amaranth-500 transition-colors group-hover:text-gold-300">
        Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
