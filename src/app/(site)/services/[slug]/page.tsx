import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone, ShoppingBag } from "lucide-react";
import { FinalCta } from "@/components/site/home/sections";
import { SiteIcon } from "@/components/site/icon";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { company, reasons, serviceDetails, services } from "@/data/vc";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: `${service.title} | ${company.name}`, description: service.summary };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const reasonList = detail.reasonsId ? reasons.find((r) => r.id === detail.reasonsId) : undefined;

  return (
    <>
      <PageHero
        eyebrow={service.group}
        title={service.title}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      >
        {detail.lead}
      </PageHero>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_340px] lg:px-10">
          <div className="space-y-12">
            {detail.sections.map((sec, i) => (
              <Reveal key={sec.title} delay={i === 0 ? 0 : 60}>
                <div className="relative pl-6">
                  <span className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-0.5 bg-gradient-to-b from-gold-400 to-transparent" />
                  <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy-900 sm:text-3xl">{sec.title}</h2>
                  {sec.body?.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-700">
                      {p}
                    </p>
                  ))}
                  {sec.list && (
                    <ul className="mt-5 grid gap-3">
                      {sec.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-700">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            {reasonList && (
              <Reveal>
                <div className="rounded-sm bg-navy-900 p-7 text-white sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">When to retain an expert</p>
                  <h2 className="font-heading mt-3 text-2xl font-bold uppercase tracking-wide sm:text-3xl">
                    Reasons for a vocational evaluation
                  </h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {reasonList.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-white/85">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amaranth-500 text-gold-300">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal from="right">
              <div className="rounded-sm bg-cloud p-6">
                <p className="font-heading text-lg font-bold uppercase tracking-wide text-navy-900">All services</p>
                <ul className="mt-4 space-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={cn(
                          "group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-colors",
                          s.slug === slug ? "bg-navy-900 text-white" : "text-ink-700 hover:bg-white hover:text-navy-900"
                        )}
                      >
                        <SiteIcon name={s.icon} className={cn("h-4 w-4", s.slug === slug ? "text-gold-300" : "text-gold-500")} />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal from="right" delay={100}>
              <div className="relative overflow-hidden rounded-sm bg-amaranth-500 p-6 text-white">
                <div className="animate-glow pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/30 blur-2xl" />
                <p className="font-heading relative text-xl font-bold uppercase tracking-wide">Request a free consultation</p>
                <p className="relative mt-2 text-sm text-white/80">Tell us about the case and we&apos;ll recommend the right evaluation.</p>
                <Link
                  href="/book"
                  className="font-heading group relative mt-5 flex h-12 items-center justify-center gap-2 rounded-sm bg-gold-400 text-sm font-semibold uppercase tracking-[0.14em] text-navy-950 transition-colors hover:bg-gold-300"
                >
                  Book a Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="relative mt-3 flex h-12 items-center justify-center gap-2 rounded-sm border border-white/40 text-sm font-semibold"
                >
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
                <Link href="/fees" className="relative mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-200 hover:text-white">
                  <ShoppingBag className="h-3.5 w-3.5" /> View fees & pay online
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
