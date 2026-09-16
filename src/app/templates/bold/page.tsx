import { BoldHero } from "@/components/bold/hero";
import { BoldCredibility } from "@/components/bold/credibility";
import { BoldAboutMe } from "@/components/bold/about-me";
import { BoldServices } from "@/components/bold/services";
import { BoldWhenNeeded } from "@/components/bold/when-needed";
import { BoldDelivery } from "@/components/bold/delivery";
import { BoldProcess } from "@/components/bold/process";
import { BoldCaseExperience } from "@/components/bold/case-experience";
import { BoldWhyChooseUs } from "@/components/bold/why-choose-us";
import { BoldFaq } from "@/components/bold/faq";
import { BoldCta } from "@/components/bold/cta";

export default function CounselTemplate() {
  return (
    <>
      <BoldHero />
      <BoldCredibility />
      <BoldAboutMe />
      <BoldServices />
      <BoldWhenNeeded />
      <BoldDelivery />
      <BoldProcess />
      <BoldCaseExperience />
      <BoldWhyChooseUs />
      <BoldFaq />
      <BoldCta />
    </>
  );
}
