"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      {/* 1. Status Indicator */}
      <div className="flex items-center gap-2.5 mb-8">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
          Available for Select Projects • Dhaka, BD
        </span>
      </div>

      {/* 2. Bold Typography */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.02] text-neutral-900 dark:text-neutral-50">
        Design Engineer & <br />
        <span className="text-neutral-400 dark:text-neutral-500 font-normal">
          Fullstack Architect.
        </span>
      </h1>

      {/* 3. Subtitle */}
      <p className="mt-8 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
        Crafting high-performance web systems, bespoke interactive interfaces, and stealth automation tools.
      </p>

      {/* 4. Magnetic Buttons */}
      <div className="mt-12 flex flex-wrap items-center gap-6">
        
        {/* Primary Button */}
        <Magnetic>
          <Link 
            href="mailto:tonmoytarchera@gmail.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-8 py-6 text-sm font-semibold shadow-xl cursor-pointer bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 transition-colors"
            )}
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </Link>
        </Magnetic>

        {/* Secondary Outline Button */}
        <Magnetic>
          <Link 
            href="#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 py-6 text-sm font-semibold border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
            )}
          >
            View Works
          </Link>
        </Magnetic>

      </div>
    </section>
  );
}