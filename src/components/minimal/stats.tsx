import { Clock, Award, Gavel, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ScalesIllustration } from "@/components/minimal/scales-illustration";
import { stats } from "@/data/site";

const icons = [Clock, Award, Gavel, MapPin];
const tints = [
  { bg: "bg-amaranth-100", text: "text-amaranth-600" },
  { bg: "bg-dust-200", text: "text-amaranth-600" },
  { bg: "bg-amaranth-100", text: "text-amaranth-600" },
  { bg: "bg-dust-200", text: "text-amaranth-600" },
];

export function MinimalStats() {
  return (
    <section className="bg-dust-100 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-white shadow-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 60% at 30% 20%, rgba(132,0,50,0.08) 0%, rgba(132,0,50,0) 60%)",
              }}
            />
            <ScalesIllustration className="absolute inset-0 m-auto h-48 w-48 text-amaranth-500" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-amaranth-600">
              Track Record
            </p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-noir-950 sm:text-4xl">
              Nearly two decades of forensic vocational experience
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {stats.map((stat, i) => {
              const Icon = icons[i];
              const tint = tints[i];
              return (
                <Reveal key={stat.label} delay={i * 70}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint.bg} ${tint.text}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-2xl font-semibold text-noir-950">{stat.value}</div>
                  <p className="mt-1 text-sm text-noir-400">{stat.label}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
