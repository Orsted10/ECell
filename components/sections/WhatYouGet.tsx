"use client";
import { useRef, useEffect, useState } from "react";
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
    body: "Access dedicated maker desk space, guidance on legal incorporation, mentorship from experienced founders, and pitch prep for seed funding.",
    highlights: ["Dedicated Workspace Access", "Legal & Charter Setup Guidance", "Incubation Cohort Milestone Tracking"],
    accent: "#FF5500",
    glowColor: "rgba(255, 85, 0, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(255, 85, 0, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "How Incubation Works",
    cardSubtitle: "COHORT PROGRAM ROADMAP",
    cardBody: "A structured 4-stage pipeline guiding student teams from raw concept to launch-ready startup.",
    cardDeliverables: [
      "Ideation & Problem Validation — Refining your concept",
      "Prototype & MVP Build — Accessing maker space & tech tools",
      "Legal & Charter Setup — Guidance on incorporation basics",
      "Pitch & Grant Readiness — Deck & financial model prep",
    ],
    cardFooterLabel: "CAMPUS INCUBATION PROGRAM",
  },
  {
    icon: Microphone,
    pillarNo: "02",
    title: "Founder Talks",
    tagline: "Unfiltered playbooks directly from iconic builders.",
    body: "Monthly intimate fireside chats and masterclasses with active founders, CEOs, and operators sharing real lessons and growth strategies.",
    highlights: ["Monthly Speaker Sessions", "Interactive Q&A Audits", "Networking Opportunities"],
    accent: "#818CF8",
    glowColor: "rgba(129, 140, 248, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(129, 140, 248, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "Learning From Real Builders",
    cardSubtitle: "CAMPUS MASTERCLASS SERIES",
    cardBody: "Key topics and practical takeaways covered during our monthly founder speaker sessions.",
    cardDeliverables: [
      "Zero-to-One Product Launch — Building the initial MVP",
      "Early Traction & Growth — Finding your first users",
      "Fundraising Fundamentals — Pitching & term sheet basics",
      "Interactive Q&A — Asking direct questions to speakers",
    ],
    cardFooterLabel: "STUDENT FOUNDER SESSIONS",
  },
  {
    icon: UsersThree,
    pillarNo: "03",
    title: "Co-Founder Match",
    tagline: "Your network is your ultimate unfair advantage.",
    body: "Peer networking mixers, team-building sessions, and campus meetups to find your technical co-founder, growth lead, or design partner.",
    highlights: ["Builder Mixer Events", "Cross-Department Networking", "Team Formation Support"],
    accent: "#34D399",
    glowColor: "rgba(52, 211, 153, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(52, 211, 153, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "Building Your Team",
    cardSubtitle: "COMMUNITY MATCHMAKING",
    cardBody: "Connecting technical, design, and business-minded students across departments.",
    cardDeliverables: [
      "Builder Mixers — Networking with motivated peers",
      "Skill Showcase — Presenting project ideas & needs",
      "Hackathon Team Pairing — Forming balanced teams",
      "Founder Roles Basics — Understanding equity & responsibilities",
    ],
    cardFooterLabel: "CAMPUS NETWORK TRACK",
  },
  {
    icon: Student,
    pillarNo: "04",
    title: "1-on-1 Mentorship",
    tagline: "Guided step-by-step by those who built before you.",
    body: "Direct 1-on-1 office hours with alumni founders, mentors, and domain experts across technology, product, and business strategy.",
    highlights: ["Dedicated Office Hours", "Pitch Deck Teardowns", "Strategic Roadmap Advice"],
    accent: "#FCD34D",
    glowColor: "rgba(252, 211, 77, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(252, 211, 77, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "Personalized Advisory",
    cardSubtitle: "MENTORSHIP CLINICS",
    cardBody: "Direct feedback sessions tailored to your current stage and immediate challenges.",
    cardDeliverables: [
      "Pitch Deck Review — Structural & visual feedback",
      "Business Model Audit — Evaluating value proposition",
      "Tech Stack Consultation — Guidance on development tools",
      "GTM Strategy Review — Defining target audience & launch plan",
    ],
    cardFooterLabel: "EXPERT ADVISORY TRACK",
  },
  {
    icon: Lightning,
    pillarNo: "05",
    title: "48H Ideathons",
    tagline: "48 intense hours to prototype, pitch, and win.",
    body: "Fast-paced hackathons where student teams work together, build working prototypes, compete for prizes, and get recognized.",
    highlights: ["48-Hour Prototyping Sprint", "Mentor Guidance On-Site", "Prizes & Recognition"],
    accent: "#FCA5A5",
    glowColor: "rgba(252, 165, 165, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(252, 165, 165, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "The Ideathon Journey",
    cardSubtitle: "ANNUAL HACKATHON SPRINT",
    cardBody: "From problem statement to working prototype and pitch presentation in two days.",
    cardDeliverables: [
      "Problem Statement Reveal — Challenge track selection",
      "Rapid Prototyping — 48 hours of collaborative building",
      "Mentor Check-Ins — Mid-sprint feedback & guidance",
      "Jury Presentation — Pitching working MVPs to judges",
    ],
    cardFooterLabel: "ANNUAL CAMPUS IDEATHON",
  },
  {
    icon: Trophy,
    pillarNo: "06",
    title: "Pitch Competitions",
    tagline: "Present your vision. Persuade real VCs. Win capital.",
    body: "Campus Demo Days and pitch showcases presenting top student startups to judges, industry professionals, and audience members.",
    highlights: ["Stage Presentation Experience", "Expert Jury Feedback", "Campus Exposure"],
    accent: "#C4B5FD",
    glowColor: "rgba(196, 181, 253, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(196, 181, 253, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "Campus Pitch Showcase",
    cardSubtitle: "DEMO DAY ARENA",
    cardBody: "High-visibility opportunity to present your startup vision and gain valuable pitch experience.",
    cardDeliverables: [
      "Application & Deck Screening — Initial entry review",
      "Pitch Coaching — Refining presentation & slide flow",
      "Live Stage Pitch — Presenting to judges & audience",
      "Awards & Feedback — Constructive jury evaluation",
    ],
    cardFooterLabel: "ANNUAL PITCH SHOWCASE",
  },
  {
    icon: Briefcase,
    pillarNo: "07",
    title: "Startup Internships",
    tagline: "High-impact roles at high-growth scaleups.",
    body: "Connecting interested students with internship roles at innovative startups, gaining hands-on building experience beyond textbooks.",
    highlights: ["Curated Role Postings", "Hands-On Project Work", "Skill-Building Experience"],
    accent: "#5EEAD4",
    glowColor: "rgba(94, 234, 212, 0.25)",
    bgGradient: "linear-gradient(135deg, rgba(94, 234, 212, 0.12) 0%, rgba(11, 14, 20, 0.95) 100%)",
    cardTitle: "Startup Career Opportunities",
    cardSubtitle: "TALENT PLACEMENT SUPPORT",
    cardBody: "Helping students discover and apply for impactful roles at early-stage companies.",
    cardDeliverables: [
      "Vetted Opportunity Board — Curated internship listings",
      "Resume & Portfolio Prep — Highlighting project work",
      "Direct Application Routing — Connecting with founders",
      "Real-World Experience — Building alongside core teams",
    ],
    cardFooterLabel: "STUDENT CAREER TRACK",
  },
];

export default function WhatYouGet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const [activeCard, setActiveCard] = useState<number>(0);

  useEffect(() => {
    if (shouldReduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".offering-card");

      // Pin section with 350vh scroll distance, liquid 1.8s scrub inertia & silky snapping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${cards.length * 350}vh`,
          pin: true,
          scrub: 1.8, // Ultra-smooth liquid physics dampening for wheel scrolls
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.5, max: 1.0 },
            delay: 0.1,
            ease: "power3.inOut",
          },
          onUpdate: (self) => {
            const index = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length)
            );
            setActiveCard(index);
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // First card is base state

        // Card i starts off-screen below, slightly transparent & scaled
        gsap.set(card, { yPercent: 100, opacity: 0.2, scale: 1.04, rotateX: -3 });

        // Step 1: Luxurious 2.0s cinematic gliding transition (50% of step timeline)
        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            ease: "power3.out",
            duration: 2.0,
          },
          `slide-${i}`
        );

        // Step 2: Outgoing Card i-1 smoothly retreats in 3D depth, opacity & blur
        tl.to(
          cards[i - 1],
          {
            yPercent: -4,
            scale: 0.88,
            opacity: 0.15,
            rotateX: 6,
            filter: "blur(10px)",
            ease: "power3.out",
            duration: 2.0,
          },
          `slide-${i}`
        );

        // Step 3: FROZEN RESTING PAUSE (2.0s) — Card stays 100% frozen in focus before next drawer
        tl.to(card, {
          yPercent: 0,
          duration: 2.0,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduce]);

  return (
    <section
      id="offerings"
      className="relative overflow-hidden bg-[#06070A]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Pinned Viewport Container (100vh) */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-[100vh] overflow-hidden flex flex-col justify-between items-center py-6 px-4 sm:px-8"
      >
        {/* Dynamic Ambient Background Glow (Transitions color based on active pillar) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-40 blur-[130px] transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${OFFERINGS[activeCard].accent}35 0%, transparent 70%)`,
            }}
          />
          {/* Subtle Tech Mesh Grid overlay */}
          <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        {/* TOP HEADER & HUD BAR — Populates the top 25% of the pinned screen */}
        <div className="relative z-30 w-full max-w-6xl flex flex-col items-center gap-3 text-center pt-2">
          {/* Header Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF5500]/50 bg-[#FF5500]/15 backdrop-blur-xl shadow-[0_0_20px_rgba(255,85,0,0.2)]">
            <Sparkle size={14} weight="fill" className="text-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF5500]">
              CORE ECOSYSTEM PILLARS
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none drop-shadow-xl">
            Everything you need to launch a startup.
          </h2>

          {/* Interactive Floating Glass HUD Tabs Bar */}
          <div className="w-full max-w-4xl mt-1">
            <div className="flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 px-1 w-full justify-between">
                {OFFERINGS.map((pillar, idx) => {
                  const isActive = activeCard === idx;
                  return (
                    <button
                      key={pillar.pillarNo}
                      onClick={() => {
                        if (!containerRef.current) return;
                        const totalScroll = containerRef.current.offsetHeight * 3.5 * OFFERINGS.length;
                        const targetY = (idx / (OFFERINGS.length - 1)) * totalScroll;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] scale-105"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          background: isActive ? pillar.accent : "rgba(255,255,255,0.2)",
                          boxShadow: isActive ? `0 0 10px ${pillar.accent}` : "none",
                        }}
                      />
                      <span>{pillar.pillarNo}</span>
                      <span className="hidden lg:inline font-sans text-[11px] font-semibold opacity-90">{pillar.title.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE DRAWER CARDS AREA — Fills the hero 65% center viewport */}
        <div className="relative z-20 w-full max-w-6xl flex-1 flex items-center justify-center my-3">
          {OFFERINGS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="offering-card absolute inset-0 w-full h-full flex items-center justify-center"
                style={{
                  zIndex: i + 1,
                  willChange: "transform, opacity, filter",
                }}
              >
                {/* Card Outer Shell */}
                <div
                  className="w-full relative rounded-[2rem] p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
                  style={{
                    background: "linear-gradient(180deg, rgba(10, 13, 20, 0.98) 0%, rgba(14, 18, 28, 0.97) 100%)",
                    backdropFilter: "blur(35px)",
                    border: `2px solid ${item.accent}60`,
                    boxShadow: `0 30px 90px rgba(0,0,0,0.95), inset 0 1px 0 ${item.accent}50`,
                  }}
                >
                  {/* Top Laser Beam Border */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] z-20 pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${item.accent} 50%, transparent 100%)`,
                    }}
                  />

                  {/* Radial Accent Glow behind card */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 75% 50%, ${item.accent}18 0%, transparent 65%)`,
                    }}
                  />

                  <div className="container-wide relative z-10" style={{ paddingBlock: "1.5rem" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                      
                      {/* Left Column: Rich Information & Bullet Highlights (5 cols) */}
                      <div className="lg:col-span-5 flex flex-col justify-center gap-6 py-2">
                        {/* Badge Pill */}
                        <div className="flex items-center gap-3">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${item.accent}35 0%, ${item.accent}12 100%)`,
                              border: `1.5px solid ${item.accent}70`,
                              boxShadow: `0 0 30px ${item.glowColor}`,
                            }}
                          >
                            <Icon size={28} weight="bold" style={{ color: item.accent }} />
                          </div>
                          <span
                            className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-inner"
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
                        <h3 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
                          {item.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xl sm:text-2xl font-bold leading-snug" style={{ color: item.accent }}>
                          {item.tagline}
                        </p>

                        {/* Body Paragraph — Bright & Legible Slate-100 */}
                        <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed drop-shadow-sm">
                          {item.body}
                        </p>

                        {/* Feature Highlights Checklist */}
                        <div className="flex flex-col gap-3 pt-1">
                          {item.highlights.map((feat) => (
                            <div key={feat} className="flex items-center gap-3 group">
                              <CheckCircle size={20} weight="fill" style={{ color: item.accent }} className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                              <span className="text-sm sm:text-base font-semibold text-neutral-100 group-hover:text-white transition-colors duration-200">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column: Clean Visual Card showcasing REAL PROGRAM FRAMEWORKS (7 cols) */}
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        <SpotlightCard
                          style={{
                            padding: "2.5rem",
                            borderRadius: "2rem",
                            border: `1.5px solid ${item.accent}50`,
                            background: `${item.accent}0D`,
                            backdropFilter: "blur(30px)",
                            position: "relative",
                            boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 35px ${item.glowColor}`,
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            minHeight: "380px",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* Top Eyebrow & Status Pill */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
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
                              STAGE {item.pillarNo} · FRAMEWORK
                            </span>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                color: "#F8FAFC",
                                background: "rgba(255, 255, 255, 0.08)",
                                border: "1px solid rgba(255, 255, 255, 0.16)",
                                padding: "0.35rem 0.85rem",
                                borderRadius: "999px",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              {item.cardSubtitle}
                            </span>
                          </div>

                          {/* Deliverable Header */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <h4
                              style={{
                                fontFamily: "var(--font-outfit)",
                                fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                              }}
                            >
                              {item.cardTitle}
                            </h4>
                            <p
                              style={{
                                fontSize: "0.95rem",
                                color: "#CBD5E1",
                                lineHeight: 1.6,
                                fontWeight: 500,
                              }}
                            >
                              {item.cardBody}
                            </p>
                          </div>

                          {/* 4 Authentic Program Steps on Right Card */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                            {item.cardDeliverables.map((deliv) => (
                              <div
                                key={deliv}
                                className="group flex items-center gap-3 p-3 sm:px-4 rounded-xl transition-all duration-300 hover:translate-x-1.5"
                                style={{
                                  background: "rgba(255, 255, 255, 0.04)",
                                  border: "1px solid rgba(255, 255, 255, 0.08)",
                                }}
                              >
                                <Sparkle size={18} weight="fill" style={{ color: item.accent, flexShrink: 0 }} className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#F8FAFC" }}>
                                  {deliv}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Footer Accent Pill */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingTop: "1rem",
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
                              <ShieldCheck size={18} weight="fill" /> {item.cardFooterLabel}
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
              </div>
            );
          })}
        </div>

        {/* BOTTOM ACTION & NAVIGATION BAR — Populates the lower 10% of the pinned screen */}
        <div className="relative z-30 w-full max-w-6xl flex items-center justify-between gap-4 pt-2">
          {/* Active Track Progress Bar */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-lg">
            <span className="font-mono text-xs font-bold text-slate-300">
              PILLAR <span style={{ color: OFFERINGS[activeCard].accent }}>0{activeCard + 1}</span> OF 07
            </span>
            <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${((activeCard + 1) / OFFERINGS.length) * 100}%`,
                  background: OFFERINGS[activeCard].accent,
                  boxShadow: `0 0 10px ${OFFERINGS[activeCard].accent}`,
                }}
              />
            </div>
          </div>

          {/* Quick Nav Controls & Call-to-Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (activeCard > 0 && containerRef.current) {
                  const targetIdx = activeCard - 1;
                  const totalScroll = containerRef.current.offsetHeight * 3.5 * OFFERINGS.length;
                  const targetY = (targetIdx / (OFFERINGS.length - 1)) * totalScroll;
                  window.scrollTo({ top: targetY, behavior: "smooth" });
                }
              }}
              disabled={activeCard === 0}
              className={`p-2.5 rounded-xl border font-mono text-xs font-bold transition-all duration-200 ${
                activeCard > 0
                  ? "bg-white/10 text-white border-white/20 hover:bg-white/20 active:scale-95"
                  : "bg-white/[0.02] text-slate-600 border-white/5 cursor-not-allowed"
              }`}
            >
              ‹ PREV
            </button>
            
            <button
              onClick={() => {
                if (activeCard < OFFERINGS.length - 1 && containerRef.current) {
                  const targetIdx = activeCard + 1;
                  const totalScroll = containerRef.current.offsetHeight * 3.5 * OFFERINGS.length;
                  const targetY = (targetIdx / (OFFERINGS.length - 1)) * totalScroll;
                  window.scrollTo({ top: targetY, behavior: "smooth" });
                }
              }}
              disabled={activeCard === OFFERINGS.length - 1}
              className={`p-2.5 rounded-xl border font-mono text-xs font-bold transition-all duration-200 ${
                activeCard < OFFERINGS.length - 1
                  ? "bg-white/10 text-white border-white/20 hover:bg-white/20 active:scale-95"
                  : "bg-white/[0.02] text-slate-600 border-white/5 cursor-not-allowed"
              }`}
            >
              NEXT ›
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#FF6611] text-white font-outfit text-xs font-extrabold tracking-wider uppercase shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Lightning size={15} weight="fill" />
              <span>FIND YOUR TRACK</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

