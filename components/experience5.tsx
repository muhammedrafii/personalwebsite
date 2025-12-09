"use client";

import React from "react";

interface ExperienceItem {
  title: string;
  details: string;
  period: string;
  company: string;
  description: string;
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
      description: "",
    },
    {
      title: "BSc Computer Science",
      details: "Sn College • Cherthala",
      period: "2022 - 2024",
      company: "",
      description: "",
    },
    {
      title: "Plus Two",
      details: "Leo 13 • Alappuzha",
      period: "2019 - 2021",
      company: "",
      description: "",
    },
  ],
}: Experience5Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto max-w-7xl"> {/* Wider container */}
        {/* Main section title */}
        <h2 className="mb-12 font-serif text-4xl md:text-7xl font-medium leading-tight">
          {title}
        </h2>

        <div className="space-y-8">
          {experience.map(({ title, details, period, company }, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-start border-b border-border pb-6 last:border-b-0"
            >
              {/* Left side: icon + title + details */}
              <div className="flex-1 flex items-start gap-4 min-w-0"> {/* flex-1 for wide left column */}
                {/* Inline education icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
                  />
                </svg>

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold truncate">{title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm truncate">{details}</p>
                </div>
              </div>

              {/* Right side: period/company far right */}
              <div className="md:w-1/5 text-right flex-shrink-0 mt-2 md:mt-0">
                <p className="mb-1 text-sm font-medium">{period}</p>
                {company && <p className="text-muted-foreground text-sm">{company}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Experience5 };
