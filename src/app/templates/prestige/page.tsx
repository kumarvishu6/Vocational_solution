import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { AboutMe } from "@/components/sections/about-me";
import { Services } from "@/components/sections/services";
import { WhenNeeded } from "@/components/sections/when-needed";
import { Delivery } from "@/components/sections/delivery";
import { Process } from "@/components/sections/process";
import { CaseExperience } from "@/components/sections/case-experience";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Memberships } from "@/components/sections/memberships";
import { Faq } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta-section";

export default function HeritageTemplate() {
  return (
    <>
      <Hero />
      <Credibility />
      <AboutMe />
      <Services />
      <WhenNeeded />
      <Delivery />
      <Process />
      <CaseExperience />
      <WhyChooseUs />
      <Memberships />
      <Faq />
      <CtaSection />
    </>
  );
}
