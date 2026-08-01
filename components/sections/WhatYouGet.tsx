"use client";
import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RocketLaunch, Microphone, UsersThree, Student, Lightning, Trophy, Briefcase } from "@phosphor-icons/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";

gsap.registerPlugin(ScrollTrigger);

import { RevealText } from "@/components/ui/RevealText";

const OFFERINGS = [
  {
    icon: RocketLaunch,
    title: "Startup Incubation",
    tagline: "Turn your idea into a business.",
    body: "Access dedicated desk space, legal guidance, mentorship from active founders, and seed funding opportunities to take your startup from zero to launch.",
    color: "rgba(79,142,247,0.08)",
    accent: "#4F8EF7",
  },
  {
    icon: Microphone,
    title: "Founder Talks",
    tagline: "Learn directly from people who built.",
    body: "Monthly fireside chats and keynotes with founders, investors, and operators who share unfiltered stories from the field.",
    color: "rgba(99,102,241,0.08)",
    accent: "#818CF8",
  },
  {
    icon: UsersThree,
    title: "Networking",
    tagline: "Your network is your net worth.",
    body: "Exclusive meetups, industry mixers, and peer communities that connect you with future co-founders, teammates, and advisors.",
    color: "rgba(16,185,129,0.08)",
    accent: "#34D399",
  },
  {
    icon: Student,
    title: "Mentorship",
    tagline: "Guided by those who got there.",
    body: "1-on-1 mentorship matching with senior professionals and alumni founders across tech, finance, and consumer industries.",
    color: "rgba(245,158,11,0.08)",
    accent: "#FCD34D",
  },
  {
    icon: Lightning,
    title: "Ideathons",
    tagline: "48 hours to change everything.",
    body: "Fast-paced hackathon-style events where teams prototype solutions to real-world problems, compete for prizes, and build lasting friendships.",
    color: "rgba(239,68,68,0.08)",
    accent: "#FCA5A5",
  },
  {
    icon: Trophy,
    title: "Pitch Competitions",
    tagline: "Present. Persuade. Win.",
    body: "Structured competitions that sharpen your storytelling, build your pitch deck, and put you in front of real investors looking for the next big thing.",
    color: "rgba(168,85,247,0.08)",
    accent: "#C4B5FD",
  },
  {
    icon: Briefcase,
    title: "Internships",
    tagline: "Real experience at real startups.",
    body: "Curated internship placements at vetted startups and scaleups, giving you hands-on experience that classrooms never will.",
    color: "rgba(20,184,166,0.08)",
    accent: "#5EEAD4",
  },
];

export default function WhatYouGet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".offering-card");

      // CSS sticky handles pinning — GSAP only drives scale + opacity
      // as each new card slides over the previous one.
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.88,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduce]);

  return (
    <section
      id="offerings"
      style={{ borderTop: "1px solid var(--border-soft)" }}
    >
      {/* Section header — outside the stack */}
      <div className="container-wide" style={{ paddingTop: "clamp(5rem,10vw,9rem)", paddingBottom: "3rem" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <motion.p variants={fadeUp} className="label" style={{ color: "var(--accent)" }}>
            Opportunities
          </motion.p>
          <RevealText 
            text="Everything you need<br/>to become a founder." 
            className="display-2" 
          />
        </motion.div>
      </div>

      {/* Sticky stack — CSS sticky + z-index, GSAP only handles scale/opacity */}
      <div ref={containerRef} style={{ position: "relative" }}>
        {OFFERINGS.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="offering-card"
              style={{
                position: "sticky",
                top: 0,
                // Each card sits above all previous cards so it slides ON TOP
                zIndex: i + 1,
                minHeight: "100dvh",
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(180deg, rgba(6,7,10,0.92) 0%, rgba(11,14,20,0.85) 100%)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid rgba(255, 77, 0, 0.15)",
                boxShadow: "0 -20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,85,0,0.2)",
                willChange: "transform, opacity",
              }}
            >
              <div className="container-wide" style={{ paddingBlock: "4rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                  }}
                >
                  {/* Left — text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      {/* Fiery Squircle Icon Badge as seen in Image 3 reference */}
                      <div className="icon-badge-orange">
                        <Icon size={26} weight="bold" />
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#FF5500",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        PILLAR // {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "var(--text-1)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1.2rem",
                        color: "#FF661A",
                        fontWeight: 600,
                      }}
                    >
                      {item.tagline}
                    </p>
                    <p style={{ fontSize: "1rem", color: "var(--text-2)", lineHeight: 1.75, maxWidth: "46ch" }}>
                      {item.body}
                    </p>
                  </div>

                  {/* Right — large tech icon container */}
                  <div
                    style={{
                      borderRadius: "18px",
                      background: "rgba(11, 14, 20, 0.8)",
                      border: "1px solid rgba(255, 77, 0, 0.25)",
                      boxShadow: "0 0 40px rgba(255, 77, 0, 0.15), inset 0 0 20px rgba(255, 77, 0, 0.05)",
                      aspectRatio: "4/3",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", top: "12px", right: "12px", fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: "rgba(255,85,0,0.5)" }}>
                      SYS.PLR.{i + 1}
                    </div>
                    <div className="icon-badge-orange" style={{ width: "80px", height: "80px", borderRadius: "22px", boxShadow: "0 10px 30px rgba(255,77,0,0.4)" }}>
                      <Icon size={44} weight="fill" />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", color: "#FFFFFF", textTransform: "uppercase" }}>
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
