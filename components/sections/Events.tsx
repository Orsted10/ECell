"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";
import { MapPin, CalendarBlank, ArrowRight, Sparkle, Fire } from "@phosphor-icons/react";

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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", textAlign: "center" }}>
      {[["DAYS", time.d], ["HRS", time.h], ["MINS", time.m], ["SECS", time.s]].map(([label, val]) => (
        <div
          key={label as string}
          style={{
            background: "rgba(255, 77, 0, 0.08)",
            border: "1px solid rgba(255, 77, 0, 0.25)",
            borderRadius: "0.85rem",
            padding: "0.85rem 0.5rem",
            boxShadow: "0 0 16px rgba(255, 77, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#FF5500",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            {pad(val as number)}
          </p>
          <p style={{ fontSize: "0.6rem", color: "var(--text-3)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.4rem", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}

const UPCOMING_EVENT = {
  title: "Ideathon 2026",
  subtitle: "48 hours. One campus. Unlimited ideas.",
  date: "November 15–17, 2026",
  location: "CUUP Campus, Greater Noida",
  description:
    "Campus-wide innovation marathon where 200+ students form teams and tackle real-world problems. Cash prizes, incubation spots, and investor connections await.",
  target: new Date("2026-11-15T09:00:00"),
  tags: ["Hackathon", "Open to all", "Free entry"],
};

const PAST_EVENTS = [
  { title: "Founders Charter Launch", date: "Aug 2026", tag: "Launch", attendees: "450+" },
  { title: "Founder Fireside Vol. 1", date: "Aug 2026", tag: "Talk", attendees: "320+" },
  { title: "Business Model Canvas Workshop", date: "Aug 2026", tag: "Workshop", attendees: "180+" },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad"
      style={{ background: "transparent" }}
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
          <motion.p variants={fadeUp} className="label" style={{ color: "#FF5500", marginBottom: "0.75rem" }}>
            LIVE CALENDAR // E-CELL EVENTS
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-3">
            What&rsquo;s happening at E-Cell
          </motion.h2>
        </motion.div>

        {/* Featured upcoming event card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: "1.75rem",
            border: "1px solid rgba(255, 77, 0, 0.3)",
            overflow: "hidden",
            background: "rgba(11, 14, 20, 0.85)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(255, 77, 0, 0.15)",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0",
            }}
            className="lg:grid-cols-12"
          >
            {/* Left content (7 cols) */}
            <div className="lg:col-span-7" style={{ padding: "clamp(2rem, 4vw, 3.5rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#00E676",
                    border: "1px solid rgba(0, 230, 118, 0.3)",
                    background: "rgba(0, 230, 118, 0.12)",
                    borderRadius: "999px",
                    padding: "0.35rem 0.85rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00E676", animation: "pulse 1.5s infinite" }} />
                  REGISTRATIONS OPEN
                </span>

                {UPCOMING_EVENT.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#FF5500",
                      border: "1px solid rgba(255, 85, 0, 0.25)",
                      background: "rgba(255, 85, 0, 0.08)",
                      borderRadius: "999px",
                      padding: "0.3rem 0.75rem",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text-1)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.05,
                }}
              >
                {UPCOMING_EVENT.title}
              </h3>

              <p style={{ fontSize: "1.05rem", color: "var(--text-2)", marginBottom: "2rem", maxWidth: "52ch", lineHeight: 1.65 }}>
                {UPCOMING_EVENT.description}
              </p>

              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CalendarBlank size={18} color="#FF5500" weight="bold" />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-1)", fontWeight: 600 }}>{UPCOMING_EVENT.date}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <MapPin size={18} color="#00C6FF" weight="bold" />
                  <span style={{ fontSize: "0.95rem", color: "var(--text-1)", fontWeight: 600 }}>{UPCOMING_EVENT.location}</span>
                </div>
              </div>

              <a
                href="#join"
                id="events-cta"
                className="group"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.75rem 0.75rem 0.75rem 2rem",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(255, 77, 0, 0.45)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseDown={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
                }}
                onMouseUp={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(255, 77, 0, 0.45)";
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255, 77, 0, 0.7)";
                }}
              >
                Register Now
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="group-hover:translate-x-1 group-hover:scale-105"
                >
                  <ArrowRight size={18} weight="bold" />
                </div>
              </a>
            </div>

            {/* Right — Live Countdown Timer (5 cols) */}
            <div
              className="lg:col-span-5"
              style={{
                padding: "clamp(2rem, 4vw, 3.5rem)",
                borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.5rem",
                background: "rgba(6, 7, 10, 0.6)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF5500", fontFamily: "var(--font-mono)" }}>
                  COUNTDOWN TO LAUNCH
                </p>
                <Fire size={18} color="#FF5500" weight="fill" />
              </div>
              <Countdown target={UPCOMING_EVENT.target} />
              <p style={{ fontSize: "0.8rem", color: "var(--text-3)", textAlign: "center", fontFamily: "var(--font-mono)" }}>
                200+ teams competing for incubation spots & prizes
              </p>
            </div>
          </div>
        </motion.div>

        {/* Past events */}
        <div>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "1.5rem", fontFamily: "var(--font-mono)" }}>
            PAST EVENT ARCHIVES
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {PAST_EVENTS.map((event) => (
              <motion.div
                key={event.title}
                variants={fadeUp}
                style={{
                  padding: "1.75rem",
                  borderRadius: "1.25rem",
                  background: "rgba(11, 14, 20, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                className="hover:-translate-y-1 hover:border-[#FF5500]"
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FF661A",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {event.tag}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-1)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {event.title}
                </h4>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.75rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-3)", fontFamily: "var(--font-mono)" }}>{event.date}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#00E676",
                      background: "rgba(0, 230, 118, 0.1)",
                      border: "1px solid rgba(0, 230, 118, 0.25)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "999px",
                      fontFamily: "var(--font-mono)",
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
