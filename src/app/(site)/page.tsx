import type { Metadata } from "next";
import { Hero } from "@/components/site/home/hero";
import { ReasonsTabs } from "@/components/site/home/reasons-tabs";
import {
  FeaturedServices,
  FinalCta,
  Leadership,
  OfficesStrip,
  PodcastFeature,
  SpecialPrograms,
  StatsBand,
  WhoWeAre,
  WhyRetain,
} from "@/components/site/home/sections";
import { company } from "@/data/vc";

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.intro,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyRetain />
      <FeaturedServices />
      <SpecialPrograms />
      <ReasonsTabs />
      <StatsBand />
      <Leadership />
      <PodcastFeature />
      <OfficesStrip />
      <FinalCta />
    </>
  );
}
