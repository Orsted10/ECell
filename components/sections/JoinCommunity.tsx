"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkle, CheckCircle } from "@phosphor-icons/react";

const ROLES = ["Founders", "Engineers", "Designers", "Hackers", "Strategists", "Innovators"];

export default function JoinCommunity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-[#030712] py-28 sm:py-36 text-center"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Ambient Spotlight Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[800px] h-[70vw] max-h-[800px] opacity-25 blur-[150px] bg-gradient-to-r from-[#98FF03] via-[#FF5500] to-[#00F0FF] pointer-events-none z-0" />

      <div className="container-wide relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto">
        {/* Floating Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="badge-agencyio badge-agencyio-lime"
        >
          <Sparkle size={16} weight="fill" className="text-[#98FF03] animate-pulse" />
          <span>JOIN THE LAUNCHPAD // COHORT 2026</span>
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-outfit text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl"
        >
          Ready to build your venture alongside future{" "}
          <span className="block mt-3 relative inline-flex justify-center items-center overflow-hidden min-w-[280px] h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[index]}
                initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -35, filter: "blur(10px)" }}
                transition={{ duration: 0.45 }}
                className="absolute text-transparent bg-clip-text bg-gradient-to-r from-[#98FF03] via-[#B2FF43] to-[#FF5500]"
              >
                {ROLES[index]}?
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h2>

        <p className="font-outfit text-lg sm:text-2xl font-bold text-slate-300 max-w-2xl leading-relaxed">
          Applications for Cohort-1 are officially open. Connect with mentors, access maker resources, and launch your startup.
        </p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-outfit text-xl font-black text-black bg-[#98FF03] hover:bg-[#B2FF43] transition-all duration-300 shadow-[0_0_40px_rgba(152,255,3,0.5)] hover:scale-105 active:scale-95"
          >
            APPLY FOR COHORT-1 <ArrowRight size={22} weight="bold" />
          </a>
        </motion.div>

        {/* Feature Checkmarks */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-slate-300 font-outfit text-sm font-bold">
          <div className="flex items-center gap-2">
            <CheckCircle size={18} weight="fill" className="text-[#98FF03]" />
            <span>100% Free Incubation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} weight="fill" className="text-[#98FF03]" />
            <span>No Equity Taken</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={18} weight="fill" className="text-[#98FF03]" />
            <span>20+ VC Network</span>
          </div>
        </div>
      </div>
    </section>
  );
}
