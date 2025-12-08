"use client";

import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";
import { ProjectProgressCard } from "@/components/ruixen/project-progress-card";

export default function ProjectsPage() {
  const milestones = [
    {
      title: "Wireframe Design",
      description: "Initial sketches and design structure completed.",
      completed: true,
    },
    {
      title: "Frontend Development",
      description: "Integrating layouts and responsive components.",
      completed: false,
    },
    {
      title: "Backend Setup",
      description: "Database and API routes configuration in progress.",
      completed: false,
    },
    {
      title: "Final QA & Launch",
      description: "Testing, debugging, and deployment preparation.",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-40 flex flex-col items-center">
        {/* Page Title */}
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
          Projects
        </h1>

        {/* Page Subtitle */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-6 text-center">
          Here are some of the projects I have worked on.
        </p>

        {/* Project Card */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl flex justify-center">
          <ProjectProgressCard
            title="React UI Library"
            projectManager="Muhammed Rafi"
            dueDate="25 Oct 2025"
            milestones={milestones}
            onNextStep={() => alert("On Development..")}
          />
        </div>
      </div>
    </div>
  );
}
