"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkle, Rocket } from "@phosphor-icons/react";
import { staggerContainer, fadeUp, scaleIn } from "@/components/motion/variants";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const STATS = [
  { value: "200+", label: "Active Student Builders", sub: "Collaborating across campus" },
  { value: "40+", label: "Startups Launched", sub: "From ideation to MVP" },
  { value: "12+", label: "Industry Mentors", sub: "Guiding every cohort" },
];

const STAGES = [
  {
    number: "01",
    label: "Ideate",
    tagline: "Workshops & Mentorship",
    desc: "Transform raw curiosity into validated venture concepts with 1-on-1 guidance from experienced founders.",
    tag: "DISCOVERY",
    status: "active",
  },
  {
    number: "02",
    label: "Build",
    tagline: "48h Ideathon & Prototyping",
    desc: "Access maker labs, dev grants, and peer engineering networks to turn your blueprint into a production MVP.",
    tag: "PROTOTYPE",
    status: "featured",
  },
  {
    number: "03",
    label: "Launch",
    tagline: "Incubation & Demo Day",
    desc: "Pitch live at Demo Day before angels and VCs. Secure early backing and onboard your first 1,000 users.",
    tag: "SCALE",
    status: "upcoming",
  },
];

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#06070A] py-28 md:py-40"
      ref={containerRef}
    >
      {/* Background Orbs & Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,85,0,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,102,255,0.04) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container-wide relative z-10">

        {/* Top Spacer to separate from ticker above */}
        <div style={{ height: "8rem" }} />

        {/* ─── SECTION HEADER (Aligned 1:1 with Baseplate Container) ─────── */}
        <div className="relative mx-auto max-w-7xl w-full flex flex-col items-center justify-center text-center px-4 md:px-8">
          {/* Radial Spotlight Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[#FF5500]/[0.15] blur-[140px] rounded-full pointer-events-none" />

          {/* Eyebrow */}
          <div className="mb-8 inline-flex justify-center relative z-10 mx-auto">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[#FF5500]/40 bg-[#FF5500]/[0.12] px-5 py-2 backdrop-blur-md shadow-[0_0_25px_rgba(255,85,0,0.25)]">
              <Sparkle size={14} weight="fill" className="text-[#FF5500] animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#FF5500]">
                Our Vision
              </span>
            </span>
          </div>

          {/* Headline — 100% Symmetrical Centered 2-Line Block */}
          <h2 className="relative z-10 font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-8 text-center drop-shadow-lg max-w-4xl mx-auto">
            We build the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF7733] to-[#FF3300]">
              founders
            </span>
            <br className="hidden sm:inline" />
            who build the world.
          </h2>

          {/* Paragraph — Balanced & Centered */}
          <p className="relative z-10 mx-auto max-w-2xl sm:max-w-3xl text-base sm:text-lg md:text-xl text-neutral-100 font-medium leading-relaxed font-sans text-center drop-shadow-sm">
            E-Cell exists because the world needs more problem-solvers and risk-takers.
            <br className="hidden md:inline" />
            We give student entrepreneurs the pathway, mentors, and maker labs to launch before graduation.
          </p>
        </div>

        {/* Explicit Spacer between Subheadline and Campus Image */}
        <div style={{ height: "6rem" }} />

        {/* ─── CINEMATIC HERO IMAGE BANNER (Updated to img1.jpeg) ───────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={scaleIn}
        >
          <div className="relative rounded-[2rem] border border-white/[0.12] bg-white/[0.03] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-[16/9] md:aspect-[2.4/1] w-full overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <motion.div
                className="absolute -inset-[10%]"
                style={{ y: shouldReduce ? 0 : imgY }}
              >
                <Image
                  src="/img1.jpeg"
                  alt="Chandigarh University campus view"
                  fill
                  quality={100}
                  style={{ objectFit: "cover" }}
                  priority
                />
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-transparent to-black/20" />
              </motion.div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 backdrop-blur-xl shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#FF5500] animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                  CU CAMPUS · EST. 2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Explicit Spacer above Stats */}
        <div style={{ height: "8rem" }} />

        {/* ─── STATS STRIP (Brighter Text & Larger Smaller Texts) ─────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 py-20 md:py-28 border-y border-white/[0.12]"
        >
          {[
            { value: "200+", label: "ACTIVE STUDENT BUILDERS", sub: "Collaborating across campus", icon: Sparkle, color: "#FF5500" },
            { value: "40+", label: "STARTUPS LAUNCHED", sub: "From ideation to MVP", icon: Rocket, color: "#0066FF" },
            { value: "12+", label: "INDUSTRY MENTORS", sub: "Guiding every cohort", icon: ArrowUpRight, color: "#00C896" },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-5 px-4"
              >
                {/* Glowing Dot Icon Indicator — Brighter Text */}
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: stat.color, boxShadow: `0 0 12px ${stat.color}` }} />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-200">METRIC</span>
                </div>

                {/* Display Number — Big & Vibrant */}
                <div className="font-outfit text-6xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
                  {stat.value}
                </div>

                {/* Label — Brighter & Slightly Bigger */}
                <div className="font-mono text-sm sm:text-base font-extrabold uppercase tracking-[0.18em]" style={{ color: stat.color }}>
                  {stat.label}
                </div>

                {/* Sub-label — Brighter & Bigger Text */}
                <div className="text-sm sm:text-base text-neutral-100 font-sans font-medium leading-relaxed drop-shadow-sm">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Explicit Spacer between Stats and Pipeline Header */}
        <div style={{ height: "8rem" }} />

        {/* ─── THE FOUNDER PIPELINE (Bigger Step Flow Bar) ─── */}
        <div>
          {/* Visual Step Connector Line — Bit Bigger */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="h-px w-28 md:w-48 bg-gradient-to-r from-transparent via-[#FF5500]/60 to-[#FF5500]" />
            <div className="flex items-center gap-6 sm:gap-10 px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-extrabold text-[#FF5500] tracking-wider">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5500] animate-ping" />
                <span>01 IDEATE</span>
              </div>
              <span className="text-neutral-400 text-base font-bold">→</span>
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-extrabold text-[#0066FF] tracking-wider">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0066FF]" />
                <span>02 BUILD</span>
              </div>
              <span className="text-neutral-400 text-base font-bold">→</span>
              <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-extrabold text-[#00C896] tracking-wider">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00C896]" />
                <span>03 LAUNCH</span>
              </div>
            </div>
            <div className="h-px w-28 md:w-48 bg-gradient-to-l from-transparent via-[#00C896]/60 to-[#00C896]" />
          </div>

          <div className="text-center">
            <h3 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              From Idea to Venture Backed
            </h3>
          </div>

          {/* Explicit Spacer between Header and Cards */}
          <div style={{ height: "5rem" }} />

          {/* Cards Grid — Clean, Airy, Elegant like Roadmap */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {STAGES.map((stage) => (
              <SpotlightCard
                key={stage.number}
                style={{
                  borderRadius: "1.75rem",
                  border: stage.status === "featured" ? "1px solid #FF5500" : "1px solid rgba(255,255,255,0.08)",
                  background: stage.status === "featured" ? "rgba(255, 77, 0, 0.14)" : "rgba(11, 14, 20, 0.8)",
                  backdropFilter: "blur(24px)",
                  boxShadow: stage.status === "featured" ? "0 0 40px rgba(255, 77, 0, 0.35)" : "0 10px 30px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ padding: "2.5rem", position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    {/* Phase Number Header */}
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5500", marginBottom: "1.25rem" }}>
                      STAGE {stage.number} {stage.status === "featured" && "· CORE TRACK"}
                    </p>

                    {/* Title */}
                    <h3 style={{ fontFamily: "var(--font-outfit)", fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--text-1)", marginBottom: "0.5rem" }}>
                      {stage.label}
                    </h3>

                    {/* Tagline / Subtitle */}
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#FF5500", marginBottom: "1.25rem" }}>
                      {stage.tagline}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.7 }}>
                      {stage.desc}
                    </p>
                  </div>

                  {/* Status Badge in Top Right Corner */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      background: "rgba(17, 22, 34, 0.8)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "999px",
                      padding: "0.3rem 0.7rem",
                    }}
                  >
                    {stage.tag}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* ─── CALL TO ACTION BUTTONS (Centered at bottom) ───────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-5 pt-6"
        >
          <a
            href="#join"
            className="group inline-flex items-center gap-3 rounded-full bg-[#FF5500] px-9 py-4 font-bold text-sm uppercase tracking-widest text-white shadow-[0_8px_30px_rgba(255,85,0,0.4)] transition-all duration-300 hover:bg-[#FF661A] hover:shadow-[0_12px_40px_rgba(255,85,0,0.6)] active:scale-[0.98]"
          >
            <span>Join the Foundry</span>
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#roadmap"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-9 py-4 font-bold text-sm uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.08] hover:text-white active:scale-[0.98]"
          >
            <span>Explore Roadmap</span>
            <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}