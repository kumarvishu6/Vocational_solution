import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { memberships } from "@/data/site";

export function Memberships() {
  return (
    <section className="border-y border-navy-950/8 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Professional Memberships &amp; Affiliations
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {memberships.map((m) => (
              <div key={m.name} className="text-center sm:text-left">
                <div className="font-serif text-sm leading-snug text-navy-950">{m.name}</div>
                <div className="mt-1 text-xs text-gold-600">{m.role}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
