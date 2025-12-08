"use client";
import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";
import PrecisionCard from "@/components/ruixen/precision-card";

// Use string path for images in the public folder
const rafiImagePath = "/images/rafi.png"; // Make sure rafi.png is in public/images/

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />

      <div className="flex flex-col items-center justify-center pt-24 p-8">
        {/* Precision Card */}
        <div className="w-full max-w-5xl mb-10">
          <PrecisionCard
            leftSubtitle="MUHAMMED RAFI"
            leftTitle="" // Can add a title if needed
            leftDescription="Hi, I’m Muhammed Rafi — a web developer fueled by curiosity and creativity. This showcases my journey in turning ideas into interactive, intuitive, and functional web applications."
            tags={[]} // Add tags if needed
            leftButton="Get Started"
            rightTitle="Redefining Digital Excellence."
            rightDescription="Explore my projects and see how I blend technology, design, and passion to deliver meaningful digital experiences."
            rightItems={["Uptime", "Scalability", "Innovation", "Performance"]}
            certificationText="WEB DEVELOPER"
            rightButton="Explore Solutions →"
            leftImage={rafiImagePath} // ✅ Use string path
          />
        </div>
      </div>
    </div>
  );
}
