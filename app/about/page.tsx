"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Magnetic from "@/components/motion/magnetic";
import { ArrowDownRight } from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      number: "01",
      title: "Automation & Stealth Scraping",
      description:
        "Building resilient bot pipelines with Python and Playwright. Specialized in bypassing enterprise bot protection, fingerprint spoofing, and automated dataset mining at scale.",
    },
    {
      number: "02",
      title: "Scalable Backend & APIs",
      description:
        "Architecting production-ready backend services using FastAPI, SQLModel, and PostgreSQL. Strict schema validation, JWT auth pipelines, and clean database migrations.",
    },
    {
      number: "03",
      title: "Bespoke Frontend & Motion",
      description:
        "Crafting fluid, award-winning web interfaces with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Physics-based spring animations with strict engineering standards.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0e0e10] text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white pt-28">
      <Navbar />

      {/* Hero Statement */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] max-w-4xl">
          Helping brands & products{" "}
          <span className="text-neutral-400 dark:text-neutral-500 font-normal">
            thrive in the digital world.
          </span>
        </h1>
      </section>

      {/* Main Narrative & Real Profile Image */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Story on Left */}
          <div className="lg:col-span-7 space-y-8 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
            <p>
              I am <span className="font-bold text-neutral-950 dark:text-white">Md. Moynul Hasan Sadik</span>, a Python & FastAPI Engineer and Design Engineer currently pursuing my Engineering degree at the{" "}
              <span className="font-semibold text-neutral-900 dark:text-neutral-100 underline decoration-emerald-500/50 underline-offset-4">
                University of Liberal Arts Bangladesh (ULAB)
              </span>.
            </p>
            <p>
              I bridge the gap between heavy computational backend systems and silky smooth user interfaces. Whether training machine learning models, automating complex browser behaviors to evade detection, or sculpting custom micro-interactions, I treat code as both architecture and craftsmanship.
            </p>
            <p className="text-base text-neutral-500 dark:text-neutral-400">
              Based in Dhaka, Bangladesh, I work with clients and teams worldwide seeking high reliability, robust API architecture, and bespoke digital experiences.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-mono uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold hover:opacity-90 transition-opacity"
                >
                  Start a project
                  <ArrowDownRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Real Photo on Right (public/profile.png) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl group bg-neutral-100 dark:bg-neutral-900">
              <img
                src="/profile.png"
                alt="Md. Moynul Hasan Sadik"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/20 text-xs font-mono flex items-center justify-between">
                <span className="font-semibold">Sadik • ULAB</span>
                <span className="text-emerald-500 font-bold">Available 2026</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dennis Snellenberg Signature: "I can help you with..." */}
      <section className="max-w-6xl mx-auto px-6 py-28 border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-16">
          (I can help you with ...)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((item, index) => (
            <div key={index} className="border-t border-neutral-200 dark:border-neutral-800 pt-8 space-y-4">
              <span className="text-xs font-mono text-neutral-400">{item.number}</span>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Footer */}
      <Footer />
    </main>
  );
}