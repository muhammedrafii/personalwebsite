"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

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
  title = "Work Experience",
  experience = [
    {
      title: "Senior Full Stack Developer",
      details: "Full-Time • Remote • San Francisco CA",
      period: "Mar 2022 - Present",
      company: "Anthropic",
      description:
        "Led development of scalable web applications using React, Node.js, and PostgreSQL. Architected microservices infrastructure serving 100K+ users. Mentored junior developers and established coding standards.",
    },
    {
      title: "Frontend Engineer",
      details: "Full-Time • Onsite • Austin TX",
      period: "Jan 2020 - May 2021",
      company: "Vercel",
      description:
        "Developed full-stack applications using JavaScript, Python, and MySQL. Participated in agile development process and code reviews. Contributed to open-source projects and internal tooling.",
    },
    {
      title: "Junior Web Developer",
      details: "Full-Time • Onsite • Denver CO",
      period: "Aug 2018 - Dec 2019",
      company: "Figma",
      description:
        "Created responsive websites using HTML, CSS, and JavaScript. Worked with WordPress and PHP for content management. Assisted in debugging and testing web applications.",
    },
  ],
}: Experience5Props) => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-serif text-4xl font-medium leading-tight md:text-7xl">
            {title}
          </h2>

          <div className="space-y-8">
            {experience.map(
              ({ title, details, period, company, description }, idx) => (
                <div key={idx} className="flex flex-col gap-4 md:flex-row md:items-start">
                  {/* Active Icon - Tick */}
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ring-2 ${
                        idx === 0
                          ? "bg-yellow-400 ring-yellow-400 text-white" // First icon mango yellow
                          : "bg-blue-500 ring-blue-500 text-white" // Others blue
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:ml-6 md:w-2/3">
                    <h3
                      className={`text-xl font-semibold ${
                        idx === 0 ? "text-yellow-400" : "text-blue-500"
                      }`}
                    >
                      {title}
                    </h3>
                    <p className="text-muted-foreground mb-2 text-sm">{details}</p>
                    <p className="text-muted-foreground mb-2 text-sm leading-relaxed">{description}</p>
                  </div>

                  <div className="text-right md:w-1/3 md:text-right">
                    <p className="mb-1 text-sm font-medium">{period}</p>
                    <p className="text-muted-foreground text-sm">{company}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Experience5 };
