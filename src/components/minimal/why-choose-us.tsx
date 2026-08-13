import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { credentials, memberships } from "@/data/site";

export function MinimalWhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-azure-600">
            Credentials &amp; Affiliations
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Certified at the highest level
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {credentials.map((c, i) => (
            <Reveal
              key={c.abbr}
              delay={i * 60}
              className="flex flex-col items-center gap-3 rounded-2xl bg-slate-50 p-6 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-azure-600 shadow-sm">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div className="text-lg font-semibold text-slate-900">{c.abbr}</div>
              <p className="text-xs leading-relaxed text-slate-500">{c.title}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500">
          {memberships.map((m) => (
            <span key={m.name}>{m.name}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
