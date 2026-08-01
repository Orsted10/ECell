"use client";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    phase: "01",
    title: "Launch",
    date: "Aug 2025",
    description: "E-Cell officially launches at Chandigarh University UP. Founding members recruited, charter established.",
    status: "done",
  },
  {
    phase: "02",
    title: "Workshops",
    date: "Sep–Oct 2025",
    description: "Weekly hands-on workshops covering ideation frameworks, business model canvas, and design thinking.",
    status: "done",
  },
  {
    phase: "03",
    title: "Ideathon",
    date: "Nov 2025",
    description: "48-hour campus-wide ideathon. 200+ participants. 40 teams. 5 winners receive incubation spots.",
    status: "current",
  },
  {
    phase: "04",
    title: "Incubation",
    date: "Jan–Apr 2026",
    description: "Top teams enter a 4-month incubation program with mentors, resources, and office space on campus.",
    status: "upcoming",
  },
  {
    phase: "05",
    title: "Demo Day",
    date: "May 2026",
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
      const distance = trackRef.current!.scrollWidth - window.innerWidth;

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
        borderTop: "1px solid var(--border-soft)",
        background: "var(--surface)",
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
            fontWeight: 600,
            color: "var(--text-2)",
            letterSpacing: "-0.01em",
          }}
        >
          Our Journey
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
        <div style={{ minWidth: "10vw" }} />

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
                  height: "1px",
                  background:
                    m.status === "done"
                      ? "var(--accent)"
                      : "var(--border)",
                  transition: "background 0.3s",
                  flexShrink: 0,
                }}
              />
            )}

            {/* Card */}
            <div
              style={{
                minWidth: "340px",
                maxWidth: "380px",
                padding: "2.5rem",
                borderRadius: "14px",
                border: `1px solid ${m.status === "current" ? "var(--accent)" : "var(--border)"}`,
                background:
                  m.status === "current"
                    ? "var(--accent-dim)"
                    : m.status === "done"
                    ? "var(--surface-2)"
                    : "var(--surface)",
                position: "relative",
                flexShrink: 0,
                boxShadow:
                  m.status === "current"
                    ? "0 0 40px var(--accent-glow)"
                    : "none",
              }}
            >
              {/* Phase number */}
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: m.status === "done" ? "var(--accent)" : m.status === "current" ? "var(--accent)" : "var(--text-3)",
                  marginBottom: "1.25rem",
                }}
              >
                Phase {m.phase} {m.status === "current" && "· Now"}
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
                  fontSize: "0.8rem",
                  color: "var(--text-3)",
                  marginBottom: "1.25rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
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
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    padding: "0.3rem 0.7rem",
                  }}
                >
                  Upcoming
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div style={{ minWidth: "10vw" }} />
      </div>
    </section>
  );
}
