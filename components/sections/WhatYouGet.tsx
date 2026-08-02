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

                  {/* Right Column: Clean Visual Card showcasing REAL PROGRAM FRAMEWORKS (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <SpotlightCard
                      style={{
                        padding: "2.75rem",
                        borderRadius: "2rem",
                        border: `1.5px solid ${item.accent}50`,
                        background: `${item.accent}0D`,
                        backdropFilter: "blur(30px)",
                        position: "relative",
                        boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 35px ${item.glowColor}`,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.75rem",
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
                            color: "var(--text-2)",
                            background: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
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
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {item.cardDeliverables.map((deliv) => (
                          <div
                            key={deliv}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                              background: "rgba(255, 255, 255, 0.04)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              padding: "0.75rem 1rem",
                              borderRadius: "0.85rem",
                            }}
                          >
                            <Sparkle size={18} weight="fill" style={{ color: item.accent, flexShrink: 0 }} />
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
          );
        })}
      </div>
    </section>
  );
}

