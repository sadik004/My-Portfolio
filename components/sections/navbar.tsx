"use client";

import React from "react";
import Link from "next/link";
import Magnetic from "@/components/motion/magnetic";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-black/5 dark:shadow-black/20 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
        
        {/* Brand / Logo */}
        <Magnetic>
          <Link 
            href="/" 
            className="font-bold text-neutral-900 dark:text-white hover:opacity-75 transition-opacity"
          >
            Sadik<span className="text-emerald-500">.</span>
          </Link>
        </Magnetic>

        <span className="text-neutral-300 dark:text-neutral-700 select-none">•</span>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          
          {/* Work Page */}
          <Magnetic>
            <Link 
              href="/work" 
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Work
            </Link>
          </Magnetic>

          {/* About Page */}
          <Magnetic>
            <Link 
              href="/about" 
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              About
            </Link>
          </Magnetic>

          {/* Contact Page */}
          <Magnetic>
            <Link 
              href="/contact" 
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </Magnetic>

        </div>

      </nav>
    </header>
  );
}