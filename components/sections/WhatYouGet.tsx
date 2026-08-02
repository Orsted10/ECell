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
  ShieldCheck,
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
    accent: "#98FF03",
    glowColor: "rgba(152, 255, 3, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(152, 255, 3, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
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
    accent: "#FF5500",
    glowColor: "rgba(255, 85, 0, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(255, 85, 0, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
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
    accent: "#00F0FF",
    glowColor: "rgba(0, 240, 255, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
    cardTitle: "Building Your Team",
    cardSubtitle: "COMMUNITY MATCHMAKING",
    cardBody: "Connecting technical, design, and business-minded students across departments.",
    cardDeliverables: [
      "Builder Mixers — Networking with motivated peers",
      "Skill Showcase — Presenting project ideas & needs",
      "Hackathon Team Pairing — Forming balanced teams",
      "Founder Roles Basics — Understanding equity & responsibilities",
    ],
    cardFooterLabel: "MATCHMAKING NETWORK",
  },
  {
    icon: Student,
    pillarNo: "04",
    title: "Skill Workshops",
    tagline: "Master modern tools & frameworks that matter.",
    body: "Hands-on technical and business bootcamps covering AI/ML integration, rapid prototyping, no-code, financial modeling, and pitch decks.",
    highlights: ["Hands-On Technical Sprints", "No-Code & AI Tools", "Pitch Deck Crafting"],
    accent: "#FFB800",
    glowColor: "rgba(255, 184, 0, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(255, 184, 0, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
    cardTitle: "Skills Acceleration",
    cardSubtitle: "PRACTICAL WORKSHOPS",
    cardBody: "Targeted learning modules designed to teach practical building and startup execution.",
    cardDeliverables: [
      "AI & No-Code Sprints — Rapid MVP development",
      "Pitch Deck Design — Structuring a compelling narrative",
      "Financial Basics — Unit economics & budgeting",
      "Product Strategy — User interviews & feedback loops",
    ],
    cardFooterLabel: "SKILLS BOOTCAMP TRACK",
  },
  {
    icon: Lightning,
    pillarNo: "05",
    title: "Hackathons",
    tagline: "Build, ship, and compete under extreme time pressure.",
    body: "High-energy campus hackathons and ideathons with real problem statements, industry mentors, cash prizes, and incubation grants.",
    highlights: ["48-Hour Build Sprints", "Cash Prizes & Grants", "Direct Investor Access"],
    accent: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
    cardTitle: "Sprint to MVP",
    cardSubtitle: "HACKATHONS & IDEATHONS",
    cardBody: "Intense building competitions designed to turn raw energy into working products.",
    cardDeliverables: [
      "Problem Statements — Solved with real-world focus",
      "Mentor Office Hours — Instant guidance during builds",
      "Live Demo Pitches — Presenting to guest judges",
      "Fast-Track Incubation — Winners advance to cohort",
    ],
    cardFooterLabel: "CAMPUS HACKATHON SERIES",
  },
  {
    icon: Trophy,
    pillarNo: "06",
    title: "Pitch Competitions",
    tagline: "Present your venture to active angel investors & VCs.",
    body: "Annual flagships where top campus teams pitch for seed funding, mentorship packages, cloud credits, and national recognition.",
    highlights: ["Seed Funding Opportunities", "Cloud & Tech Credits", "National Recognition"],
    accent: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
    cardTitle: "Venture Showcase",
    cardSubtitle: "INVESTOR PITCH DAYS",
    cardBody: "Formal pitch events matching advanced student teams with early-stage investors.",
    cardDeliverables: [
      "Investor Decks — Polished presentations for VCs",
      "Executive Summaries — One-page venture briefs",
      "Q&A Defense Prep — Handling investor questions",
      "Follow-up Connections — Intro meetings post-event",
    ],
    cardFooterLabel: "INVESTOR DEMO DAY",
  },
  {
    icon: Briefcase,
    pillarNo: "07",
    title: "Venture Network",
    tagline: "Direct intros to angel networks, VCs & startup hubs.",
    body: "A lifelong network of alumni founders, angel investors, corporate partners, and ecosystem hubs supporting your venture post-graduation.",
    highlights: ["Alumni Founder Network", "Angel & VC Intros", "Corporate Partnerships"],
    accent: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 8, 13, 0.98) 100%)",
    cardTitle: "Ecosystem Access",
    cardSubtitle: "LONG-TERM SUPPORT",
    cardBody: "Ongoing backing for CUUP founders through our extended partner ecosystem.",
    cardDeliverables: [
      "Angel & VC Intros — Warm intros to active funds",
      "Perks & Credits — Discounted cloud & SaaS tools",
      "Alumni Advisory — Advice from past student founders",
      "Ecosystem Events — Access to regional startup hubs",
    ],
    cardFooterLabel: "VENTURE NETWORK ACCESS",
  },
];

export default function WhatYouGet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeCard, setActiveCard] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length === 0) return;

      const totalDuration = OFFERINGS.length * 3.5;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalDuration * 100}vh`,
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * OFFERINGS.length),
              OFFERINGS.length - 1
            );
            setActiveCard(idx);
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

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

        tl.to(
          card,
          {
            yPercent: 0,
            duration: 2.0,
          },
          `slide-${i}`
        );

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
      className="relative overflow-hidden bg-[#030712] pt-28 pb-20"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Background Ambient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-30 blur-[140px]"
          style={{
            background: "radial-gradient(circle at 35% 30%, rgba(152, 255, 3, 0.3) 0%, transparent 60%), radial-gradient(circle at 65% 30%, rgba(255, 85, 0, 0.25) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#98FF03_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Standalone Section Header */}
      <div className="container-wide relative z-10 text-center pb-16 sm:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col gap-6 items-center"
        >
          <motion.div variants={fadeUp} className="badge-agencyio badge-agencyio-lime">
            <Sparkle size={16} weight="fill" className="text-[#98FF03] animate-pulse" />
            <span>OUR LAUNCHPAD PILLARS // 01–07</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-outfit text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none drop-shadow-2xl max-w-5xl"
          >
            Everything you need to go from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#98FF03] via-[#B2FF43] to-[#FF5500]">
              zero to breakout founder.
            </span>
          </motion.h2>
        </motion.div>
      </div>

      {/* PINNED DRAWER CONTAINER */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-[100vh] flex flex-col justify-between items-center py-6 px-4 sm:px-8"
      >
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto">
          {OFFERINGS.map((item, i) => {
            const Icon = item.icon;
            const isFirst = i === 0;

            return (
              <div
                key={item.pillarNo}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="absolute inset-0 m-auto w-full flex items-center justify-center pointer-events-auto"
                style={{
                  zIndex: i + 1,
                  transform: isFirst ? "translateY(0%)" : "translateY(115%)",
                  willChange: "transform, opacity, filter",
                }}
              >
                <div
                  className="w-full rounded-[2.5rem] overflow-hidden"
                  style={{
                    padding: "2.75rem",
                    boxSizing: "border-box",
                    background: item.bgGradient,
                    border: `1.5px solid ${item.accent}60`,
                    backdropFilter: "blur(40px)",
                    boxShadow: `0 30px 80px rgba(0, 0, 0, 0.9), 0 0 45px ${item.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Pillar Information */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                          style={{
                            background: `${item.accent}25`,
                            border: `1.5px solid ${item.accent}70`,
                            boxShadow: `0 0 25px ${item.accent}40`,
                          }}
                        >
                          <Icon size={30} weight="fill" style={{ color: item.accent }} />
                        </div>
                        <span
                          className="font-mono text-sm font-black uppercase tracking-[0.2em]"
                          style={{ color: item.accent }}
                        >
                          PILLAR {item.pillarNo} OF 07
                        </span>
                      </div>

                      <h3 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                        {item.title}
                      </h3>

                      <p className="font-outfit text-base sm:text-lg font-bold text-slate-200 leading-relaxed">
                        {item.body}
                      </p>

                      <div className="flex flex-col gap-3 pt-2">
                        {item.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle size={20} weight="fill" style={{ color: item.accent }} className="flex-shrink-0" />
                            <span className="font-outfit text-sm font-bold text-slate-200">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Framework Deliverables */}
                    <div className="lg:col-span-7">
                      <SpotlightCard
                        style={{
                          padding: "2.25rem",
                          boxSizing: "border-box",
                          borderRadius: "2rem",
                          background: "rgba(3, 7, 18, 0.95)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(30px)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.5rem",
                        }}
                      >
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                          <div>
                            <span
                              className="font-mono text-xs font-black uppercase tracking-widest block"
                              style={{ color: item.accent }}
                            >
                              {item.cardSubtitle}
                            </span>
                            <h4 className="font-outfit text-2xl font-black text-white mt-1">
                              {item.cardTitle}
                            </h4>
                          </div>

                          <span
                            className="px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase tracking-wider text-white whitespace-nowrap flex-shrink-0 shadow-lg"
                            style={{
                              background: item.accent,
                              color: item.accent === "#98FF03" ? "#000" : "#FFF",
                            }}
                          >
                            STAGE {item.pillarNo}
                          </span>
                        </div>

                        <div className="flex flex-col gap-3">
                          {item.cardDeliverables.map((deliv, idx) => {
                            const [label, desc] = deliv.split(" — ");
                            return (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors"
                              >
                                <CheckCircle size={20} weight="fill" style={{ color: item.accent }} className="flex-shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                  <span className="font-outfit text-sm font-black text-white">
                                    {label}
                                  </span>
                                  {desc && (
                                    <span className="font-outfit text-xs font-bold text-slate-400 mt-0.5">
                                      {desc}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                          <span
                            className="font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2"
                            style={{ color: item.accent }}
                          >
                            <ShieldCheck size={18} weight="fill" /> {item.cardFooterLabel}
                          </span>
                          <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                            CUUP LAUNCHPAD →
                          </span>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HUD ACTION BAR */}
        <div className="relative z-30 w-full max-w-6xl flex items-center justify-center pt-2">
          <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-[#06080D]/90 border border-white/20 backdrop-blur-xl shadow-2xl">
            <span className="font-mono text-sm font-black text-white">
              PILLAR <span className="font-mono text-base font-black" style={{ color: OFFERINGS[activeCard].accent }}>0{activeCard + 1}</span> / 07
            </span>
            <div className="w-36 h-2.5 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${((activeCard + 1) / OFFERINGS.length) * 100}%`,
                  background: OFFERINGS[activeCard].accent,
                  boxShadow: `0 0 14px ${OFFERINGS[activeCard].accent}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
