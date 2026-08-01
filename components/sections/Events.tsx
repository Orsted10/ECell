"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { MapPin, CalendarBlank, ArrowRight } from "@phosphor-icons/react";

function pad(n: number) { return String(n).padStart(2, "0"); }

function Countdown({ target }: { target: Date }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, Math.floor((target.getTime() - Date.now()) / 1000));
      setTime({
        d: Math.floor(diff / 86400),
        h: Math.floor((diff % 86400) / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: diff % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      {[["d", time.d], ["h", time.h], ["m", time.m], ["s", time.s]].map(([label, val]) => (
        <div key={label as string} style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--text-1)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {pad(val as number)}
          </p>
          <p style={{ fontSize: "0.6rem", color: "var(--text-3)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.25rem" }}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

const UPCOMING_EVENT = {
  title: "Ideathon 2025",
  subtitle: "48 hours. One campus. Unlimited ideas.",
  date: "November 15–17, 2025",
  location: "CUUP Campus, Greater Noida",
  description:
    "Campus-wide innovation marathon where 200+ students form teams and tackle real-world problems. Cash prizes, incubation spots, and investor connections await.",
  target: new Date("2025-11-15T09:00:00"),
  tags: ["Hackathon", "Open to all", "Free entry"],
};

const PAST_EVENTS = [
  { title: "Founder Fireside Vol. 1", date: "Sep 2025", tag: "Talk", attendees: "320+" },
  { title: "Business Model Canvas Workshop", date: "Oct 2025", tag: "Workshop", attendees: "180+" },
  { title: "Startup Pitch Training", date: "Oct 2025", tag: "Training", attendees: "90+" },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border-soft)" }}
    >
      <div className="container-wide">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ marginBottom: "3.5rem" }}
        >
          <motion.p variants={fadeUp} className="label" style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>
            Upcoming
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-3">
            What&rsquo;s happening at E-Cell
          </motion.h2>
        </motion.div>

        {/* Featured upcoming event */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: "14px",
            border: "1px solid var(--border)",
            overflow: "hidden",
            background: "var(--surface)",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "0",
            }}
          >
            {/* Left content */}
            <div style={{ padding: "clamp(2rem,4vw,3.5rem)" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                {UPCOMING_EVENT.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-dim)",
                      background: "var(--accent-glow)",
                      borderRadius: "999px",
                      padding: "0.3rem 0.7rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "var(--text-1)",
                  marginBottom: "0.5rem",
                }}
              >
                {UPCOMING_EVENT.title}
              </h3>

              <p style={{ fontSize: "1rem", color: "var(--text-2)", marginBottom: "1.75rem", maxWidth: "48ch" }}>
                {UPCOMING_EVENT.description}
              </p>

              <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CalendarBlank size={15} color="var(--text-3)" />
                  <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>{UPCOMING_EVENT.date}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <MapPin size={15} color="var(--text-3)" />
                  <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>{UPCOMING_EVENT.location}</span>
                </div>
              </div>

              <a
                href="#join"
                id="events-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Register Now <ArrowRight size={15} weight="bold" />
              </a>
            </div>

            {/* Right — countdown */}
            <div
              style={{
                padding: "clamp(2rem,4vw,3.5rem)",
                borderLeft: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                minWidth: "220px",
              }}
              className="hidden md:flex"
            >
              <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Starts in
              </p>
              <Countdown target={UPCOMING_EVENT.target} />
            </div>
          </div>
        </motion.div>

        {/* Past events */}
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "1.25rem" }}>
            Past events
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)" }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {PAST_EVENTS.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                style={{
                  padding: "1.75rem",
                  background: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                  }}
                >
                  {event.tag}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {event.title}
                </h4>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{event.date}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    {event.attendees} attended
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
