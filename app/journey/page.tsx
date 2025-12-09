"use client";
import React from "react";
import HoverGradientNavBar from "@/components/ruixen/hover-gradient-navbar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <HoverGradientNavBar />

      <div className="flex flex-col items-center justify-center pt-24 p-8">
        <h1 className="text-4xl font-bold mb-6">My Journey</h1>

        <div className="w-full max-w-5xl mt-10">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>How I Started</AccordionTrigger>
              <AccordionContent>
                I began exploring web development with HTML, CSS, JS, then React & Next.js.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Technologies I Mastered</AccordionTrigger>
              <AccordionContent>
                • JavaScript • TypeScript • React • Next.js • TailwindCSS • Shadcn UI • Firebase • Backend APIs
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Future Goals</AccordionTrigger>
              <AccordionContent>
                Build scalable apps, enhance full-stack skills, and contribute to open-source.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
