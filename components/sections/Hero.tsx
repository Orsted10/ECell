"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Fire, Lightbulb, Cpu, Rocket, ShieldCheck, Sparkle, CalendarBlank } from "@phosphor-icons/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const PHASES = [
  { step: "01", label: "Ideate", desc: "Workshops & Mentorship", icon: Lightbulb },
  { step: "02", label: "Build", desc: "48h Ideathon & Prototyping", icon: Cpu },
  { step: "03", label: "Launch", desc: "Incubation & Investor Demo Day", icon: Rocket },
];

const ROTATING_WORDS = [
  { word: "believe you.", color: "#FF5500" },
  { word: "catch up.", color: "#00C6FF" },
  { word: "copy you.", color: "#FFB300" },
  { word: "fund you.", color: "#00E676" },
];

export default function Hero() {
  const [activePhase, setActivePhase] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  // Continuous rotating phrase timer
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Dynamic Continuous Ambient Fire Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "55vw",
          height: "55vw",
          background: "radial-gradient(circle, rgba(255, 77, 0, 0.22) 0%, rgba(0, 102, 255, 0.1) 55%, transparent 75%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Authentic Desktop Margin Floating HUD Cards */}
      {/* Left: Active Builders Pill */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-48 left-12 hidden xl:flex items-center gap-3"
        style={{
          background: "rgba(11, 14, 20, 0.82)",
          border: "1px solid rgba(255, 77, 0, 0.25)",
          borderRadius: "1rem",
          padding: "0.75rem 1.1rem",
          backdropFilter: "blur(20px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(255,77,0,0.12)",
          zIndex: 10,
        }}
      >
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#FF5500] text-white flex items-center justify-center font-bold text-xs border border-black">A</div>
          <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs border border-black">P</div>
          <div className="w-8 h-8 rounded-full bg-[#FFB300] text-white flex items-center justify-center font-bold text-xs border border-black">R</div>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            300+ Founders
          </div>
          <span className="text-[0.68rem] text-white/50 font-mono">CUUP COHORT 2026</span>
        </div>
      </motion.div>

      {/* Right: Upcoming Major Event Pill */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-48 right-12 hidden xl:flex items-center gap-3"
        style={{
          background: "rgba(11, 14, 20, 0.82)",
          border: "1px solid rgba(0, 102, 255, 0.3)",
          borderRadius: "1rem",
          padding: "0.75rem 1.1rem",
          backdropFilter: "blur(20px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,102,255,0.15)",
          zIndex: 10,
        }}
      >
        <div className="w-9 h-9 rounded-lg bg-[rgba(0,102,255,0.15)] border border-[#0066FF] text-[#00C6FF] flex items-center justify-center">
          <CalendarBlank size={20} weight="bold" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Ideathon 2026</span>
          <span className="text-[0.68rem] text-[#00C6FF] font-mono">NOV 15–17 · CUUP CAMPUS</span>
        </div>
      </motion.div>

      {/* Main Content Container (Centered Layout) */}
      <div
        className="container-wide"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "clamp(7rem, 12vh, 10.5rem)",
          paddingBottom: "clamp(2.5rem, 4vh, 4rem)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1150px", marginInline: "auto", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.75rem",
              width: "100%",
            }}
          >
            {/* Sleek Pre-headline Badge Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxWidth: "100%" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontSize: "clamp(0.68rem, 2.5vw, 0.85rem)",
                  fontWeight: 700,
                  letterSpacing: "clamp(0.06em, 1vw, 0.15em)",
                  textTransform: "uppercase",
                  color: "#FF5500",
                  border: "1px solid rgba(255, 85, 0, 0.35)",
                  borderRadius: "999px",
                  padding: "0.45rem 1rem",
                  background: "rgba(255, 85, 0, 0.12)",
                  boxShadow: "0 0 24px rgba(255, 85, 0, 0.2)",
                  fontFamily: "var(--font-mono)",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                <Fire size={16} color="#FF5500" weight="fill" className="animate-pulse flex-shrink-0" />
                <span>CHANDIGARH UNIVERSITY E-CELL // BUILD 2026</span>
              </div>
            </motion.div>

            {/* Continuous Live Animated Headline */}
            <h1
              className="display-1"
              style={{
                fontSize: "clamp(1.95rem, 6.5vw, 6.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                maxWidth: "100%",
                marginInline: "auto",
                wordBreak: "break-word",
              }}
            >
              <span style={{ color: "var(--text-1)" }}>Build before you&rsquo;re ready.</span>
              <br />
              <span style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: "0.25ch" }}>
                <span>Ship before they</span>
                {/* Dynamic Morphing Word Animation with Smooth Vertical Flip */}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    textAlign: "center",
                    verticalAlign: "bottom",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIdx}
                      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        display: "inline-block",
                        background: `linear-gradient(135deg, #FFF0E6 0%, ${ROTATING_WORDS[wordIdx].color} 60%, #FF2E00 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: `drop-shadow(0 0 20px ${ROTATING_WORDS[wordIdx].color}60)`,
                      }}
                    >
                      {ROTATING_WORDS[wordIdx].word}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                fontSize: "clamp(1rem, 3.2vw, 1.45rem)",
                lineHeight: 1.6,
                color: "#CBD5E0",
                maxWidth: "52ch",
                marginInline: "auto",
                fontWeight: 400,
              }}
            >
              Chandigarh University&rsquo;s entrepreneurship cell &mdash; where ideas get heat, pressure, mentors, and a runway. Not inspiration theater. Real ventures.
            </motion.p>

            {/* CTAs Centered */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                paddingTop: "0.25rem",
              }}
            >
              <MagneticButton>
                <a
                  href="#join"
                  id="hero-cta-primary"
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.85rem",
                    padding: "0.85rem 0.85rem 0.85rem 2rem",
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "clamp(0.9rem, 2.8vw, 1.15rem)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: "0 8px 32px rgba(255, 77, 0, 0.5)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseDown={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
                  }}
                  onMouseUp={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(255, 77, 0, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255, 77, 0, 0.5)";
                  }}
                >
                  JOIN THE FOUNDRY
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.25)",
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="group-hover:translate-x-1 group-hover:scale-105"
                  >
                    <ArrowRight size={18} weight="bold" />
                  </div>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#offerings"
                  id="hero-cta-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "1rem 2.25rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(0, 102, 255, 0.5)",
                    background: "rgba(0, 102, 255, 0.08)",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "clamp(0.9rem, 2.8vw, 1.15rem)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    boxShadow: "0 0 24px rgba(0, 102, 255, 0.2)",
                    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0, 102, 255, 0.22)";
                    (e.currentTarget as HTMLElement).style.borderColor = "#0066FF";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0, 102, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0, 102, 255, 0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 102, 255, 0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0, 102, 255, 0.2)";
                  }}
                >
                  EXPLORE ROADMAP
                </a>
              </MagneticButton>
            </motion.div>

            {/* Interactive Founder Lifecycle Pipeline Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-[800px] mt-4 p-3.5 rounded-[1.75rem] bg-[rgba(14,18,26,0.92)] border border-[#FF5500]/40 backdrop-blur-xl shadow-[0_0_35px_rgba(255,85,0,0.22)]"
            >
              {PHASES.map((phase, idx) => {
                const Icon = phase.icon;
                const isActive = activePhase === idx;
                return (
                  <button
                    key={phase.step}
                    onClick={() => setActivePhase(idx)}
                    onMouseEnter={() => setActivePhase(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      padding: "0.9rem 1.1rem",
                      borderRadius: "1.25rem",
                      border: isActive
                        ? "1.5px solid #FF5500"
                        : "1px solid rgba(255,255,255,0.12)",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(255, 85, 0, 0.28) 0%, rgba(255, 85, 0, 0.12) 100%)"
                        : "rgba(255,255,255,0.04)",
                      boxShadow: isActive ? "0 0 24px rgba(255, 85, 0, 0.4)" : "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: isActive ? "#FF5500" : "rgba(255,255,255,0.1)",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                        boxShadow: isActive ? "0 0 16px rgba(255, 85, 0, 0.6)" : "none",
                      }}
                    >
                      <Icon size={20} weight="bold" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "#FF5500", fontWeight: 800 }}>
                          {phase.step}
                        </span>
                        <span style={{ fontSize: "0.98rem", fontWeight: 800, color: "#FFFFFF", fontFamily: "var(--font-outfit)" }}>
                          {phase.label}
                        </span>
                      </div>
                      <span style={{ fontSize: "0.78rem", color: isActive ? "#E2E8F0" : "#CBD5E0", display: "block", marginTop: "0.15rem" }}>
                        {phase.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>

            {/* Bottom Highlight Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                paddingTop: "0.5rem",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#CBD5E0", fontFamily: "var(--font-mono)" }}>
                <ShieldCheck size={16} color="#FF5500" weight="bold" />
                <span>OPEN TO ALL CUUP STUDENTS</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#CBD5E0", fontFamily: "var(--font-mono)" }}>
                <Sparkle size={16} color="#00C6FF" weight="bold" />
                <span>LAUNCH: AUGUST 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
