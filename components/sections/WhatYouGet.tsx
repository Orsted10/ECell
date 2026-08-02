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
                minHeight: "100dvh",
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(180deg, rgba(8, 10, 15, 0.96) 0%, rgba(12, 16, 24, 0.94) 100%)",
                backdropFilter: "blur(30px)",
                borderTop: `1.5px solid ${item.accent}50`,
                boxShadow: `0 -25px 60px rgba(0,0,0,0.85), inset 0 1px 0 ${item.accent}30`,
                willChange: "transform, opacity",
              }}
            >
              {/* Radial Accent Glow behind card */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 75% 50%, ${item.accent}15 0%, transparent 65%)`,
                }}
              />

              <div className="container-wide relative z-10" style={{ paddingBlock: "4rem" }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column: Rich Information & Bullet Highlights (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Badge Pill */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}30 0%, ${item.accent}10 100%)`,
                          border: `1.5px solid ${item.accent}60`,
                          boxShadow: `0 0 20px ${item.glowColor}`,
                        }}
                      >
                        <Icon size={24} weight="bold" style={{ color: item.accent }} />
                      </div>
                      <span
                        className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full"
                        style={{
                          color: item.accent,
                          background: `${item.accent}15`,
                          border: `1px solid ${item.accent}40`,
                        }}
                      >
                        PILLAR // {item.pillarNo}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-outfit text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none drop-shadow-md"
                    >
                      {item.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-lg sm:text-xl font-bold leading-snug"
                      style={{ color: item.accent }}
                    >
                      {item.tagline}
                    </p>

                    {/* Body Paragraph — Bright & Legible Slate-100 */}
                    <p className="text-base text-slate-100 font-medium leading-relaxed drop-shadow-sm">
                      {item.body}
                    </p>

                    {/* Feature Highlights Checklist */}
                    <div className="flex flex-col gap-3 pt-2">
                      {item.highlights.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <CheckCircle size={18} weight="fill" style={{ color: item.accent }} className="flex-shrink-0" />
                          <span className="text-sm font-semibold text-neutral-100">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Custom Interactive Visual Component (7 cols) */}
                  <div className="lg:col-span-7">
                    <div
                      className="relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 group"
                      style={{
                        background: "rgba(10, 14, 22, 0.85)",
                        border: `1.5px solid ${item.accent}40`,
                        boxShadow: `0 20px 50px rgba(0,0,0,0.6), inset 0 0 30px ${item.accent}10`,
                      }}
                    >
                      {/* Top Bar HUD */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full animate-ping" style={{ backgroundColor: item.accent }} />
                          <span className="font-bold text-white tracking-wider">ECOSYSTEM MODULE :: PLR.{item.pillarNo}</span>
                        </div>
                        <span className="text-neutral-400 font-semibold uppercase">{item.title}</span>
                      </div>

                      {/* DYNAMIC VISUAL WIDGETS BASED ON PILLAR TYPE */}
                      {item.widgetType === "incubation" && (
                        <div className="flex flex-col gap-6">
                          <div className="flex items-center justify-between bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                            <div>
                              <p className="text-xs text-neutral-400 font-mono">INCUBATION BATCH</p>
                              <p className="text-lg font-bold text-white">Cohort 2026 // Seed Track</p>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF5500]/20 text-[#FF5500] border border-[#FF5500]/40 flex items-center gap-1.5">
                              <Flame size={14} weight="fill" /> 85% Funded
                            </span>
                          </div>

                          {/* Progress Meter */}
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-xs font-mono font-bold text-neutral-300">
                              <span>STAGE: MVP → SEED ROUND</span>
                              <span>MILESTONE 03 / 04</span>
                            </div>
                            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
                              <div className="h-full bg-gradient-to-r from-[#FF5500] via-[#FF7733] to-[#FF3300] rounded-full w-[85%] shadow-[0_0_12px_#FF5500]" />
                            </div>
                          </div>

                          {/* 3 Metric Cards */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                              <p className="text-[10px] font-mono text-neutral-400">DESK SPACE</p>
                              <p className="text-sm font-bold text-white">24/7 Access</p>
                            </div>
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                              <p className="text-[10px] font-mono text-neutral-400">LEGAL</p>
                              <p className="text-sm font-bold text-white">100% Free</p>
                            </div>
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-center">
                              <p className="text-[10px] font-mono text-neutral-400">SEED GRANT</p>
                              <p className="text-sm font-bold text-[#FF5500]">Up to ₹10L</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.widgetType === "talks" && (
                        <div className="flex flex-col gap-6">
                          <div className="relative rounded-2xl overflow-hidden bg-black/60 p-5 border border-indigo-500/30">
                            <div className="flex items-center justify-between mb-4">
                              <span className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400">
                                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> LIVE FIRESIDE CHAT
                              </span>
                              <span className="text-xs font-mono text-neutral-400">450+ VIEWERS</span>
                            </div>
                            <p className="text-base sm:text-lg font-extrabold text-white italic mb-3">
                              &ldquo;Build products people actually cry for if you take them away.&rdquo;
                            </p>
                            <div className="flex items-center justify-between pt-2 border-t border-white/10">
                              <div>
                                <p className="text-sm font-bold text-indigo-300">Unicorn Founder & Angel Investor</p>
                                <p className="text-xs text-neutral-400">Former YC Founder · ₹100Cr+ Exit</p>
                              </div>
                              <div className="flex gap-1">
                                <span className="w-1.5 h-6 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-8 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-4 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.widgetType === "networking" && (
                        <div className="flex flex-col gap-5">
                          <div className="flex items-center justify-between bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/30 text-xs font-mono">
                            <span className="text-emerald-400 font-bold">MATCHMAKING ENGINE ACTIVE</span>
                            <span className="text-white font-bold">SYNERGY SCORE: 98%</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                              <p className="text-xs font-mono text-emerald-400 font-bold mb-1">FOUNDER 01</p>
                              <p className="text-base font-bold text-white">Full-Stack AI Lead</p>
                              <p className="text-xs text-neutral-400">React, Python, LLMs</p>
                            </div>
                            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10">
                              <p className="text-xs font-mono text-emerald-400 font-bold mb-1">FOUNDER 02</p>
                              <p className="text-base font-bold text-white">Growth & Operations</p>
                              <p className="text-xs text-neutral-400">GTM, Sales, B2B SaaS</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs text-neutral-300 bg-black/40 p-3 rounded-xl">
                            <span>Status: Co-Founder Agreement Signed</span>
                            <CheckCircle size={16} weight="fill" className="text-emerald-400" />
                          </div>
                        </div>
                      )}

                      {item.widgetType === "mentorship" && (
                        <div className="flex flex-col gap-4">
                          <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/30 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-mono text-amber-400 font-bold">MENTOR SESSION</p>
                              <p className="text-base font-bold text-white">1-on-1 Pitch & Strategy Clinic</p>
                            </div>
                            <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                              <Star size={16} weight="fill" /> 4.98 / 5.0
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between bg-white/[0.04] p-3 rounded-xl text-xs font-medium text-neutral-200">
                              <span>VP of Product @ Series-B Unicorn</span>
                              <span className="text-amber-300 font-mono font-bold">Booked 4:00 PM</span>
                            </div>
                            <div className="flex items-center justify-between bg-white/[0.04] p-3 rounded-xl text-xs font-medium text-neutral-200">
                              <span>Partner @ Early Stage VC Fund</span>
                              <span className="text-amber-300 font-mono font-bold">Booked 6:30 PM</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.widgetType === "ideathons" && (
                        <div className="flex flex-col gap-5">
                          <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/30 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-mono text-red-400 font-bold">48H SPRINT TIMER</p>
                              <p className="text-xl font-mono font-extrabold text-white tracking-widest">14H : 32M : 09S</p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-mono text-neutral-400">PRIZE POOL</p>
                              <p className="text-lg font-bold text-red-400">₹2,50,000 CASH</p>
                            </div>
                          </div>

                          <div className="bg-white/[0.04] p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                            <span className="text-neutral-300 font-semibold">Latest MVP Submission: Team 04</span>
                            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono font-bold">VERIFIED</span>
                          </div>
                        </div>
                      )}

                      {item.widgetType === "pitch" && (
                        <div className="flex flex-col gap-5">
                          <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/30 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-mono text-purple-300 font-bold">DEMO DAY JURY DESK</p>
                              <p className="text-base font-bold text-white">5 Active VC Investors Seated</p>
                            </div>
                            <Trophy size={28} weight="fill" className="text-purple-400 animate-pulse" />
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/10">
                              <p className="text-neutral-400">TRACTION</p>
                              <p className="text-base font-extrabold text-purple-300">9.8 / 10</p>
                            </div>
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/10">
                              <p className="text-neutral-400">MARKET</p>
                              <p className="text-base font-extrabold text-purple-300">9.5 / 10</p>
                            </div>
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/10">
                              <p className="text-neutral-400">PITCH</p>
                              <p className="text-base font-extrabold text-purple-300">9.9 / 10</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {item.widgetType === "internships" && (
                        <div className="flex flex-col gap-4">
                          <div className="bg-teal-500/10 p-4 rounded-2xl border border-teal-500/30 flex items-center justify-between">
                            <div>
                              <p className="text-xs font-mono text-teal-300 font-bold">VETTED STARTUP ROLES</p>
                              <p className="text-base font-bold text-white">Direct Founder Placements</p>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                              ₹25k - ₹60k/mo
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between bg-white/[0.04] p-3 rounded-xl text-xs font-medium">
                              <span className="text-white font-bold">Founding Full-Stack Engineer</span>
                              <span className="text-teal-300 font-mono">Series-A FinTech</span>
                            </div>
                            <div className="flex items-center justify-between bg-white/[0.04] p-3 rounded-xl text-xs font-medium">
                              <span className="text-white font-bold">Product Growth Fellow</span>
                              <span className="text-teal-300 font-mono">AI Robotics Lab</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Interactive Bottom Bar */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs font-mono text-neutral-400 font-bold flex items-center gap-1.5">
                          <ShieldCheck size={16} style={{ color: item.accent }} /> INCLUDED WITH E-CELL MEMBERSHIP
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold transition-transform group-hover:translate-x-1" style={{ color: item.accent }}>
                          <span>Explore Module</span>
                          <ArrowRight size={14} weight="bold" />
                        </div>
                      </div>

                    </div>
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

