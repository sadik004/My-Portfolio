"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Magnetic from "@/components/motion/magnetic";

interface Project {
  title: string;
  category: string;
  tag: string;
  year: string;
  image: string;
  link: string;
}

const allProjects: Project[] = [
  {
    title: "Behavioral Playwright",
    category: "Stealth Automation & Scraping",
    tag: "Automation",
    year: "2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/sadik004/behavioral-playwright",
  },
  {
    title: "Velora Luxury Store",
    category: "FastAPI & Next.js Fullstack",
    tag: "Fullstack",
    year: "2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/sadik004",
  },
  {
    title: "ML Diagnostic Classifier",
    category: "Machine Learning & PyTorch",
    tag: "AI & ML",
    year: "2026",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/sadik004",
  },
  {
    title: "OpenRouter AI Pipeline",
    category: "Python Automation & AI",
    tag: "Automation",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/sadik004",
  },
  {
    title: "Nike Store Sneaker Concept",
    category: "Creative Engineering & 3D",
    tag: "Fullstack",
    year: "2026",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/sadik004",
  },
];

const categories = ["All", "Automation", "Fullstack", "AI & ML"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState({ active: false, index: 0 });

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.tag === activeCategory);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0e0e10] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white pt-28">
      <Navbar />

      {/* Hero Title */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
          Creating next level <br />
          <span className="text-neutral-400 dark:text-neutral-500 font-normal">
            digital systems.
          </span>
        </h1>

        {/* Category Filters */}
        <div className="mt-16 flex flex-wrap items-center gap-3">
          {categories.map((cat, idx) => (
            <Magnetic key={idx}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-bold shadow-lg"
                    : "border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-500"
                }`}
              >
                {cat}
              </button>
            </Magnetic>
          ))}
        </div>
      </section>

      {/* Project Archive List */}
      <section className="max-w-6xl mx-auto px-6 pb-28 relative">
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          {filteredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              className="group flex items-center justify-between py-12 border-b border-neutral-200 dark:border-neutral-800 cursor-pointer transition-all duration-300 hover:px-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-neutral-400">
                  0{index + 1}
                </span>
                <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white transition-transform duration-300 group-hover:-translate-x-2 flex items-center gap-3">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500 hidden sm:inline" />
                </h3>
              </div>
              
              <div className="flex items-center gap-8 text-xs font-mono text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                <span className="hidden sm:inline">{project.category}</span>
                <span>{project.year}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Floating Modal Cursor */}
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
            {filteredProjects.map((item, idx) => (
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

      <Footer />
    </main>
  );
}