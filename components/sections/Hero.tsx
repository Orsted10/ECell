"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Fire, Lightbulb, Cpu, Rocket, ShieldCheck, Sparkle, CalendarBlank, CheckCircle, Users } from "@phosphor-icons/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ROTATING_WORDS = [
  { word: "venture founders.", color: "#98FF03" },
  { word: "market leaders.", color: "#FF5500" },
  { word: "breakout startups.", color: "#00F0FF" },
  { word: "industry icons.", color: "#A855F7" },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-[100vh] flex flex-col justify-center items-center overflow-hidden pt-32 sm:pt-40 pb-16 bg-[#030712]"
    >
      {/* AgencyIO Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] max-w-[850px] h-[55vw] max-h-[650px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(152, 255, 3, 0.25) 0%, rgba(255, 85, 0, 0.15) 50%, transparent 75%)",
          filter: "blur(130px)",
        }}
      />

      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        {/* AgencyIO Floating Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge-agencyio badge-agencyio-lime mb-8 shadow-[0_0_25px_rgba(152,255,3,0.3)]"
        >
          <Sparkle size={16} weight="fill" className="animate-spin text-[#98FF03]" />
          <span>CUUP VENTURE LAUNCHPAD // 2026</span>
        </motion.div>

        {/* Display Title with Rotating Word Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-outfit text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] font-black text-white tracking-tight leading-[1.02] max-w-6xl drop-shadow-2xl"
        >
          Transforming student builders into{" "}
          <span className="block mt-2 h-[1.25em] relative inline-flex justify-center items-center overflow-hidden min-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING_WORDS[wordIdx].word}
                initial={{ y: 50, opacity: 0, rotateX: -45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 45 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${ROTATING_WORDS[wordIdx].color} 0%, #FFFFFF 100%)`,
                  filter: `drop-shadow(0 0 35px ${ROTATING_WORDS[wordIdx].color}60)`,
                }}
              >
                {ROTATING_WORDS[wordIdx].word}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 font-outfit text-lg sm:text-2xl font-bold text-slate-300 max-w-3xl leading-relaxed"
        >
          E-Cell Chandigarh University UP is the premiere 0-to-1 launchpad empowering ambitious engineers, creators, and hackers to build scalable companies.
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <MagneticButton>
            <a
              href="#join"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-outfit text-lg font-black text-black bg-[#98FF03] hover:bg-[#B2FF43] transition-all duration-300 shadow-[0_0_35px_rgba(152,255,3,0.5)] hover:scale-105 active:scale-95"
            >
              APPLY TO LAUNCHPAD <ArrowRight size={20} weight="bold" />
            </a>
          </MagneticButton>

          <a
            href="#offerings"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-outfit text-lg font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105"
          >
            EXPLORE TRACKS
          </a>
        </motion.div>

        {/* AgencyIO Floating Stat Capsule Dock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl"
        >
          {[
            { label: "LAUNCHPAD TRACKS", val: "7 ACTIVE", sub: "End-to-End Execution" },
            { label: "FOUNDER COMMUNITY", val: "300+", sub: "Campus Engineers" },
            { label: "EQUITY GRANTED", val: "100% FREE", sub: "Zero Founder Take" },
            { label: "VC & MENTOR NETWORK", val: "20+ ANGELS", sub: "Top VC Partners" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#06080D]/90 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center gap-2 hover:border-[#98FF03]/50 transition-colors group"
            >
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#98FF03]">
                {stat.label}
              </span>
              <span className="font-outfit text-2xl sm:text-3xl font-black text-white group-hover:text-[#98FF03] transition-colors">
                {stat.val}
              </span>
              <span className="font-outfit text-xs font-bold text-slate-400">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
