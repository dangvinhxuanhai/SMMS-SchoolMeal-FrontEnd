import React from "react";
import Navbar from "@/components/layouts/Navbar";
import MainContent from "@/components/layouts/MainContent";
import Footer from "@/components/layouts/Footer";
import { FOOD_ITEMS, FEATURES, TEAM_MEMBERS } from "@/data/constants";

const RootLayout: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #D3CAE2, #E6C17A)",
      }}
    >
      <Navbar />
      <main className="flex-1">
        <MainContent
          foodItems={FOOD_ITEMS}
          features={FEATURES}
          teamMembers={TEAM_MEMBERS}
        />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;