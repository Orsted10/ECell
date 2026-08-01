"use client";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    phase: "01",
    title: "Launch",
    date: "Aug 2026",
    description: "E-Cell officially launches at Chandigarh University UP. Founding members recruited, charter established.",
    status: "current",
  },
  {
    phase: "02",
    title: "Workshops",
    date: "Sep–Oct 2026",
    description: "Weekly hands-on workshops covering ideation frameworks, business model canvas, and design thinking.",
    status: "upcoming",
  },
  {
    phase: "03",
    title: "Ideathon",
    date: "Nov 2026",
    description: "48-hour campus-wide ideathon. 200+ participants. 40 teams. 5 winners receive incubation spots.",
    status: "upcoming",
  },
  {
    phase: "04",
    title: "Incubation",
    date: "Jan–Apr 2027",
    description: "Top teams enter a 4-month incubation program with mentors, resources, and office space on campus.",
    status: "upcoming",
  },
  {
    phase: "05",
    title: "Demo Day",
    date: "May 2027",
    description: "Cohort-1 founders pitch to 20+ investors. The beginning of something much larger.",
    status: "upcoming",
  },
];

export default function Roadmap() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Extra 350px offset guarantees Phase 05 scrolls comfortably past the right screen boundary
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
      style={{
        position: "relative",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Fixed header label */}
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          left: "clamp(1.25rem, 4vw, 4rem)",
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
            fontWeight: 700,
            color: "#FF5500",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          OUR JOURNEY // 2026–2027
        </h2>
      </div>

      <div
        ref={trackRef}
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          paddingInline: "clamp(1.25rem, 4vw, 4rem)",
          gap: "0",
        }}
      >
        {/* Left spacer */}
        <div style={{ minWidth: "10vw", flexShrink: 0 }} />

        {MILESTONES.map((m, i) => (
          <div
            key={m.phase}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0",
            }}
          >
            {/* Connector line before (except first) */}
            {i > 0 && (
              <div
                style={{
                  width: "8vw",
                  height: "2px",
                  background:
                    m.status === "done" || m.status === "current"
                      ? "linear-gradient(90deg, #FF5500, rgba(255,85,0,0.3))"
                      : "rgba(255,255,255,0.1)",
                  transition: "background 0.3s",
                  flexShrink: 0,
                }}
              />
            )}

            {/* Card */}
            <SpotlightCard
              style={{
                minWidth: "340px",
                maxWidth: "380px",
                padding: "2.5rem",
                borderRadius: "1.75rem",
                border: `1px solid ${m.status === "current" ? "#FF5500" : "rgba(255,255,255,0.08)"}`,
                background:
                  m.status === "current"
                    ? "rgba(255, 77, 0, 0.14)"
                    : "rgba(11, 14, 20, 0.8)",
                backdropFilter: "blur(24px)",
                position: "relative",
                flexShrink: 0,
                boxShadow:
                  m.status === "current"
                    ? "0 0 40px rgba(255, 77, 0, 0.35)"
                    : "0 10px 30px rgba(0,0,0,0.5)",

              }}
            >
              {/* Phase number */}
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: m.status === "done" ? "#FF5500" : m.status === "current" ? "#FF661A" : "var(--text-3)",
                  marginBottom: "1.25rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Phase {m.phase} {m.status === "current" && "· NOW"}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "var(--text-1)",
                  marginBottom: "0.5rem",
                }}
              >
                {m.title}
              </h3>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: m.status === "current" ? "#FF5500" : "var(--text-3)",
                  marginBottom: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {m.date}
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                }}
              >
                {m.description}
              </p>

              {m.status === "upcoming" && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    background: "rgba(17, 22, 34, 0.8)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "999px",
                    padding: "0.3rem 0.7rem",
                  }}
                >
                  Upcoming
                </div>
              )}
            </SpotlightCard>
          </div>
        ))}

        {/* Generous 35vw Right spacer container guarantees Phase 05 never clips */}
        <div style={{ minWidth: "35vw", flexShrink: 0 }} />
      </div>
    </section>
  );
}
