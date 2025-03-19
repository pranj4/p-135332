import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PricingSection from "@/components/sections/PricingSection";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <PricingSection />
    </main>
  );
};

export default Index;
