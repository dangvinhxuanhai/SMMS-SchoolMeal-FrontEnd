"use client";
import React from "react";
import Navbar from "@/components/layouts/Navbar";
import MainContent from "@/components/layouts/MainContent";
import Footer from "@/components/layouts/Footer";
import { FOOD_ITEMS, FEATURES, TEAM_MEMBERS } from "@/data/constants";

const SchoolMeal: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 -z-20"></div>
      <div className="fixed inset-0 bg-white/10 backdrop-blur-sm -z-10"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-24 px-4 md:px-8 pb-6 animate-fadeIn">
          <MainContent
            foodItems={FOOD_ITEMS}
            features={FEATURES}
            teamMembers={TEAM_MEMBERS}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SchoolMeal;
