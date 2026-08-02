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
  CheckCircle
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
      // Extra offset guarantees Phase 05 scrolls comfortably past the right boundary
      const distance = trackRef.current!.scrollWidth - window.innerWidth + 400;

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
      className="relative overflow-hidden bg-[#05070B]"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
    >
      {/* Background Ambient Spotlights & Tech Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] opacity-25 blur-[150px] bg-gradient-to-r from-[#FF5500] to-[#00F0FF]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] opacity-20 blur-[150px] bg-gradient-to-r from-[#10B981] to-[#A855F7]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Pinned Timeline Track (100vh Viewport) */}
      <div
        ref={trackRef}
        className="flex h-[100vh] items-center relative z-10 px-6 sm:px-12"
      >
        {/* Left Header Spacer Container */}
        <div className="min-w-[400px] sm:min-w-[480px] pr-12 sm:pr-16 flex-shrink-0 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#FF5500]/60 bg-[#FF5500]/15 backdrop-blur-xl shadow-[0_0_25px_rgba(255,85,0,0.35)] w-fit">
            <Sparkle size={16} weight="fill" className="text-[#FF5500] animate-pulse" />
            <span className="font-mono text-xs font-black uppercase tracking-[0.25em] text-[#FF5500]">
              OUR JOURNEY // 2026–2027
            </span>
          </div>

          <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] drop-shadow-2xl">
            Building the future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF8800] to-[#00F0FF]">
              milestone by milestone.
            </span>
          </h2>

          <p className="text-slate-100 text-base sm:text-lg font-bold leading-relaxed max-w-sm drop-shadow-sm">
            From official campus launch to venture demo day — follow our structured roadmap for student founders.
          </p>

          {/* Swipe indicator pill */}
          <div className="flex items-center gap-3 pt-2">
            <span className="font-mono text-xs font-black text-slate-100 uppercase tracking-widest flex items-center gap-2">
              SCROLL HORIZONTALLY <ArrowRight size={16} className="text-[#FF5500] animate-bounce-x" />
            </span>
          </div>
        </div>

        {/* Milestone Timeline Cards Track */}
        <div className="flex items-center gap-8 sm:gap-12 relative">
          {MILESTONES.map((m, i) => {
            const Icon = m.icon;
            const isCurrent = m.status === "current";

            return (
              <div key={m.phase} className="flex items-center gap-8 sm:gap-12 flex-shrink-0 relative group">
                {/* Connecting Laser Beam Line between cards */}
                {i > 0 && (
                  <div className="w-16 sm:w-24 h-1 relative flex-shrink-0 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{
                        background: `linear-gradient(90deg, ${MILESTONES[i - 1].accent}, ${m.accent})`,
                        boxShadow: `0 0 12px ${m.accent}`,
                      }}
                    />
                  </div>
                )}

                {/* Milestone Holographic Card */}
                <SpotlightCard
                  className="w-[360px] sm:w-[420px] rounded-[2.2rem] p-8 sm:p-10 border-2 transition-all duration-500 relative flex flex-col justify-between overflow-hidden cursor-pointer"
                  style={{
                    background: isCurrent
                      ? `linear-gradient(180deg, rgba(255, 85, 0, 0.18) 0%, rgba(10, 13, 20, 0.95) 100%)`
                      : `linear-gradient(180deg, rgba(15, 20, 34, 0.95) 0%, rgba(8, 11, 18, 0.98) 100%)`,
                    borderColor: isCurrent ? m.accent : "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(30px)",
                    boxShadow: isCurrent
                      ? `0 25px 70px rgba(255, 85, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)`
                      : `0 20px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                  }}
                >
                  {/* Glowing Top Ambient Spotlight */}
                  <div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-36 blur-[60px] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ background: m.accent }}
                  />

                  {/* Corner Watermark Phase Number */}
                  <div className="absolute top-4 right-6 font-mono text-8xl font-black opacity-[0.05] text-white select-none pointer-events-none">
                    {m.phase}
                  </div>

                  <div>
                    {/* Header Row: Phase Tag & Icon */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <span
                        className="px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase tracking-wider text-white shadow-lg flex items-center gap-2"
                        style={{
                          background: isCurrent ? m.accent : "rgba(255, 255, 255, 0.1)",
                          border: `1px solid ${m.accent}66`,
                        }}
                      >
                        {isCurrent && <span className="h-2 w-2 rounded-full bg-white animate-ping" />}
                        PHASE {m.phase} // {m.tag}
                      </span>

                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `${m.accent}25`,
                          border: `1.5px solid ${m.accent}60`,
                          boxShadow: `0 0 20px ${m.accent}40`,
                        }}
                      >
                        <Icon size={26} weight="fill" style={{ color: m.accent }} />
                      </div>
                    </div>

                    {/* Milestone Title */}
                    <h3 className="font-outfit text-3xl font-black text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                      {m.title}
                    </h3>

                    {/* Subtitle & Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">
                        {m.subtitle}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span
                        className="font-mono text-xs font-black px-2.5 py-0.5 rounded-md bg-white/[0.08] border border-white/15"
                        style={{ color: m.accent }}
                      >
                        {m.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-bold mb-6">
                      {m.description}
                    </p>
                  </div>

                  {/* Footer Metric Bar */}
                  <div
                    className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10"
                  >
                    <span className="font-mono text-xs font-bold text-slate-300 uppercase">Target Outcome:</span>
                    <span
                      className="font-mono text-xs font-black px-3 py-1 rounded-lg bg-white/[0.08] border border-white/15 text-white"
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

        {/* Generous 35vw Right spacer container guarantees Phase 05 never clips */}
        <div className="min-w-[35vw] flex-shrink-0" />
      </div>
    </section>
  );
}
