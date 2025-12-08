"use client";
import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Connect Page</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Get in touch with me here.
        </p>
      </div>
    </div>
  );
}
import PrecisionCard from "@/components/ruixen/precision-card";

export function PrecisionDemoPage() {
  return (
    <div className="p-10 flex items-center justify-center min-h-screen">
      <PrecisionCard
        leftSubtitle="Why Reliability Matters"
        leftTitle="Building next-gen platforms with unmatched stability"
        leftDescription="Modern digital systems demand reliability and scalability from day one. With adaptive infrastructure and intelligent monitoring, we ensure every deployment performs flawlessly at scale."
        tags={["Scalability", "Resilience", "Automation", "Cloud", "Security"]}
        leftButton="Get Started"
        rightTitle="Redefining Digital Excellence."
        rightDescription="Empowering teams to innovate faster, deploy safer, and deliver exceptional user experiences — all powered by automation and real-time intelligence."
        rightItems={["Uptime", "Scalability", "Innovation", "Performance"]}
        certificationText="ISO Certified Infrastructure"
        rightButton="Explore Solutions →"
      />
    </div>
  );
}
