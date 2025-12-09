"use client";
import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";
import PrecisionCard from "@/components/ruixen/precision-card";
const rafiImagePath = "/images/rafi.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />

      <div className="flex flex-col items-center justify-center pt-24 p-8">
        {/* Precision Card */}
        <div className="w-full max-w-5xl mb-16">
          <PrecisionCard
            leftSubtitle="MUHAMMED RAFI"
            leftTitle=""
            leftDescription="Hi, I’m Muhammed Rafi — a web developer fueled by curiosity and creativity. This showcases my journey in turning ideas into interactive, intuitive, and functional web applications."
            tags={[]}
            leftButton="Get Started"
            rightTitle="Redefining Digital Excellence."
            rightDescription="Explore my projects and see how I blend technology, design, and passion to deliver meaningful digital experiences."
            rightItems={["Uptime", "Scalability", "Innovation", "Performance"]}
            certificationText="WEB DEVELOPER"
            rightButton="Explore Solutions →"
            leftImage={rafiImagePath}
          />
        </div>

      

      </div>
    </div>
  );
}