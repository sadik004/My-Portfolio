"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDownLeft, ArrowLeft, Check, Copy } from "lucide-react";
import Magnetic from "@/components/motion/magnetic";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "moynulsadik75@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // সরাসরি ব্যবহারকারীর মেইল ক্লায়েন্টে সব ফিল্ড সাজিয়ে পাঠানো
    const subject = `Project Inquiry from ${formData.name} (${formData.organization || "Individual"})`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nServices Needed: ${formData.services}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#141517] text-[#e9e9ea] font-sans pt-12 pb-24 selection:bg-white selection:text-black">
      
      {/* Top Back Navigation */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 flex justify-between items-center mb-16">
        <Magnetic>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Magnetic>

        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          © Md. Moynul Hasan Sadik
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            
            {/* Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-16">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05]">
                Let&apos;s start a <br />
                <span className="font-semibold text-white">project</span> <br />
                together
              </h1>

              {/* Monogram Avatar */}
              <div className="relative self-start sm:self-center">
                <div className="w-24 h-24 rounded-full border border-white/20 bg-neutral-800 shadow-2xl flex items-center justify-center text-3xl font-black text-white">
                  S
                </div>
                <ArrowDownLeft className="w-6 h-6 text-neutral-400 absolute -bottom-8 -left-4" />
              </div>
            </div>

            {/* Dennis Snellenberg Form */}
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* 01 */}
              <div className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-xs font-mono text-neutral-500">01</span>
                  <label className="text-lg sm:text-2xl font-normal text-neutral-200">
                    What&apos;s your name?
                  </label>
                </div>
                <input 
                  type="text"
                  required
                  placeholder="John Doe *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent pl-12 pr-4 py-3 text-base sm:text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:placeholder:text-neutral-400 transition-colors"
                />
              </div>

              {/* 02 */}
              <div className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-xs font-mono text-neutral-500">02</span>
                  <label className="text-lg sm:text-2xl font-normal text-neutral-200">
                    What&apos;s your email?
                  </label>
                </div>
                <input 
                  type="email"
                  required
                  placeholder="john@doe.com *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent pl-12 pr-4 py-3 text-base sm:text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:placeholder:text-neutral-400 transition-colors"
                />
              </div>

              {/* 03 */}
              <div className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-xs font-mono text-neutral-500">03</span>
                  <label className="text-lg sm:text-2xl font-normal text-neutral-200">
                    What&apos;s the name of your organization?
                  </label>
                </div>
                <input 
                  type="text"
                  placeholder="Company / Agency ®"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  className="w-full bg-transparent pl-12 pr-4 py-3 text-base sm:text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:placeholder:text-neutral-400 transition-colors"
                />
              </div>

              {/* 04 */}
              <div className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-xs font-mono text-neutral-500">04</span>
                  <label className="text-lg sm:text-2xl font-normal text-neutral-200">
                    What services are you looking for?
                  </label>
                </div>
                <input 
                  type="text"
                  placeholder="Python Automation, FastAPI Backend, Interactive Frontend ..."
                  value={formData.services}
                  onChange={(e) => setFormData({...formData, services: e.target.value})}
                  className="w-full bg-transparent pl-12 pr-4 py-3 text-base sm:text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:placeholder:text-neutral-400 transition-colors"
                />
              </div>

              {/* 05 */}
              <div className="border-t border-white/15 pt-8">
                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-xs font-mono text-neutral-500">05</span>
                  <label className="text-lg sm:text-2xl font-normal text-neutral-200">
                    Your message
                  </label>
                </div>
                <textarea 
                  rows={3}
                  required
                  placeholder="Hello Sadik, can you help me with ... *"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent pl-12 pr-4 py-3 text-base sm:text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:placeholder:text-neutral-400 transition-colors resize-none"
                />
              </div>

              {/* Blue Magnetic Button */}
              <div className="pt-10 flex justify-end border-t border-white/15">
                <Magnetic>
                  <button
                    type="submit"
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#455ce9] hover:bg-[#354cd8] text-white flex flex-col items-center justify-center font-semibold text-base shadow-2xl hover:scale-105 transition-all cursor-pointer"
                  >
                    {submitted ? (
                      <span className="flex items-center gap-1.5 text-sm">
                        <Check className="w-4 h-4 text-emerald-300" /> Opening Mail...
                      </span>
                    ) : (
                      <span>Send it!</span>
                    )}
                  </button>
                </Magnetic>
              </div>

            </form>

          </div>

          {/* Right Column: Real Contact Details */}
          <div className="lg:col-span-4 lg:pt-36 space-y-12 text-xs font-mono text-neutral-400">
            
            {/* Contact Details */}
            <div>
              <h4 className="uppercase tracking-widest text-neutral-500 mb-3">
                Contact Details
              </h4>
              <p className="text-sm text-neutral-200 hover:text-white transition-colors">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <button 
                onClick={handleCopy}
                className="mt-2 inline-flex items-center gap-1.5 text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied!" : "Click to copy email"}</span>
              </button>
              <p className="mt-2 text-neutral-400">Dhaka, Bangladesh</p>
            </div>

            {/* University */}
            <div>
              <h4 className="uppercase tracking-widest text-neutral-500 mb-3">
                University & Status
              </h4>
              <p className="text-neutral-200">University of Liberal Arts Bangladesh</p>
              <p className="text-neutral-400">Department of Engineering</p>
              <p className="text-emerald-400 mt-1">● Available for Work (Remote)</p>
            </div>

            {/* Socials with Real URLs */}
            <div>
              <h4 className="uppercase tracking-widest text-neutral-500 mb-3">
                Socials
              </h4>
              <div className="space-y-2.5">
                <p>
                  <a href="https://www.linkedin.com/in/md-moynul-hasan-sadik-bba223349/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LinkedIn ↗
                  </a>
                </p>
                <p>
                  <a href="https://github.com/sadik004" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub ↗
                  </a>
                </p>
                <p>
                  <a href="https://x.com/sadik_moynul" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    X (Twitter) ↗
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/moynul._.sadik" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram ↗
                  </a>
                </p>
                <p>
                  <a href="https://www.facebook.com/moynulsadik15" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Facebook ↗
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}