"use client";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  RocketLaunch,
  Microphone,
  UsersThree,
  Student,
  Lightning,
  Trophy,
  Briefcase,
  CheckCircle,
  Sparkle,
  TrendUp,
  Clock,
  ShieldCheck,
  Star,
  Flame,
  ArrowRight,
} from "@phosphor-icons/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { RevealText } from "@/components/ui/RevealText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const OFFERINGS = [
  {
    icon: RocketLaunch,
    pillarNo: "01",
    title: "Startup Incubation",
    tagline: "Turn your napkin idea into a venture-backed startup.",
    body: "Access dedicated 24/7 maker desk space, zero-cost legal incorporation, mentorship from Series-A founders, and direct seed funding opportunities.",
    highlights: ["24/7 Dedicated Desk Space", "Zero-Cost Legal & Equity Counsel", "Up to ₹10L Seed Grant Access"],
    accent: "#FF5500",
    glowColor: "rgba(255, 85, 0, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(255, 85, 0, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "incubation",
  },
  {
    icon: Microphone,
    pillarNo: "02",
    title: "Founder Talks",
    tagline: "Unfiltered playbooks directly from iconic builders.",
    body: "Monthly intimate fireside chats and masterclasses with active founders, Series-B CEOs, and top operators sharing real mistakes and growth tactics.",
    highlights: ["Monthly Live Masterclasses", "Unfiltered Q&A Sessions", "Exclusive Closed-Door Dinners"],
    accent: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(129, 140, 248, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "talks",
  },
  {
    icon: UsersThree,
    pillarNo: "03",
    title: "Co-Founder Match",
    tagline: "Your network is your ultimate unfair advantage.",
    body: "AI-driven peer matching, private founder mixers, and maker hack-nights to find your technical co-founder, growth lead, or design partner.",
    highlights: ["AI Co-Founder Matchmaking", "Private Founder Retreats", "Cross-Campus Talent Directory"],
    accent: "#34D399",
    glowColor: "rgba(52, 211, 153, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "networking",
  },
  {
    icon: Student,
    pillarNo: "04",
    title: "1-on-1 Mentorship",
    tagline: "Guided step-by-step by those who built before you.",
    body: "Direct 1-on-1 office hours with alumni founders, venture capitalists, and domain experts in AI, Fintech, SaaS, and Consumer Tech.",
    highlights: ["Weekly Dedicated Office Hours", "Pitch Deck Structural Audit", "Direct Investor Warm Intros"],
    accent: "#FCD34D",
    glowColor: "rgba(252, 211, 77, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(252, 211, 77, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "mentorship",
  },
  {
    icon: Lightning,
    pillarNo: "05",
    title: "48H Ideathons",
    tagline: "48 intense hours to prototype, pitch, and win.",
    body: "Adrenaline-fueled hackathons where student teams hack overnight, build working MVPs, compete for ₹2.5L cash prizes, and get spotted by VCs.",
    highlights: ["₹2,50,000 Cash Prize Pool", "Free AWS & OpenAI Credits", "Fast-Track VC Incubation"],
    accent: "#FCA5A5",
    glowColor: "rgba(252, 165, 165, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(252, 165, 165, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "ideathons",
  },
  {
    icon: Trophy,
    pillarNo: "06",
    title: "Pitch Competitions",
    tagline: "Present your vision. Persuade real VCs. Win capital.",
    body: "High-stakes Demo Days and pitch battles in front of angel syndicates and venture funds looking to write pre-seed checks for student startups.",
    highlights: ["Live VC Jury Desk", "Term Sheet Opportunities", "National Media Exposure"],
    accent: "#C4B5FD",
    glowColor: "rgba(196, 181, 253, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(196, 181, 253, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "pitch",
  },
  {
    icon: Briefcase,
    pillarNo: "07",
    title: "Startup Internships",
    tagline: "High-impact roles at high-growth scaleups.",
    body: "Curated 1-click internship placements at vetted Series-A to Series-C startups, giving you hands-on building experience classrooms can never match.",
    highlights: ["Paid Stipends (₹25k-₹60k/mo)", "Direct Founder Reporting", "Fast-Track Full-Time Offers"],
    accent: "#5EEAD4",
    glowColor: "rgba(94, 234, 212, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(94, 234, 212, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    widgetType: "internships",
  },
];

export default function WhatYouGet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".offering-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.35,
          filter: "blur(4px)",
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduce]);

  return (
    <section
      id="offerings"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", background: "#06070A" }}
    >
      {/* Section Header */}
      <div className="container-wide" style={{ paddingTop: "clamp(5rem,10vw,9rem)", paddingBottom: "3rem" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col gap-4 text-center items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF5500]/40 bg-[#FF5500]/10 backdrop-blur-md">
            <Sparkle size={14} weight="fill" className="text-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF5500]">
              CORE ECOSYSTEM PILLARS
            </span>
          </motion.div>
          
          <RevealText 
            text="Everything you need<br/>to launch a startup." 
            className="display-2 text-white font-extrabold tracking-tight text-center" 
          />
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl text-center font-medium leading-relaxed">
            Seven battle-tested launchpads designed to transform student builders into venture-backed founders.
          </p>
        </motion.div>
      </div>

      {/* Sticky Stacked Cards */}
      <div ref={containerRef} className="relative z-10">
        {OFFERINGS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="offering-card"
              style={{
                position: "sticky",
                top: 0,
                zIndex: i + 1,
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(180deg, rgba(8, 10, 15, 0.98) 0%, rgba(12, 16, 24, 0.96) 100%)",
                backdropFilter: "blur(30px)",
                borderTop: `2px solid ${item.accent}60`,
                boxShadow: `0 -30px 70px rgba(0,0,0,0.9), inset 0 1px 0 ${item.accent}40`,
                willChange: "transform, opacity",
                paddingBlock: "3rem",
              }}
            >
              {/* Radial Accent Glow behind card */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 75% 50%, ${item.accent}18 0%, transparent 65%)`,
                }}
              />

              <div className="container-wide relative z-10" style={{ paddingBlock: "2rem" }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                  
                  {/* Left Column: Rich Information & Bullet Highlights (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center gap-7 py-4">
                    {/* Badge Pill */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}35 0%, ${item.accent}12 100%)`,
                          border: `1.5px solid ${item.accent}70`,
                          boxShadow: `0 0 25px ${item.glowColor}`,
                        }}
                      >
                        <Icon size={28} weight="bold" style={{ color: item.accent }} />
                      </div>
                      <span
                        className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] px-4 py-2 rounded-full"
                        style={{
                          color: item.accent,
                          background: `${item.accent}18`,
                          border: `1px solid ${item.accent}50`,
                        }}
                      >
                        PILLAR // {item.pillarNo}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-md"
                    >
                      {item.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-xl sm:text-2xl font-bold leading-snug"
                      style={{ color: item.accent }}
                    >
                      {item.tagline}
                    </p>

                    {/* Body Paragraph — Bright & Legible Slate-100 */}
                    <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-sm">
                      {item.body}
                    </p>

                    {/* Feature Highlights Checklist */}
                    <div className="flex flex-col gap-3.5 pt-2">
                      {item.highlights.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <CheckCircle size={20} weight="fill" style={{ color: item.accent }} className="flex-shrink-0" />
                          <span className="text-sm sm:text-base font-semibold text-neutral-100">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Clean Visual Card matching Image 2 Roadmap purity (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <SpotlightCard
                      style={{
                        padding: "3rem",
                        borderRadius: "2rem",
                        border: `1.5px solid ${item.accent}50`,
                        background: `${item.accent}0D`,
                        backdropFilter: "blur(30px)",
                        position: "relative",
                        boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 35px ${item.glowColor}`,
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        minHeight: "360px",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Top Eyebrow & Status Pill */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} className="justify-between">
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: item.accent,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          STAGE {item.pillarNo}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--text-2)",
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "999px",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          MODULE :: ACTIVE
                        </span>
                      </div>

                      {/* Main Title & Tagline inside Card */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-outfit)",
                            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            color: item.accent,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {item.tagline}
                        </p>
                      </div>

                      {/* Clean Body Text matching Roadmap purity */}
                      <p
                        style={{
                          fontSize: "1.05rem",
                          color: "#E2E8F0",
                          lineHeight: 1.7,
                          fontWeight: 500,
                        }}
                      >
                        {item.body}
                      </p>

                      {/* Bottom Footer Accent Pill */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: "1.25rem",
                          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: item.accent,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          <ShieldCheck size={18} weight="fill" /> E-CELL INCUBATION TRACK
                        </span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.82rem",
                            fontWeight: 800,
                            color: "#FFFFFF",
                          }}
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight size={16} weight="bold" style={{ color: item.accent }} />
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

