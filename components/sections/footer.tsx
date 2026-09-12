"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "@/components/motion/magnetic";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState("");

  // ১. বাটন ইন্টারঅ্যাকশন স্টেট
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // ২. স্ক্রল ট্র্যাকিং (Dennis Snellenberg Scroll Physics)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scrollStart = 0;
  const scrollEnd = 1;
  const fullScroll = [scrollStart, scrollEnd];

  // ৩. ডেনিস স্নেলেনবার্গ লাইভ মোশন কার্ভ (১৩০ পিক্সেল আর্চ থেকে স্ক্রলে ফ্ল্যাট ০ পিক্সেল হবে)
  const curveHeight = useTransform(scrollYProgress, [0, 0.7], [130, 0]);

  // ৪. টেক্সট ও বাটনের প্যারাল্যাক্স মোশন
  const textY = useTransform(scrollYProgress, fullScroll, [-80, 0]);
  const buttonParallaxY = useTransform(scrollYProgress, fullScroll, [70, -20]);
  const arrowRotate = useTransform(scrollYProgress, [0.2, 0.9], [0, 45]);

  // ৫. ঢাকার লাইভ ঘড়ি (GMT+6)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // ইমেইল কপি ফাংশন
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("moynulsadik75@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/tonmoytarchera" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "X (Twitter)", href: "https://twitter.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
  ];

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#141516] text-[#fafafa] flex flex-col justify-between pt-0 pb-8"
    >
      {/* ---------------------------------------------------- */}
      {/* ১. ডেনিস স্নেলেনবার্গ মোশন কার্ভ (Dennis Snellenberg SVG Curve) */}
      {/* ---------------------------------------------------- */}
      <motion.div
        style={{ height: curveHeight }}
        className="relative w-full overflow-hidden bg-[#141516] pointer-events-none -mt-[1px]"
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-full fill-white dark:fill-[#0a0a0c]"
          style={{
            fill: "var(--background, #fafafa)",
            filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.45))",
          }}
        >
          {/* এই পাথটি স্ক্রিনশটের মতো নিখুঁত ধনুকের মতো কার্ভ তৈরি করে */}
          <path d="M0,0 L1440,0 Q720,200 0,0 Z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 pt-12 sm:pt-20 flex-1 flex flex-col justify-between">
        {/* ---------------------------------------------------- */}
        {/* ২. হেডলাইন ও সাদা গোল বাটন এরিয়া */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* বামপাশের টেক্সট মোশন (Parallax & Mask Reveal) */}
          <motion.div style={{ y: textY }} className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-sm text-neutral-300">
                S
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Let&apos;s create something remarkable
              </span>
            </div>

            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-light tracking-tight leading-[0.95] text-white">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  Let&apos;s work
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="block italic font-normal text-neutral-300"
                >
                  together.
                </motion.span>
              </span>
            </h2>

            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-all text-sm font-mono tracking-wide group cursor-pointer shadow-lg"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                )}
                <span>moynulsadik75@gmail.com</span>
                {copied && (
                  <span className="text-[11px] text-emerald-400 font-sans font-medium pl-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* ডানপাশের গোল বাটন (সাদা থাকবে, হোভার/ক্লিক করলে পানি ভরবে) */}
          <motion.div 
            style={{ y: buttonParallaxY }}
            className="lg:col-span-4 flex justify-start lg:justify-end"
          >
            <Magnetic>
              <Link
                href="/contact"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsClicked(true)}
                className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-white overflow-hidden flex flex-col items-center justify-center group cursor-pointer shadow-2xl transition-transform duration-300 active:scale-95 select-none"
              >
                {/* 🌊 পানি ভরার মতো লিকুইড লেয়ার */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered || isClicked ? "0%" : "100%" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#334BD3] rounded-full pointer-events-none"
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                  <span
                    className={`text-base sm:text-lg font-serif tracking-tight font-medium transition-colors duration-300 ${
                      isHovered || isClicked ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    Get in touch
                  </span>
                  
                  <motion.div style={{ rotate: arrowRotate }} className="mt-2">
                    <ArrowUpRight
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHovered || isClicked
                          ? "text-white translate-x-1 -translate-y-1"
                          : "text-neutral-950"
                      }`}
                    />
                  </motion.div>
                </div>
              </Link>
            </Magnetic>
          </motion.div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* ৩. বটম বার (ঢাকার রিয়েলটাইম ঘড়ি + সোশ্যাল লিঙ্ক) */}
        {/* ---------------------------------------------------- */}
        <div className="pt-20 pb-4 border-t border-neutral-800/80 mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wider">
              Dhaka, BD — {timeString || "4:49:28 PM GMT+6"}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {socials.map((item) => (
              <Magnetic key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </Magnetic>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}