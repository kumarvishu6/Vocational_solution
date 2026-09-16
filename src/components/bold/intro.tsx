import { Reveal } from "@/components/ui/reveal";
import { expert } from "@/data/site";

export function BoldIntro() {
  return (
    <section className="bg-paper-100 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="font-serif text-6xl text-amaranth-400">&ldquo;</span>
          <p className="font-oswald -mt-4 text-3xl leading-[1.2] text-balance text-noir-950 sm:text-4xl lg:text-5xl">
            Every opinion is built on objective testing and current labor-market
            data &mdash; that&apos;s why it holds up{" "}
            <span className="text-amaranth-600">in deposition, in a hearing,</span> and in
            front of a jury.
          </p>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-noir-400">
            {expert.name} &mdash; Director &amp; Owner
          </p>
        </Reveal>
      </div>
    </section>
  );
}
