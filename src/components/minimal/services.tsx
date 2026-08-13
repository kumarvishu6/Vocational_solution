import { Scale, HeartHandshake, GraduationCap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { serviceCategories } from "@/data/site";

const icons = [Scale, HeartHandshake, GraduationCap];
const tints = [
  { bg: "bg-azure-50", text: "text-azure-600" },
  { bg: "bg-gold-100", text: "text-gold-600" },
  { bg: "bg-azure-50", text: "text-azure-600" },
];

export function MinimalServices() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-azure-600">
            What We Do
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
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
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                  {category.description}
                </p>
                <a
                  href="#practice-areas"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-azure-600 hover:text-azure-700"
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
