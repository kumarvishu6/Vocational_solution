import { Reveal } from "@/components/ui/reveal";
import { expert, credentialBadges } from "@/data/site";

export function MinimalExpert() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.75fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-azure-500 to-azure-700">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%)",
              }}
            />
            <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-4xl font-semibold text-white">
                {expert.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/80">
                Director &amp; Owner
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-sm font-semibold uppercase tracking-wide text-azure-600">
            Meet the Expert
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            {expert.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">{expert.credentials}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            {expert.bio}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            {expert.education}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {credentialBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-azure-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-azure-500/25 transition-colors hover:bg-azure-600"
            >
              Schedule a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
