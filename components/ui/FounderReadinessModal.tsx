"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lightning, CheckCircle, ArrowRight, Fire, Sparkle } from "@phosphor-icons/react";

export default function FounderReadinessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ stage: "", goal: "" });

  const handleSelectStage = (stage: string) => {
    setAnswers((prev) => ({ ...prev, stage }));
    setStep(2);
  };

  const handleSelectGoal = (goal: string) => {
    setAnswers((prev) => ({ ...prev, goal }));
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setAnswers({ stage: "", goal: "" });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => {
          reset();
          setIsOpen(true);
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 99,
          display: "flex",
          alignItems: "center",
          gap: "0.65rem",
          padding: "0.75rem 1.25rem",
          borderRadius: "999px",
          background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
          color: "#FFF",
          fontWeight: 700,
          fontSize: "0.85rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 8px 30px rgba(255, 77, 0, 0.5)",
          fontFamily: "var(--font-mono)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(255, 77, 0, 0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255, 77, 0, 0.5)";
        }}
      >
        <Lightning size={18} weight="fill" />
        <span>FIND YOUR TRACK</span>
      </motion.button>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "520px",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "rgba(16, 20, 28, 0.95)",
                border: "1px solid rgba(255, 77, 0, 0.35)",
                borderRadius: "1.75rem",
                padding: "clamp(1.25rem, 5vw, 2.25rem)",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 77, 0, 0.2)",
                position: "relative",
                color: "#FFF",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFF",
                  cursor: "pointer",
                }}
              >
                <X size={18} weight="bold" />
              </button>

              {/* Header */}
              <div style={{ marginBottom: "1.75rem" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#FF5500",
                    fontFamily: "var(--font-mono)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Fire size={14} weight="fill" /> E-CELL TRACK SELECTOR
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {step === 1 && "What stage is your startup idea at?"}
                  {step === 2 && "What is your primary focus right now?"}
                  {step === 3 && "Your Recommended Founder Track"}
                </h3>
              </div>

              {/* Step 1: Stage */}
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "💡 Just an Idea", desc: "You have a vision and want to validate market demand." },
                    { label: "🛠 Building an MVP", desc: "You are actively coding or prototyping your first version." },
                    { label: "🚀 Launch Ready", desc: "You have an active product and need users or investment." },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectStage(opt.label)}
                      style={{
                        padding: "1.1rem 1.25rem",
                        borderRadius: "1rem",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        textAlign: "left",
                        cursor: "pointer",
                        color: "#FFF",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255, 85, 0, 0.14)";
                        (e.currentTarget as HTMLElement).style.borderColor = "#FF5500";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <span style={{ fontSize: "1.05rem", fontWeight: 700, display: "block", marginBottom: "0.2rem" }}>
                        {opt.label}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{opt.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Goal */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {[
                    { label: "🤝 Find Co-Founders & Teammates", desc: "Connect with talented developers & designers on campus." },
                    { label: "🧠 Mentor & BMC Guidance", desc: "Get 1-on-1 feedback from experienced founders & advisors." },
                    { label: "💰 Pitch to VCs & Grants", desc: "Prepare for Demo Day and pitch for incubation & capital." },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelectGoal(opt.label)}
                      style={{
                        padding: "1.1rem 1.25rem",
                        borderRadius: "1rem",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        textAlign: "left",
                        cursor: "pointer",
                        color: "#FFF",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0, 102, 255, 0.16)";
                        (e.currentTarget as HTMLElement).style.borderColor = "#0066FF";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.04)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <span style={{ fontSize: "1.05rem", fontWeight: 700, display: "block", marginBottom: "0.2rem" }}>
                        {opt.label}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{opt.desc}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Recommendation Result */}
              {step === 3 && (
                <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(0, 230, 118, 0.15)",
                      border: "1.5px solid #00E676",
                      color: "#00E676",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.25rem auto",
                    }}
                  >
                    <CheckCircle size={32} weight="bold" />
                  </div>
                  <h4
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#FF5500",
                      marginBottom: "0.5rem",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    COHORT TRACK: {answers.stage.includes("Idea") ? "IDEATION & BUILD" : "INCUBATION & DEMO DAY"}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "2rem", lineHeight: 1.6 }}>
                    You are eligible for the upcoming CUUP E-Cell batch! Join the foundry to get instant workspace access, mentor sessions, and Ideathon priority.
                  </p>
                  <a
                    href="#join"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.65rem",
                      width: "100%",
                      padding: "1rem",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
                      color: "#FFF",
                      fontWeight: 700,
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                      boxShadow: "0 8px 30px rgba(255, 77, 0, 0.5)",
                    }}
                  >
                    APPLY TO FOUNDRY NOW <ArrowRight size={18} weight="bold" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
