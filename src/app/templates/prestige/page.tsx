import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Expert } from "@/components/sections/expert";
import { CaseExperience } from "@/components/sections/case-experience";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Memberships } from "@/components/sections/memberships";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";

export default function PrestigeTemplate() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Expert />
      <CaseExperience />
      <WhyChooseUs />
      <Memberships />
      <Faq />
      <CtaSection />
    </>
  );
}
