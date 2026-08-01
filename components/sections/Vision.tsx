"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/components/motion/variants";

const PILLARS = [
  { number: "01", label: "Ideate", text: "Transform raw curiosity into structured ideas with mentors who have done it before." },
  { number: "02", label: "Build", text: "Access resources, labs, and peers to turn your concept into a working prototype." },
  { number: "03", label: "Launch", text: "Pitch to investors, find your first users, and step into the world as a founder." },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border-soft)" }}
    >
      <div className="container-wide">
        {/* Opening statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "5rem",
          }}
          className="md:grid-cols-2 grid-cols-1"
        >
          <motion.h2 variants={slideInLeft} className="display-2">
            Every successful founder started somewhere.
          </motion.h2>
          <motion.p
            variants={slideInRight}
            style={{
              fontSize: "1.1rem",
              color: "var(--text-2)",
              lineHeight: 1.75,
              maxWidth: "44ch",
            }}
          >
            Today, that place is here. E-Cell exists because the world needs more problem-solvers,
            more risk-takers, more builders willing to bet on an idea before anyone else does.
          </motion.p>
        </motion.div>

        {/* Main editorial image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            height: "clamp(300px, 45vw, 580px)",
            borderRadius: "14px",
            overflow: "hidden",
            marginBottom: "5rem",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src="/vision-img.png"
            alt="Chandigarh University campus at dusk"
            fill
            quality={90}
            style={{ objectFit: "cover" }}
          />
          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(8,10,15,0.7) 0%, transparent 50%)",
            }}
          />
          {/* Caption text */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              right: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                color: "var(--text-1)",
                maxWidth: "22ch",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              The future is built by those who don&rsquo;t wait for permission.
            </p>
          </div>
        </motion.div>

        {/* Three pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              variants={fadeUp}
              style={{
                padding: "2.5rem 2rem",
                borderTop: "1px solid var(--border)",
                borderRight: i < PILLARS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                }}
              >
                {pillar.number} {pillar.label}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--text-1)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.015em",
                }}
              >
                {pillar.label}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.7 }}>
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
