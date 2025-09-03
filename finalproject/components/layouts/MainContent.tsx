import React from "react";
import { MainContentProps } from "@/components/types";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import FoodCarousel from "@/components/sections/FoodCarousel";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

const MainContent: React.FC<MainContentProps> = ({
  foodItems,
  features,
  teamMembers,
}) => {
  return (
    <main className="max-w-7xl mx-auto px-5 py-10">
      <HeroSection />
      <FeatureSection features={features} />
      <FoodCarousel foodItems={foodItems} />
      <TeamSection teamMembers={teamMembers} />
      <CTASection />
    </main>
  );
};

export default MainContent;
