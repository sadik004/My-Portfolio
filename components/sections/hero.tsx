"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/motion/magnetic";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/profile.png");

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0c] flex flex-col justify-between select-none">
      
      {/* ১. ফুল-ব্লিড হাই-কোয়ালিটি ছবি (কোনো বিকৃতি ছাড়া পুরো ক্যানভাসে) */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-full pointer-events-none z-0">
        <img
          src={imgSrc}
          onError={() => setImgSrc("/profile.jpg")}
          alt="Md. Moynul Hasan Sadik"
          className="w-full h-full object-cover object-top lg:object-center filter contrast-[1.03]"
        />
        {/* লেখার সাথে মসৃণভাবে মিশে যাওয়ার বিলাসবহুল গ্রেডিয়েন্ট ব্লেন্ড */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 lg:via-[#fafafa]/40 to-transparent dark:from-[#0a0a0c] dark:via-[#0a0a0c]/80 lg:dark:via-[#0a0a0c]/40 dark:to-transparent" />
      </div>

      {/* ২. টপ স্ট্যাটাস বার */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pt-28 flex items-center justify-between">
        <div className="flex items-center gap-2.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
            Open to Work • Dhaka, BD (Remote Friendly)
          </span>
        </div>

        <span className="hidden md:inline text-xs font-mono uppercase tracking-widest text-neutral-500 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-neutral-200/40 dark:border-neutral-800/40">
          Design Engineer & Fullstack
        </span>
      </div>

      {/* ৩. মূল কন্টেন্ট (নাম, বায়ো ও ম্যাগনেটিক বাটন) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 my-auto py-6">
        <div className="max-w-2xl space-y-8">
          
          {/* বড় রাজকীয় নাম */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.96] text-neutral-900 dark:text-neutral-50 drop-shadow-sm">
            Md. Moynul <br />
            <span className="text-neutral-400 dark:text-neutral-500 font-normal">
              Hasan Sadik.
            </span>
          </h1>

          {/* আপনার লিঙ্কডইনের আসল বায়ো */}
          <p className="text-lg sm:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal max-w-xl">
            Python & FastAPI Engineer specializing in high-resilience web automation, 
            stealth scraping architectures, machine learning, and bespoke interactive frontends.
          </p>

          {/* ম্যাগনেটিক বাটনসমূহ */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <Magnetic>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-9 py-5 text-sm font-semibold shadow-2xl cursor-pointer bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 ml-0.5" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link 
                href="/work"
                className="inline-flex items-center rounded-full px-9 py-5 text-sm font-semibold border border-neutral-300/90 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md hover:bg-white dark:hover:bg-neutral-900 transition-all cursor-pointer text-neutral-900 dark:text-neutral-100 shadow-sm"
              >
                View Selected Works
              </Link>
            </Magnetic>
          </div>

        </div>
      </div>

      {/* ৪. বটম এডিটরিয়াল বার */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 pb-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-500 border-t border-neutral-200/40 dark:border-neutral-800/40 pt-4">
        <span>Dhaka, Bangladesh</span>
        <span className="hidden sm:inline">Scroll to Explore ↓</span>
      </div>

    </section>
  );
}