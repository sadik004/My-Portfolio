"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const words = [
  { text: "Hello", duration: 160 },
  { text: "Bonjour", duration: 160 },
  { text: "Ciao", duration: 160 },
  { text: "Olà", duration: 160 },
  { text: "やあ", duration: 160 },
  { text: "Hallå", duration: 160 },
  { text: "Guten Tag", duration: 160 },
  { text: "হ্যালো বাংলাদেশ", duration: 800 },
  { text: "Hello World", duration: 1000 },
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // ১ম বার সাইটে ঢুকলে চলবে, ব্যাক টু হোম আসলে আর চলবে না
    const hasSeenPreloader = sessionStorage.getItem("portfolio_preloader_seen");
    if (hasSeenPreloader) {
      return;
    }

    // ১ম বার প্রবেশ: লোডার চালু এবং সেশনে সেভ
    sessionStorage.setItem("portfolio_preloader_seen", "true");
    const frameId = requestAnimationFrame(() => {
      setIsLoading(true);
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    if (index >= words.length - 1) {
      const finalTimeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
      }, words[index].duration);
      return () => clearTimeout(finalTimeout);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, words[index].duration);

    return () => clearTimeout(timer);
  }, [index, isLoading]);

  const { width } = dimension;
  const initialPath = `M0 0 L${width} 0 Q${width / 2} 320 0 0 Z`;
  const targetPath = `M0 0 L${width} 0 Q${width / 2} 0 0 0 Z`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 1.4,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const slideUpVariants: Variants = {
    initial: {
      y: "0%",
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 1.4,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUpVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-x-0 top-0 h-screen z-[9999] flex items-center justify-center bg-[#141517] cursor-wait select-none"
        >
          {dimension.width > 0 && (
            <>
              {/* Word Display with glowing Dennis Snellenberg bullet */}
              <div className="z-10 flex items-center gap-3 sm:gap-4 px-6 text-center">
                <span className="inline-block w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white animate-pulse" />
                <motion.p
                  key={words[index].text}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.18 }}
                  className="text-white text-3xl sm:text-5xl md:text-6xl font-light tracking-tight"
                >
                  {words[index].text}
                </motion.p>
              </div>

              {/* Dennis Snellenberg Elastic Curved Arc hanging from bottom */}
              <svg
                viewBox={`0 0 ${width} 320`}
                className="absolute top-[99.5%] left-0 w-full h-[180px] sm:h-[260px] md:h-[320px] pointer-events-none fill-[#141517] overflow-visible"
              >
                <motion.path
                  variants={curveVariants}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
