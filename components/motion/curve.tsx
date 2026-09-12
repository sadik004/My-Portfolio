"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/work": "Work",
  "/contact": "Contact",
};

export default function Curve({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);

    // অ্যানিমেশন মসৃণভাবে শেষ হওয়ার টাইমার (১৩৫০ms)
    const frameId = requestAnimationFrame(() => {
      setIsFinished(false);
    });
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 1350);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      clearTimeout(timer);
    };
  }, [pathname]);

  const { width, height } = dimensions;

  // ডেনিস স্নেলেনবার্গ সিগনেচার কার্ভড আর্চ
  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 280} 0 ${height} Z`;
  const targetPath = `M0 0 L${width} 0 L${width} 0 Q${width / 2} 0 0 0 Z`;

  return (
    <div className="relative">
      
      {/* অ্যানিমেশন চলাকালীন ওভারলেটি থাকবে, তারপর স্মুথভাবে উধাও হয়ে যাবে */}
      {!isFinished && width > 0 && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          
          {/* ১. পেজের নাম (Work, About, Contact) - যাতে সুন্দরভাবে পড়ার সময় পাওয়া যায় */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center gap-3 text-white font-medium text-3xl sm:text-5xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -35] }}
            transition={{ 
              duration: 1.1, 
              times: [0, 0.25, 0.65, 1],
              ease: [0.76, 0, 0.24, 1] as const 
            }}
          >
            <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
            <span>{routes[pathname] || "Sadik."}</span>
          </motion.div>

          {/* ২. কার্ভড পর্দাটি মসৃণ ও ধীরেসুস্থে উপরে উঠবে */}
          <motion.svg 
            className="w-full h-full"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: 1.15, 
              ease: [0.76, 0, 0.24, 1] as const, 
              delay: 0.2 
            }}
          >
            <motion.path
              fill="#0d0d0f"
              initial={{ d: initialPath }}
              animate={{ d: targetPath }}
              transition={{ 
                duration: 1.15, 
                ease: [0.76, 0, 0.24, 1] as const, 
                delay: 0.2 
              }}
            />
          </motion.svg>

        </div>
      )}

      {/* মূল পেজের কনটেন্ট (সবসময় পরিষ্কার ও আনব্লকড) */}
      {children}
    </div>
  );
}