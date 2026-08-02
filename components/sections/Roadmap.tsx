"use client";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { 
  RocketLaunch, 
  Lightbulb, 
  Trophy, 
  Cpu, 
  TrendUp, 
  Sparkle,
  ArrowRight,
  Sparkle as SparkleIcon
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    phase: "01",
    title: "Official Launch",
    subtitle: "CHARTER & INCEPTION",
    date: "AUG 2026",
    description: "E-Cell officially launches at Chandigarh University UP. Founding members recruited, charter established, and builder community ignited.",
    highlights: [
      "Charter & Founding Team Recruited",
      "Chandigarh University UP Chapter",
      "Builder Ecosystem & Network Ignited"
    ],
    status: "current",
    accent: "#FF5500",
    icon: RocketLaunch,
    tag: "LIVE NOW",
    metric: "100+ FOUNDING BUILDERS",
  },
  {
    phase: "02",
    title: "Founder Workshops",
    subtitle: "SKILL ACCELERATION",
    date: "SEP–OCT 2026",
    description: "Weekly hands-on masterclasses covering ideation frameworks, business model canvas, rapid prototyping, and design thinking.",
    highlights: [
      "Ideation & Product Frameworks",
      "Business Model Canvas Sprints",
      "Rapid Prototyping Masterclasses"
    ],
    status: "upcoming",
    accent: "#00F0FF",
    icon: Lightbulb,
    tag: "UPCOMING",
    metric: "8 MASTERCLASS SPRINTS",
  },
  {
    phase: "03",
    title: "48H Ideathon",
    subtitle: "BUILD & PITCH",
    date: "NOV 2026",
    description: "48-hour campus-wide hackathon and ideathon. 200+ participants, 40 builder teams. Top 5 winners receive incubation spots.",
    highlights: [
      "200+ Campus Participants",
      "40 Active Builder Teams",
      "5 Incubation Spot Grants"
    ],
    status: "upcoming",
    accent: "#FFB800",
    icon: Trophy,
    tag: "UPCOMING",
    metric: "200+ PARTICIPANTS",
  },
  {
    phase: "04",
    title: "Incubation Track",
    subtitle: "0 TO 1 PRODUCT BUILD",
    date: "JAN–APR 2027",
    description: "Top teams enter a 4-month intensive incubation program with 1-on-1 industry mentors, legal/tech resources, and dedicated office space.",
    highlights: [
      "4-Month Intensive Program",
      "1-on-1 Industry Mentorship",
      "Dedicated Campus Office Space"
    ],
    status: "upcoming",
    accent: "#10B981",
    icon: Cpu,
    tag: "UPCOMING",
    metric: "4 MONTHS MENTORSHIP",
  },
  {
    phase: "05",
    title: "Venture Demo Day",
    subtitle: "INVESTOR PITCH",
    date: "MAY 2027",
    description: "Cohort-1 founders pitch directly to 20+ top-tier angel investors and VCs. The launchpad for venture-backed breakout startups.",
    highlights: [
      "Pitch to 20+ Angel VCs",
      "Cohort-1 Venture Showcase",
      "Pre-Seed & Seed Funding"
    ],
    status: "upcoming",
    accent: "#A855F7",
    icon: TrendUp,
    tag: "UPCOMING",
    metric: "20+ INVESTOR VCS",
  },
];

export default function Roadmap() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Offset guarantees Phase 05 scrolls comfortably past the right boundary
      const distance = trackRef.current!.scrollWidth - window.innerWidth + 350;

      gsap.to(trackRef.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, [shouldReduce]);

  return (
    <section
      id="roadmap"
      ref={wrapRef}
      className="relative overflow-hidden bg-[#05070B] pt-32 sm:pt-44 pb-16"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Background Ambient Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] opacity-20 blur-[160px] bg-gradient-to-r from-[#FF5500] to-[#00F0FF]" />
        <div className="absolute bottom-1/4 right-1/3 w-[650px] h-[650px] opacity-15 blur-[160px] bg-gradient-to-r from-[#10B981] to-[#A855F7]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Pinned 100vh Layout Container */}
      <div className="relative z-10 w-full h-[100vh] overflow-hidden flex flex-col justify-between py-6 px-6 sm:px-16">
        {/* TOP STATIONARY SECTION HEADER (Generous Top Margin — 100% Zero Collision) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/15">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#FF5500]/60 bg-[#FF5500]/15 backdrop-blur-xl shadow-[0_0_25px_rgba(255,85,0,0.35)] w-fit">
              <Sparkle size={16} weight="fill" className="text-[#FF5500] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#FF5500]">
                OUR JOURNEY // 2026–2027
              </span>
            </div>

            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
              Building the future,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF8800] to-[#00F0FF]">
                milestone by milestone.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 pb-2">
            <span className="font-mono text-xs sm:text-sm font-black text-slate-200 uppercase tracking-widest flex items-center gap-2">
              SCROLL HORIZONTALLY <ArrowRight size={18} className="text-[#FF5500] animate-bounce-x" />
            </span>
          </div>
        </div>

        {/* MIDDLE HORIZONTAL SCROLLING TRACK — Premium Cards matching Stage 04 Framework Design System */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto relative pt-6">
          <div
            ref={trackRef}
            className="flex items-center gap-12 sm:gap-16 px-8 sm:px-16 relative"
          >
            {MILESTONES.map((m, i) => {
              const isCurrent = m.status === "current";

              return (
                <div key={m.phase} className="flex items-center gap-12 sm:gap-16 flex-shrink-0 relative group">
                  {/* Connecting Laser Line between cards */}
                  {i > 0 && (
                    <div className="w-20 sm:w-28 h-2 relative flex-shrink-0 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${MILESTONES[i - 1].accent}, ${m.accent})`,
                          boxShadow: `0 0 16px ${m.accent}`,
                        }}
                      />
                    </div>
                  )}

                  {/* Milestone Card — Premium Stage 04 Framework Design System (Explicit Inline Padding = 100% Zero Cutoff) */}
                  <SpotlightCard
                    style={{
                      width: "480px",
                      padding: "2.5rem",
                      borderRadius: "2.25rem",
                      border: `1.5px solid ${isCurrent ? m.accent : "rgba(255, 255, 255, 0.18)"}`,
                      background: isCurrent
                        ? `linear-gradient(180deg, rgba(255, 85, 0, 0.16) 0%, rgba(10, 14, 24, 0.98) 100%)`
                        : `linear-gradient(180deg, rgba(14, 19, 32, 0.98) 0%, rgba(8, 11, 18, 0.99) 100%)`,
                      backdropFilter: "blur(40px)",
                      boxShadow: isCurrent
                        ? `0 30px 80px rgba(255, 85, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.35)`
                        : `0 25px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "1.5rem",
                      boxSizing: "border-box",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top Eyebrow Row */}
                    <div className="flex items-center justify-between gap-3 w-full">
                      <span
                        className="font-mono text-xs font-black uppercase tracking-[0.18em]"
                        style={{ color: m.accent }}
                      >
                        STAGE {m.phase} • {m.subtitle}
                      </span>

                      <span
                        className="px-3.5 py-1.5 rounded-full font-mono text-[0.7rem] font-black uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5 flex-shrink-0"
                        style={{
                          background: isCurrent ? m.accent : "rgba(255, 255, 255, 0.12)",
                          border: `1.5px solid ${m.accent}80`,
                        }}
                      >
                        {isCurrent && <span className="h-2 w-2 rounded-full bg-white animate-ping" />}
                        {m.tag}
                      </span>
                    </div>

                    {/* Main Deliverable Title */}
                    <h3 className="font-outfit text-3xl sm:text-4xl font-black text-white tracking-tight leading-none drop-shadow-md">
                      {m.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-slate-300 text-sm leading-relaxed font-bold">
                      {m.description}
                    </p>

                    {/* Highlights List — Matching Image 1 Pill Rows */}
                    <div className="flex flex-col gap-2.5 w-full">
                      {m.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors"
                        >
                          <SparkleIcon size={16} weight="fill" style={{ color: m.accent }} className="flex-shrink-0" />
                          <span className="font-outfit text-xs font-bold text-white tracking-wide truncate">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Footer Bar — Divided Line matching Image 1 */}
                    <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4 w-full">
                      <span
                        className="font-mono text-[0.7rem] font-black uppercase tracking-wider flex items-center gap-1.5 truncate"
                        style={{ color: m.accent }}
                      >
                        🛡️ {m.subtitle} TRACK
                      </span>
                      <span className="font-mono text-[0.7rem] font-black uppercase tracking-wider text-white hover:text-[#FF5500] transition-colors flex-shrink-0">
                        {m.metric} →
                      </span>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM HUD STATUS */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/85 border border-white/20 backdrop-blur-xl shadow-xl">
            <span className="font-mono text-xs sm:text-sm font-black text-slate-200">
              ROADMAP PROGRESS // 2026–2027
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
