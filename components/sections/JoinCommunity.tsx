"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const BENEFITS = ["Founders", "Builders", "Leaders", "Disruptors", "Innovators", "Dreamers"];

export default function JoinCommunity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % BENEFITS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="join"
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border-soft)",
        background: "var(--bg)",
        textAlign: "center",
      }}
    >
      <div className="container-wide" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem" }}>
        {/* Main animated headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text-1)",
              maxWidth: "16ch",
              margin: "0 auto",
            }}
          >
            Join a community
            <br />
            of future
            <br />
            <span style={{ display: "inline-block", minWidth: "6ch", color: "var(--accent)", position: "relative", height: "1.1em" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={BENEFITS[index]}
                  initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "inline-block", position: "absolute", left: 0 }}
                >
                  {BENEFITS[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </motion.div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "700px",
          }}
        >
          {[
            "Real mentorship",
            "Startup exposure",
            "Peer network",
            "Investor access",
            "Campus recognition",
            "Industry connections",
          ].map((b) => (
            <span
              key={b}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text-2)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "0.4rem 1rem",
                background: "var(--surface)",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontSize: "1.05rem",
            color: "var(--text-2)",
            maxWidth: "46ch",
            lineHeight: 1.75,
          }}
        >
          Applications are open to all students at Chandigarh University UP, regardless of
          background, year, or branch. All you need is curiosity and the willingness to build.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:ecell@cuup.ac.in"
            id="join-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1rem 2.25rem",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.88";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Join E-Cell <ArrowRight size={17} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
