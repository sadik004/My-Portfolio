"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  text?: string;
}

export default function Marquee({ 
  text = "Design Engineer — Fullstack Architect — Stealth Automation — Creative Developer — " 
}: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/30 select-none">
      <div className="flex whitespace-nowrap">
        {/* Infinite Running Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18,
          }}
          className="flex whitespace-nowrap"
        >
          <span className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-800 dark:text-neutral-200 pr-8">
            {text}
          </span>
          <span className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-800 dark:text-neutral-200 pr-8">
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
}