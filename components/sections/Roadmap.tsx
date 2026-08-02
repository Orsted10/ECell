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
  ArrowRight
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    phase: "01",
    title: "Official Launch",
    subtitle: "CHARTER & INCEPTION",
    date: "AUG 2026",
    description: "E-Cell officially launches at Chandigarh University UP. Founding members recruited, charter established, and builder community ignited.",
    status: "current",
    accent: "#FF5500",
    icon: RocketLaunch,
    tag: "LIVE NOW",
    metric: "100+ Founding Builders",
  },
  {
    phase: "02",
    title: "Founder Workshops",
    subtitle: "SKILL ACCELERATION",
    date: "SEP–OCT 2026",
    description: "Weekly hands-on masterclasses covering ideation frameworks, business model canvas, rapid prototyping, and design thinking.",
    status: "upcoming",
    accent: "#00F0FF",
    icon: Lightbulb,
    tag: "UPCOMING",
    metric: "8 Masterclass Sprints",
  },
  {
    phase: "03",
    title: "48H Ideathon",
    subtitle: "BUILD & PITCH",
    date: "NOV 2026",
    description: "48-hour campus-wide hackathon and ideathon. 200+ participants, 40 builder teams. Top 5 winners receive incubation spots.",
    status: "upcoming",
    accent: "#FFB800",
    icon: Trophy,
    tag: "UPCOMING",
    metric: "200+ Participants",
  },
  {
    phase: "04",
    title: "Incubation Track",
    subtitle: "0 TO 1 PRODUCT BUILD",
    date: "JAN–APR 2027",
    description: "Top teams enter a 4-month intensive incubation program with 1-on-1 industry mentors, legal/tech resources, and dedicated office space.",
    status: "upcoming",
    accent: "#10B981",
    icon: Cpu,
    tag: "UPCOMING",
    metric: "4 Months Mentorship",
  },
  {
    phase: "05",
    title: "Venture Demo Day",
    subtitle: "INVESTOR PITCH",
    date: "MAY 2027",
    description: "Cohort-1 founders pitch directly to 20+ top-tier angel investors and VCs. The launchpad for venture-backed breakout startups.",
    status: "upcoming",
    accent: "#A855F7",
    icon: TrendUp,
    tag: "UPCOMING",
    metric: "20+ Investor VCs",
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
      className="relative overflow-hidden bg-[#05070B] pt-32 sm:pt-44"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Background Ambient Spotlights & Tech Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-[650px] h-[650px] opacity-25 blur-[160px] bg-gradient-to-r from-[#FF5500] to-[#00F0FF]" />
        <div className="absolute bottom-1/4 right-1/3 w-[650px] h-[650px] opacity-20 blur-[160px] bg-gradient-to-r from-[#10B981] to-[#A855F7]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Pinned 100vh Layout Container */}
      <div className="relative z-10 w-full h-[100vh] overflow-hidden flex flex-col justify-between py-8 px-6 sm:px-16">
        {/* TOP STATIONARY SECTION HEADER (Generous Top Margin — 100% Zero Boundary Collision) */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 pb-6 border-b border-white/15">
          <div className="flex flex-col gap-3">
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

        {/* MIDDLE HORIZONTAL SCROLLING TRACK — Spacious Cards & Zero Text Cutoff */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto relative pt-4">
          <div
            ref={trackRef}
            className="flex items-center gap-12 sm:gap-20 px-8 sm:px-16 relative"
          >
            {MILESTONES.map((m, i) => {
              const Icon = m.icon;
              const isCurrent = m.status === "current";

              return (
                <div key={m.phase} className="flex items-center gap-12 sm:gap-20 flex-shrink-0 relative group">
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

                  {/* Milestone Card — Extra Width & Padding to Prevent Any Cutoff */}
                  <SpotlightCard
                    className="w-[440px] sm:w-[520px] rounded-[2.5rem] p-10 sm:p-12 border-2 transition-all duration-500 relative flex flex-col justify-between overflow-hidden cursor-pointer"
                    style={{
                      background: isCurrent
                        ? `linear-gradient(180deg, rgba(255, 85, 0, 0.20) 0%, rgba(10, 13, 20, 0.98) 100%)`
                        : `linear-gradient(180deg, rgba(15, 20, 34, 0.98) 0%, rgba(8, 11, 18, 0.99) 100%)`,
                      borderColor: isCurrent ? m.accent : "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(35px)",
                      boxShadow: isCurrent
                        ? `0 30px 80px rgba(255, 85, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.35)`
                        : `0 25px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                    }}
                  >
                    {/* Glowing Top Ambient Spotlight */}
                    <div
                      className="absolute -top-28 left-1/2 -translate-x-1/2 w-3/4 h-40 blur-[70px] pointer-events-none opacity-45 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ background: m.accent }}
                    />

                    {/* Corner Watermark Phase Number */}
                    <div className="absolute top-4 right-8 font-mono text-9xl font-black opacity-[0.05] text-white select-none pointer-events-none">
                      {m.phase}
                    </div>

                    <div>
                      {/* Top Meta Row — Generous Top Margin (No Border Touch!) */}
                      <div className="flex items-center justify-between gap-4 mb-6 relative z-10 pt-2">
                        <span
                          className="px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl flex items-center gap-2"
                          style={{
                            background: isCurrent ? m.accent : "rgba(255, 255, 255, 0.12)",
                            border: `1.5px solid ${m.accent}80`,
                          }}
                        >
                          {isCurrent && <span className="h-2.5 w-2.5 rounded-full bg-white animate-ping" />}
                          PHASE {m.phase} // {m.tag}
                        </span>

                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                          style={{
                            background: `${m.accent}25`,
                            border: `1.5px solid ${m.accent}70`,
                            boxShadow: `0 0 25px ${m.accent}50`,
                          }}
                        >
                          <Icon size={30} weight="fill" style={{ color: m.accent }} />
                        </div>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-outfit text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3 drop-shadow-md">
                        {m.title}
                      </h3>

                      {/* Subtitle & Date */}
                      <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <span className="font-mono text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest">
                          {m.subtitle}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span
                          className="font-mono text-xs sm:text-sm font-black px-3 py-1 rounded-md bg-white/[0.08] border border-white/20"
                          style={{ color: m.accent }}
                        >
                          {m.date}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-bold mb-8">
                        {m.description}
                      </p>
                    </div>

                    {/* Footer Target Outcome Bar — Stacked Flex Column so Text NEVER Cuts Off */}
                    <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                      <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Target Outcome:
                      </span>
                      <span
                        className="font-mono text-xs sm:text-sm font-black px-4 py-2 rounded-xl bg-white/[0.08] border border-white/20 text-white w-fit"
                        style={{ color: m.accent }}
                      >
                        {m.metric}
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
