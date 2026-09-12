"use client";

import React from "react";
import { Bot, Brain, Database, GraduationCap, Layout } from "lucide-react";

export default function About() {
  const stack = [
    {
      category: "Backend & Systems",
      icon: <Database className="w-4 h-4 text-emerald-500" />,
      skills: ["Python", "FastAPI", "PostgreSQL", "SQLModel", "REST APIs", "JWT Auth"],
    },
    {
      category: "Automation & Scraping",
      icon: <Bot className="w-4 h-4 text-amber-500" />,
      skills: ["Playwright", "Web Scraping", "Stealth Automation", "Data Pipelines", "BeautifulSoup"],
    },
    {
      category: "Machine Learning & Data",
      icon: <Brain className="w-4 h-4 text-blue-500" />,
      skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Scikit-learn", "PyTorch"],
    },
    {
      category: "Modern Frontend & Motion",
      icon: <Layout className="w-4 h-4 text-violet-500" />,
      skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    },
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 border-b border-neutral-200 dark:border-neutral-800">
      
      {/* Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        
        {/* Left Bio Meta */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono block">
            (About & Background)
          </span>

          <div className="p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>University of Liberal Arts Bangladesh</span>
            </div>
            <p className="text-[11px] font-mono text-neutral-500 pl-6">
              Engineering Degree • 2024 — 2029
            </p>
          </div>
        </div>

        {/* Right Philosophy (From LinkedIn About) */}
        <div className="lg:col-span-8">
          <p className="text-2xl sm:text-4xl font-normal leading-snug tracking-tight text-neutral-800 dark:text-neutral-200">
            I build{" "}
            <span className="font-semibold text-neutral-950 dark:text-white underline decoration-emerald-500/40 underline-offset-8">
              Python-powered automation, backend, and AI solutions
            </span>{" "}
            for real-world problems. 
          </p>
          <p className="mt-6 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
            My engineering focus centers on high-throughput web automation, anti-bot stealth scraping, robust FastAPI services, and training predictive machine learning models—bridged with award-winning frontend interactions.
          </p>
        </div>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
        {stack.map((group, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                {group.icon}
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
                  {group.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}