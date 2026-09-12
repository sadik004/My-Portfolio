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

    // অ্যানিমেশন শেষ হলে কালো পর্দাটি স্ক্রিন থেকে চিরতরে মুছে দেওয়ার টাইমার
    setIsFinished(false);
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 850);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(timer);
    };
  }, [pathname]);

  const { width, height } = dimensions;

  // ডেনিস স্নেলেনবার্গের কার্ভড পাথ
  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 250} 0 ${height} Z`;
  const targetPath = `M0 0 L${width} 0 L${width} 0 Q${width / 2} 0 0 0 Z`;

  return (
    <div className="relative">
      
      {/* অ্যানিমেশন চলাকালীন শুধু ওভারলেটি থাকবে, ৮৫০ms পর সম্পূর্ণ উধাও হয়ে যাবে */}
      {!isFinished && width > 0 && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          
          {/* ১. পেজের নাম */}
          <motion.p
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white font-mono text-3xl sm:text-5xl font-bold"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {routes[pathname] || "Sadik."}
          </motion.p>

          {/* ২. পর্দাটি উপরে উঠে ভ্যানিশ হবে */}
          <motion.svg 
            className="w-full h-full"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: "easeInOut", delay: 0.1 }}
          >
            <motion.path
              fill="#0d0d0f"
              initial={{ d: initialPath }}
              animate={{ d: targetPath }}
              transition={{ duration: 0.75, ease: "easeInOut", delay: 0.1 }}
            />
          </motion.svg>

        </div>
      )}

      {/* মূল পেজের কনটেন্ট (সবসময় পরিষ্কার ও আনব্লকড) */}
      {children}
    </div>
  );
}