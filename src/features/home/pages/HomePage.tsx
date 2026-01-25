"use client";

import { HeroSection, RecomendedProductSection } from "../components";

const HomePage = () => {
  return (
    <div className="space-y-16">
      <HeroSection />

      <RecomendedProductSection />
    </div>
  );
};

export default HomePage;
