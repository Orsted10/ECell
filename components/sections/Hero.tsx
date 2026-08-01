"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  // Mouse parallax — useMotionValue, never useState
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lightX = useTransform(mouseX, [-0.5, 0.5], ["-12px", "12px"]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], ["-8px", "8px"]);
  const imgX  = useTransform(mouseX, [-0.5, 0.5], ["-6px", "6px"]);
  const imgY  = useTransform(mouseY, [-0.5, 0.5], ["-4px", "4px"]);

  useEffect(() => {
    if (shouldReduce) return;
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [shouldReduce, mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10px",
          x: shouldReduce ? 0 : imgX,
          y: shouldReduce ? 0 : imgY,
          zIndex: 0,
        }}
      >
        <Image
          src="/hero-bg.png"
          alt="Abstract cinematic background"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", opacity: 0.6 }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(110deg, rgba(8,10,15,0.96) 40%, rgba(8,10,15,0.6) 75%, rgba(8,10,15,0.3) 100%)",
        }}
      />

      {/* Ambient light orb */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)",
          zIndex: 1,
          x: shouldReduce ? 0 : lightX,
          y: shouldReduce ? 0 : lightY,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="container-wide"
        style={{ position: "relative", zIndex: 2, paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div style={{ maxWidth: "720px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            {/* Pre-headline tag */}
            <motion.div variants={itemVariants}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-dim)",
                  borderRadius: "999px",
                  padding: "0.35rem 0.85rem",
                  background: "var(--accent-glow)",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    animation: "pulse 2s infinite",
                  }}
                />
                Chandigarh University, UP
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="display-1">
              We Build
              <br />
              <span style={{ color: "var(--accent)" }}>Founders.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--text-2)",
                maxWidth: "50ch",
              }}
            >
              The official entrepreneurship cell of Chandigarh University UP.
              Where your first startup begins.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
            >
              <a
                href="#join"
                id="hero-cta-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s, transform 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                Join E-Cell
                <ArrowRight size={16} weight="bold" />
              </a>

              <a
                href="#vision"
                id="hero-cta-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  color: "var(--text-1)",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                  whiteSpace: "nowrap",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--text-3)";
                  (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Explore Journey
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          color: "var(--text-3)",
        }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
