"use client";
import { motion } from "motion/react";
import { LinkedinLogo } from "@phosphor-icons/react";
import { staggerContainer, fadeUp, scaleIn } from "@/components/motion/variants";

const TEAM = [
  {
    name: "Arjun Sharma",
    role: "President",
    expertise: "Product Strategy, Fundraising",
    bio: "B.Tech CSE student and two-time hackathon winner. Previously interned at a Series-B SaaS startup in Bengaluru.",
    linkedin: "#",
    initial: "A",
    color: "#4F8EF7",
  },
  {
    name: "Priya Nair",
    role: "Vice President — Operations",
    expertise: "Community Building, Events",
    bio: "Social entrepreneur passionate about connecting student talent with real-world problems. Runs a nonprofit mentoring program.",
    linkedin: "#",
    initial: "P",
    color: "#34D399",
  },
  {
    name: "Rohan Gupta",
    role: "Head of Incubation",
    expertise: "Business Development, Finance",
    bio: "Commerce graduate turned startup enthusiast. Helped three peers raise pre-seed funding in the last two years.",
    linkedin: "#",
    initial: "R",
    color: "#818CF8",
  },
  {
    name: "Shreya Verma",
    role: "Head of Design",
    expertise: "UX Research, Brand Design",
    bio: "Designer, thinker, and builder who believes aesthetics are not decoration but communication.",
    linkedin: "#",
    initial: "S",
    color: "#FCD34D",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-pad"
      style={{ borderTop: "1px solid var(--border-soft)", background: "var(--surface)" }}
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <motion.h2 variants={fadeUp} className="display-2" style={{ maxWidth: "18ch" }}>
            The people who make it happen.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "0.9rem", color: "var(--text-2)", maxWidth: "32ch", textAlign: "right" }}
          >
            A small team of dedicated students building a culture of entrepreneurship from the ground up.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--border)",
          }}
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              style={{
                background: "var(--surface-2)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
            >
              {/* Avatar — large editorial monogram */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "14px",
                  background: `${member.color}18`,
                  border: `1px solid ${member.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: member.color,
                  }}
                >
                  {member.initial}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--text-1)",
                    letterSpacing: "-0.015em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ fontSize: "0.8rem", color: member.color, fontWeight: 500 }}>
                  {member.role}
                </p>
              </div>

              <p style={{ fontSize: "0.8rem", color: "var(--text-3)", lineHeight: 1.6 }}>
                {member.expertise}
              </p>

              <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.65, flex: 1 }}>
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                aria-label={`${member.name} on LinkedIn`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.8rem",
                  color: "var(--text-3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  marginTop: "auto",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
              >
                <LinkedinLogo size={14} /> LinkedIn
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
