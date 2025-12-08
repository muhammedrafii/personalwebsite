"use client";
import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Journey Page</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Welcome to the Journey page.
        </p>
      </div>
    </div>
  );
}
