import { Scale, HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { serviceCategories } from "@/data/site";

const icons = [Scale, HeartHandshake, GraduationCap];
const tints = [
  { bg: "bg-amaranth-100", text: "text-amaranth-600" },
  { bg: "bg-dust-200", text: "text-amaranth-600" },
  { bg: "bg-amaranth-100", text: "text-amaranth-600" },
];

export function MinimalServices() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-amaranth-600">
            What We Do
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-noir-950 sm:text-4xl">
            Three ways we support your case
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          {serviceCategories.map((category, i) => {
            const Icon = icons[i];
            const tint = tints[i];
            return (
              <Reveal key={category.id} delay={i * 80} className="text-center">
                <div className="flex justify-center">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tint.bg} ${tint.text}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-noir-950">{category.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-noir-400">
                  {category.description}
                </p>
                <a
                  href="#practice-areas"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amaranth-600 hover:text-amaranth-700"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
