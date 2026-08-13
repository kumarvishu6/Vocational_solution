import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function Intro() {
  return (
    <section className="bg-cream-50 py-24 lg:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Our Approach
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-[1.15] text-balance text-navy-950 sm:text-4xl lg:text-[2.75rem]">
            Expert analysis when the details matter most.
          </h2>
        </Reveal>
        <Reveal delay={100} className="flex flex-col justify-center">
          <p className="text-base leading-relaxed text-ink-500">
            {siteConfig.name} approaches every case the same way: objective testing,
            current labor-market data, and a clearly documented methodology. Attorneys
            retain us because the opinion holds up — in deposition, in a hearing, and in
            front of a jury.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Every engagement is led directly by {" "}
            <span className="font-medium text-navy-950">Cindy Fisher, MA, CRC, PVE, IPEC, ABVE/D</span>
            {" "}— a Diplomate of the American Board of Vocational Experts.
          </p>
          <div className="mt-7">
            <Button href="#expert" variant="ghost">
              Learn About Us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
