import { MinimalHero } from "@/components/minimal/hero";
import { MinimalServices } from "@/components/minimal/services";
import { MinimalStats } from "@/components/minimal/stats";
import { MinimalCaseExperience } from "@/components/minimal/case-experience";
import { MinimalExpert } from "@/components/minimal/expert";
import { MinimalWhyChooseUs } from "@/components/minimal/why-choose-us";
import { MinimalCta } from "@/components/minimal/cta";

export default function MinimalTemplate() {
  return (
    <>
      <MinimalHero />
      <MinimalServices />
      <MinimalStats />
      <MinimalCaseExperience />
      <MinimalExpert />
      <MinimalWhyChooseUs />
      <MinimalCta />
    </>
  );
}
