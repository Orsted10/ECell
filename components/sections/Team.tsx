"use client";
import { motion } from "motion/react";
import { LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import { staggerContainer, fadeUp, scaleIn } from "@/components/motion/variants";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const TEAM = [
  {
    name: "Shivam Kumar Tiwari",
    role: "President",
    expertise: "Executive Leadership, Ecosystem Strategy",
    bio: "Leading Chandigarh University E-Cell's vision to empower student innovators and build venture-backed startups across campus.",
    linkedin: "#",
    initial: "S",
    color: "#FF5500",
  },
  {
    name: "Alka Singh",
    role: "Vice-President",
    expertise: "Operations, Community Growth",
    bio: "Driving strategic operations, ecosystem partnerships, and student engagement initiatives across all departments.",
    linkedin: "#",
    initial: "A",
    color: "#0066FF",
  },
  {
    name: "Mohd Humza",
    role: "General Secretary",
    expertise: "Administration, Governance",
    bio: "Overseeing organizational governance, cohort execution, and inter-departmental communication.",
    linkedin: "#",
    initial: "M",
    color: "#00C896",
  },
  {
    name: "Radhika Yadav",
    role: "Marketing & PR Head",
    expertise: "Brand Strategy, Media & Outreach",
    bio: "Spearheading media relations, brand identity, and ecosystem outreach to amplify CUUP E-Cell's campus footprint.",
    linkedin: "#",
    initial: "R",
    color: "#FFB300",
  },
  {
    name: "Aditya Raj",
    role: "Events & Operations Lead",
    expertise: "Hackathons, Event Management",
    bio: "Orchestrating 48-hour ideathons, founder workshops, and demo days to connect student builders with top VCs.",
    linkedin: "#",
    initial: "A",
    color: "#9D4EDD",
  },
  {
    name: "Priyanchal Soni",
    role: "Technical Lead",
    expertise: "Full-Stack Architecture, Maker Labs",
    bio: "Architecting digital infrastructure, student maker portal, and technical incubation tools for campus founders.",
    linkedin: "#",
    initial: "P",
    color: "#00C6FF",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}
        >
          <div>
            <motion.p variants={fadeUp} className="label" style={{ color: "#FF5500", marginBottom: "0.75rem" }}>
              LEADERSHIP // STUDENT EXECUTIVE COMMITTEE
            </motion.p>
            <motion.h2 variants={fadeUp} className="display-2" style={{ maxWidth: "18ch" }}>
              The people who make it happen.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: "1rem", color: "var(--text-2)", maxWidth: "36ch", lineHeight: 1.6 }}
          >
            A dedicated team of student leaders constructing CUUP&rsquo;s premier entrepreneurship ecosystem from the ground up.
          </motion.p>
        </motion.div>

        {/* Team grid — 3 columns for 6 members */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              className="group"
            >
              {/* Outer Hardware Shell for Double-Bezel architecture */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "2rem",
                  padding: "0.45rem",
                  height: "100%",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s",
                  boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
                }}
                className="group-hover:-translate-y-2 group-hover:border-[rgba(255,85,0,0.45)]"
              >
                {/* Inner Core Card */}
                <SpotlightCard
                  style={{
                    background: "rgba(11, 14, 20, 0.94)",
                    borderRadius: "calc(2rem - 0.45rem)",
                    backdropFilter: "blur(20px)",
                    padding: "2rem 1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                    height: "100%",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)",
                  }}
                >
                  {/* Corner Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      right: "-30px",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${member.color}1E 0%, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Avatar — editorial monogram badge */}
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "1.25rem",
                      background: `linear-gradient(135deg, ${member.color}25 0%, ${member.color}08 100%)`,
                      border: `1.5px solid ${member.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "0.25rem",
                      boxShadow: `0 0 20px ${member.color}25`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "2rem",
                        fontWeight: 800,
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
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.015em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: member.color, fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                      {member.role}
                    </p>
                  </div>

                  <p style={{ fontSize: "0.78rem", color: "#9AA4B2", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                    {member.expertise}
                  </p>

                  <p style={{ fontSize: "0.88rem", color: "#9AA4B2", lineHeight: 1.6, flex: 1 }}>
                    {member.bio}
                  </p>

                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.6rem 1rem",
                      borderRadius: "999px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      fontSize: "0.78rem",
                      color: "#9AA4B2",
                      textDecoration: "none",
                      transition: "all 0.25s",
                      marginTop: "auto",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${member.color}25`;
                      (e.currentTarget as HTMLElement).style.borderColor = member.color;
                      (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.04)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#9AA4B2";
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <LinkedinLogo size={16} /> CONNECT
                    </span>
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
