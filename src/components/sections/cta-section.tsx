import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 80% at 50% 100%, rgba(201,162,77,0.16) 0%, rgba(201,162,77,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-gold-400/10"
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-balance text-white sm:text-4xl">
            Have a complex case? Let&apos;s discuss how expert analysis can help.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60">
            Schedule a consultation or request an evaluation. We respond to all inquiries
            within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              <PhoneCall className="h-4 w-4" /> Speak with an Expert
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
