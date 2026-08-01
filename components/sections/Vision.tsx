"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  Lightbulb,
  Cpu,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { RevealText } from "@/components/ui/RevealText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const PILLARS = [
  {
    number: "01",
    label: "Ideate",
    icon: Lightbulb,
    text: "Transform raw curiosity into structured, venture-ready concepts with 1-on-1 guidance from experienced founders.",
    tag: "PHASE 01 // DISCOVERY",
    color: "#FF5500",
    badgeBg: "rgba(255, 85, 0, 0.12)",
    badgeBorder: "rgba(255, 85, 0, 0.30)",
    highlights: ["Problem Discovery", "1-on-1 Mentorship", "Idea Validation"],
  },
  {
    number: "02",
    label: "Build",
    icon: Cpu,
    text: "Access maker labs, dev grants, and peer engineering networks to turn your blueprint into a production MVP.",
    tag: "PHASE 02 // PROTOTYPE",
    color: "#0066FF",
    badgeBg: "rgba(0, 102, 255, 0.12)",
    badgeBorder: "rgba(0, 102, 255, 0.30)",
    highlights: ["Maker Labs Access", "Prototyping Grants", "Tech Architecture"],
  },
  {
    number: "03",
    label: "Launch",
    icon: Rocket,
    text: "Pitch at Demo Day, secure early angel backing, and onboard your first 1,000 real-world users.",
    tag: "PHASE 03 // SCALE",
    color: "#00E676",
    badgeBg: "rgba(0, 230, 118, 0.12)",
    badgeBorder: "rgba(0, 230, 118, 0.30)",
    highlights: ["Demo Day Pitch", "Angel Investor Network", "First 1K Users"],
  },
];

const STATS = [
  { value: "200+", label: "Active Members", sub: "Student Builders" },
  { value: "40+", label: "Startups Built", sub: "Venture Portfolio" },
  { value: "12", label: "Industry Mentors", sub: "Expert Advisors" },
];

export default function Vision() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <section
      id="vision"
      className="py-16 md:py-24 relative overflow-hidden bg-transparent"
    >
      <div className="container-wide">
        {/* ── Section Header ────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mb-12 md:mb-16"
        >
          {/* Category Tag */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#FF5500] uppercase">
              // OUR VISION & FOUNDER PIPELINE
            </span>
          </motion.div>

          {/* Headline & Copy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-outfit leading-[1.08]">
                Every successful founder <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF5500]">
                  started somewhere.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-sm sm:text-base text-[#9AA4B2] leading-relaxed font-sans mb-4">
                E-Cell exists because the world needs more problem-solvers, risk-takers,
                and student builders willing to bet on an idea before anyone else does.
              </p>
              <a
                href="#whatsincluded"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#FF5500] hover:text-[#ff7733] transition-colors uppercase group"
              >
                <span>What you get</span>
                <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Banner: Parallax Campus Hero Card ─────────── */}
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-12 md:mb-16 border border-[#FF5500]/25 shadow-[0_24px_64px_rgba(0,0,0,0.72),0_0_40px_rgba(255,85,0,0.08)]"
        >
          {/* Background image container */}
          <motion.div
            className="absolute -inset-[12%]"
            style={{
              y: shouldReduce ? 0 : imgY,
              scale: shouldReduce ? 1 : imgScale,
            }}
          >
            <Image
              src="/vision-img.png"
              alt="Chandigarh University campus aerial view"
              fill
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Dual Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06070A]/95 via-[#06070A]/75 to-[#06070A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06070A]/90 via-transparent to-[#06070A]/40" />

          {/* Content Layer */}
          <div className="relative p-6 sm:p-8 md:p-12 min-h-[300px] md:min-h-[360px] flex flex-col justify-between gap-8">
            {/* Top row: Manifesto & Badge */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-outfit max-w-xl leading-snug tracking-tight">
                The future is built by those who don&rsquo;t wait for permission.
              </p>
              <span className="shrink-0 text-[11px] font-mono font-bold tracking-widest text-[#FF5500] uppercase bg-[#FF5500]/10 border border-[#FF5500]/30 rounded-full px-4 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-ping" />
                EST. 2026 // CUUP FOUNDRY
              </span>
            </div>

            {/* Bottom Row: Key Statistics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-outfit leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-neutral-200 uppercase mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-sans text-neutral-400">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Founder Journey: Pipeline Connector Header ── */}
        <div className="mb-6 hidden lg:flex items-center justify-between px-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Sparkle size={14} className="text-[#FF5500]" />
            <span className="font-bold text-neutral-200 uppercase tracking-widest">3-STAGE FOUNDER PIPELINE</span>
          </div>
          <div className="h-px flex-1 mx-8 bg-gradient-to-r from-[#FF5500]/40 via-[#0066FF]/40 to-[#00E676]/40" />
          <span className="tracking-widest uppercase text-neutral-500">DISCOVERY ➔ PROTOTYPE ➔ SCALE</span>
        </div>

        {/* ── Pillars: Balanced 3-Column Bento Grid ────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                variants={fadeUp}
                className="group h-full"
              >
                <SpotlightCard
                  style={{
                    background: "rgba(14, 20, 30, 0.92)",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    backdropFilter: "blur(20px)",
                  }}
                  className="h-full p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 shadow-xl"
                >
                  {/* Background Watermark Number */}
                  <span
                    className="absolute -top-4 -right-2 text-7xl font-extrabold font-mono pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-20 opacity-5"
                    style={{ color: pillar.color }}
                  >
                    {pillar.number}
                  </span>

                  {/* Ambient Radial Hover Glow */}
                  <div
                    className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                    style={{
                      background: `radial-gradient(circle, ${pillar.color}25 0%, transparent 70%)`,
                    }}
                  />

                  {/* Card Content Top */}
                  <div>
                    {/* Icon Box + Tag Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: pillar.badgeBg,
                          border: `1.5px solid ${pillar.badgeBorder}`,
                          color: pillar.color,
                          boxShadow: `0 0 20px ${pillar.color}20`,
                        }}
                      >
                        <Icon size={24} weight="bold" />
                      </div>
                      <span
                        className="text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full uppercase shrink-0"
                        style={{
                          background: pillar.badgeBg,
                          border: `1px solid ${pillar.badgeBorder}`,
                          color: pillar.color,
                        }}
                      >
                        {pillar.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-outfit text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                      {pillar.label}
                    </h3>

                    {/* Main Description */}
                    <p className="text-sm text-[#9AA4B2] leading-relaxed font-sans mb-6">
                      {pillar.text}
                    </p>

                    {/* Feature Highlights Checklist */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                      {pillar.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
                          <CheckCircle size={15} weight="fill" style={{ color: pillar.color }} className="shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase">
                      PHASE {pillar.number} HIGHLIGHTS
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        background: pillar.badgeBg,
                        border: `1px solid ${pillar.badgeBorder}`,
                        color: pillar.color,
                      }}
                    >
                      <ArrowRight size={14} weight="bold" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}