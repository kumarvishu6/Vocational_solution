import type { Metadata } from "next";
import { Hero } from "@/components/site/home/hero";
import { MovingBar } from "@/components/site/moving-bar";
import {
  FeaturedServices,
  FinalCta,
  Leadership,
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
      <MovingBar />
      <WhoWeAre />
      <FeaturedServices />
      <WhyRetain />
      <StatsBand />
      <Leadership />
      <SpecialPrograms />
      <PodcastFeature />
      <FinalCta />
    </>
  );
}
