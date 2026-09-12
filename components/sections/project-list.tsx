"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Behavioral Playwright",
    category: "Stealth Automation & Scraping",
    year: "2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Velora Luxury Store",
    category: "FastAPI & Next.js Fullstack",
    year: "2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "ML Diagnostic Classifier",
    category: "Machine Learning & PyTorch",
    year: "2026",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "OpenRouter AI Pipeline",
    category: "Python Automation & AI",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProjectList() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery-smooth spring physics
  const springX = useSpring(mouseX, { stiffness: 350, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 25 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6 relative">
      <div className="flex items-center justify-between mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
          (Selected Engineering Works)
        </p>
        <span className="text-xs font-mono text-neutral-400">
          04 Featured Projects
        </span>
      </div>

      {/* Project Rows */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            className="group flex items-center justify-between py-12 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 hover:px-4"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
              <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:-translate-x-2 flex items-center gap-3">
                {project.title}
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 hidden sm:inline" />
              </h3>
            </div>
            
            <div className="flex items-center gap-8 text-xs font-mono text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              <span className="hidden sm:inline">{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image Modal with Spring Physics */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: modal.active ? 1 : 0,
          opacity: modal.active ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed pointer-events-none z-50 w-72 h-80 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 hidden md:block"
      >
        <div 
          className="w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateY(-${modal.index * 100}%)` }}
        >
          {projects.map((item, idx) => (
            <div key={idx} className="w-full h-full relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}