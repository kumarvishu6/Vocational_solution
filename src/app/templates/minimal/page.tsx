import { MinimalHero } from "@/components/minimal/hero";
import { MinimalCredibility } from "@/components/minimal/credibility";
import { MinimalAboutMe } from "@/components/minimal/about-me";
import { MinimalServices } from "@/components/minimal/services";
import { MinimalStats } from "@/components/minimal/stats";
import { MinimalCaseExperience } from "@/components/minimal/case-experience";
import { MinimalWhenNeeded } from "@/components/minimal/when-needed";
import { MinimalDelivery } from "@/components/minimal/delivery";
import { MinimalWhyChooseUs } from "@/components/minimal/why-choose-us";
import { MinimalCta } from "@/components/minimal/cta";

export default function SterlingTemplate() {
  return (
    <>
      <MinimalHero />
      <MinimalCredibility />
      <MinimalAboutMe />
      <MinimalServices />
      <MinimalStats />
      <MinimalCaseExperience />
      <MinimalWhenNeeded />
      <MinimalDelivery />
      <MinimalWhyChooseUs />
      <MinimalCta />
    </>
  );
}
