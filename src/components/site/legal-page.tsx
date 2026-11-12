import { PageHero } from "@/components/site/page-hero";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} crumbs={[{ label: title }]}>
        {intro}
      </PageHero>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-navy-900">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-700">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
