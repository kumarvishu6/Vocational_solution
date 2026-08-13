import { BoldHero } from "@/components/bold/hero";
import { BoldIntro } from "@/components/bold/intro";
import { BoldServices } from "@/components/bold/services";
import { BoldProcess } from "@/components/bold/process";
import { BoldExpert } from "@/components/bold/expert";
import { BoldCaseExperience } from "@/components/bold/case-experience";
import { BoldWhyChooseUs } from "@/components/bold/why-choose-us";
import { BoldFaq } from "@/components/bold/faq";
import { BoldCta } from "@/components/bold/cta";

export default function BoldTemplate() {
  return (
    <>
      <BoldHero />
      <BoldIntro />
      <BoldServices />
      <BoldProcess />
      <BoldExpert />
      <BoldCaseExperience />
      <BoldWhyChooseUs />
      <BoldFaq />
      <BoldCta />
    </>
  );
}
