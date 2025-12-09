"use client";

import React from "react";
import { Star } from "lucide-react";

interface ExperienceItem {
  title: string;
  details: string;
  period: string;
  company: string;
}

interface Experience5Props {
  title?: string;
  experience?: ExperienceItem[];
}

const Experience5 = ({
  title = "Education",
  experience = [
    {
      title: "MSc Computer Science",
      details: "Sn College • Cherthala",
      period: "2024 - Present",
      company: "",
    },
    {
      title: "BSc Computer Science",
      details: "Sn College • Cherthala",
      period: "2022 - 2024",
      company: "",
    },
    {
      title: "Plus Two",
      details: "Leo 13 • Alappuzha",
      period: "2019 - 2021",
      company: "",
    },
  ],
}: Experience5Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* 🔹 Reduced title size */}
        <h2 className="mb-12 font-serif text-3xl md:text-5xl font-medium leading-tight">
          {title}
        </h2>

        <div className="space-y-8">
          {experience.map(({ title, details, period, company }, idx) => (
            <div
              key={idx}
              className="border-border border-b pb-6 last:border-b-0"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="md:w-2/3 flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-xl text-yellow-500 font-semibold">
                    {title}
                  </h3>
                </div>

                <div className="text-right md:w-1/3 md:text-right">
                  <p className="mb-1 text-sm font-medium">{period}</p>
                  <p className="text-muted-foreground text-sm">{company}</p>
                </div>
              </div>

              {/* 🔹 Description removed — layout preserved */}
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Experience5 };
