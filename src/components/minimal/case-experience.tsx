import {
  Gavel,
  HeartPulse,
  Scale,
  ShieldCheck,
  Compass,
  ClipboardList,
  BarChart3,
  ListChecks,
  Repeat,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "personal-injury": HeartPulse,
  "marital-dissolution": Scale,
  "career-counseling": Compass,
  "vocational-rehabilitation": Repeat,
  "social-security": ShieldCheck,
  "return-to-work": Gavel,
  "tests-and-assessment": ClipboardList,
  "product-liability": BarChart3,
  "medical-malpractice": ListChecks,
};

const tints = ["bg-azure-50 text-azure-600", "bg-gold-100 text-gold-600"];

export function MinimalCaseExperience() {
  return (
    <section id="practice-areas" className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-azure-600">
            Practice Areas
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            The full spectrum of vocational support
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id] ?? Gavel;
            const tint = tints[i % 2];
            return (
              <Reveal key={service.id} delay={(i % 3) * 70}>
                <a
                  href="/contact"
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-lg hover:shadow-slate-900/[0.06]"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tint}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-azure-600 transition-colors group-hover:text-azure-700">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
