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
  CheckCircle,
  ShieldCheck
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
    glowColor: "rgba(255, 85, 0, 0.45)",
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
    glowColor: "rgba(0, 240, 255, 0.45)",
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
    glowColor: "rgba(255, 184, 0, 0.45)",
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
    glowColor: "rgba(16, 185, 129, 0.45)",
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
    glowColor: "rgba(168, 85, 247, 0.45)",
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
      // Distance calculation with generous 900px buffer ensures Phase 05 scrolls 100% into the viewport center
      const distance = trackRef.current!.scrollWidth - window.innerWidth + 900;

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
      className="relative overflow-hidden bg-[#05070B] pt-56 sm:pt-72 pb-24"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Background Ambient Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[750px] h-[750px] opacity-25 blur-[180px] bg-gradient-to-r from-[#FF5500] via-[#FF8800] to-[#00F0FF]" />
        <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] opacity-20 blur-[180px] bg-gradient-to-r from-[#10B981] via-[#A855F7] to-[#FF5500]" />
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#FF5500_1.5px,transparent_1.5px)] [background-size:36px_36px]" />
      </div>

      {/* Pinned 100vh Layout Container */}
      <div className="relative z-10 w-full h-[100vh] overflow-hidden flex flex-col justify-between py-10 px-6 sm:px-16">
        {/* TOP STATIONARY SECTION HEADER (220px+ Top Spacing — 100% Zero HUD Overlap) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/15 pt-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#FF5500]/60 bg-[#FF5500]/15 backdrop-blur-xl shadow-[0_0_25px_rgba(255,85,0,0.35)] w-fit">
              <Sparkle size={16} weight="fill" className="text-[#FF5500] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#FF5500]">
                OUR JOURNEY // 2026–2027
              </span>
            </div>

            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
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

        {/* MIDDLE HORIZONTAL SCROLLING TRACK — 560px Wide Cards + Single-Line Pill Badges */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto relative pt-8">
          <div
            ref={trackRef}
            className="flex items-center gap-14 sm:gap-20 px-8 sm:px-16 relative"
          >
            {MILESTONES.map((m, i) => {
              const Icon = m.icon;
              const isCurrent = m.status === "current";

              return (
                <div key={m.phase} className="flex items-center gap-14 sm:gap-20 flex-shrink-0 relative group">
                  {/* Connecting Neon Beam Line */}
                  {i > 0 && (
                    <div className="w-24 sm:w-32 h-2 relative flex-shrink-0 overflow-hidden rounded-full bg-white/10 shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${MILESTONES[i - 1].accent}, ${m.accent})`,
                          boxShadow: `0 0 20px ${m.accent}`,
                        }}
                      />
                    </div>
                  )}

                  {/* Milestone Card — 560px Width + Explicit 2.75rem Padding */}
                  <SpotlightCard
                    style={{
                      width: "560px",
                      padding: "2.75rem",
                      borderRadius: "2.5rem",
                      border: `2px solid ${isCurrent ? m.accent : "rgba(255, 255, 255, 0.2)"}`,
                      background: isCurrent
                        ? `linear-gradient(180deg, rgba(255, 85, 0, 0.22) 0%, rgba(12, 16, 28, 0.98) 100%)`
                        : `linear-gradient(180deg, rgba(16, 22, 36, 0.98) 0%, rgba(8, 11, 18, 0.99) 100%)`,
                      backdropFilter: "blur(40px)",
                      boxShadow: isCurrent
                        ? `0 35px 90px rgba(255, 85, 0, 0.45), 0 0 40px ${m.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.4)`
                        : `0 30px 80px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "1.75rem",
                      boxSizing: "border-box",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top Ambient Glow */}
                    <div
                      className="absolute -top-32 left-1/2 -translate-x-1/2 w-4/5 h-44 blur-[80px] pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                      style={{ background: m.accent }}
                    />

                    {/* Top Eyebrow Row — Eyebrow Label (Left) + SINGLE-LINE Pill Badge & Icon (Right) */}
                    <div className="flex items-center justify-between gap-4 w-full relative z-10">
                      <span
                        className="font-mono text-xs sm:text-sm font-black uppercase tracking-[0.2em]"
                        style={{ color: m.accent }}
                      >
                        STAGE {m.phase} • {m.subtitle}
                      </span>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {/* Single-Line Pill Badge — 100% Unsquished (whitespace-nowrap) */}
                        <span
                          className="px-5 py-2 rounded-full font-mono text-xs font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                          style={{
                            background: isCurrent ? m.accent : "rgba(255, 255, 255, 0.12)",
                            border: `1.5px solid ${m.accent}80`,
                          }}
                        >
                          {isCurrent && <span className="h-2 w-2 rounded-full bg-white animate-ping flex-shrink-0" />}
                          {m.tag}
                        </span>

                        {/* Icon Badge Container */}
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                          style={{
                            background: `${m.accent}25`,
                            border: `1.5px solid ${m.accent}70`,
                            boxShadow: `0 0 25px ${m.accent}50`,
                          }}
                        >
                          <Icon size={26} weight="fill" style={{ color: m.accent }} />
                        </div>
                      </div>
                    </div>

                    {/* Main Deliverable Title */}
                    <h3 className="font-outfit text-4xl sm:text-5xl font-black text-white tracking-tight leading-none drop-shadow-md relative z-10">
                      {m.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bold relative z-10">
                      {m.description}
                    </p>

                    {/* Highlights List — Matching Stage 04 Feature Rows */}
                    <div className="flex flex-col gap-3 w-full relative z-10">
                      {m.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.09] transition-colors"
                        >
                          <CheckCircle size={20} weight="fill" style={{ color: m.accent }} className="flex-shrink-0" />
                          <span className="font-outfit text-sm font-bold text-white tracking-wide">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Footer Bar — Spaced Row with 100% Zero Truncation */}
                    <div className="pt-5 border-t border-white/15 flex items-center justify-between gap-4 w-full relative z-10">
                      <span
                        className="font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2"
                        style={{ color: m.accent }}
                      >
                        <ShieldCheck size={18} weight="fill" /> {m.subtitle} TRACK
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:text-[#FF5500] transition-colors flex-shrink-0">
                        {m.metric} →
                      </span>
                    </div>
                  </SpotlightCard>
                </div>
              );
            })}

            {/* Generous 50vw Right Spacer Container — Guarantees Phase 05 Scrolls 100% to Screen Center */}
            <div className="min-w-[50vw] flex-shrink-0" />
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
