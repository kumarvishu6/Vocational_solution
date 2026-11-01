import Image from "next/image";
import Link from "next/link";
import { demoNavLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import type { DemoVariant } from "@/components/demos/demo-nav";

export function DemoFooter({ base, variant }: { base: string; variant: DemoVariant }) {
  const light = variant === "journal";

  return (
    <footer
      className={cn(
        light ? "border-t-[3px] border-double border-navy-900 bg-white text-navy-900" : "bg-navy-900 text-white",
        variant === "casefile" && "mt-6 rounded-t-[2.5rem]"
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Image
            src={light ? "/brand/logo-horizontal.png" : "/brand/logo-horizontal-dark.png"}
            alt={siteConfig.legalName}
            width={1284}
            height={265}
            className="h-12 w-auto"
          />
          <p className={cn("mt-5 max-w-sm text-sm leading-relaxed", light ? "text-navy-900/70" : "text-white/65")}>
            {siteConfig.motto} {siteConfig.descriptor}.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5 self-start text-sm">
          {demoNavLinks(base).map((link) => (
            <Link key={link.label} href={link.href} className="py-1 transition-opacity hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm">
          <a href={`tel:${siteConfig.phoneHref}`} className="hover:opacity-60">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="break-all hover:opacity-60">
            {siteConfig.email}
          </a>
          <span className={light ? "text-navy-900/70" : "text-white/65"}>{siteConfig.address}</span>
        </div>
      </div>

      <div className={cn("border-t", light ? "border-navy-900/15" : "border-white/10")}>
        <p className={cn("mx-auto max-w-7xl px-6 py-5 text-xs lg:px-10", light ? "text-navy-900/60" : "text-white/50")}>
          © {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
