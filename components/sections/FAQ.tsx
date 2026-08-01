"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react";
import { staggerContainer, fadeUp } from "@/components/motion/variants";

const FAQS = [
  {
    q: "Who can join E-Cell?",
    a: "Any student enrolled at Chandigarh University UP, regardless of branch, year, or background. We welcome engineers, business students, designers, and anyone with the drive to build.",
  },
  {
    q: "Is there a membership fee?",
    a: "No. E-Cell membership is completely free. Some premium events and incubation programs may have nominal participation fees to cover operational costs.",
  },
  {
    q: "Do I need a startup idea to join?",
    a: "Not at all. Many of our best founders joined with just curiosity and a willingness to learn. The idea often comes after joining the community.",
  },
  {
    q: "How do I get into the incubation program?",
    a: "Incubation slots are awarded to top-performing teams from our Ideathons and Pitch Competitions. You can also apply directly during open application cycles.",
  },
  {
    q: "What kind of mentors does E-Cell provide access to?",
    a: "We work with active founders, angel investors, and senior professionals across technology, finance, and consumer industries, both alumni and external.",
  },
  {
    q: "How often does E-Cell host events?",
    a: "We run at least one event every two weeks, ranging from skill workshops to full-day hackathons and fireside chats with industry leaders.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: typeof FAQS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--border-soft)" }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.75rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--text-1)",
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "1.05rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            borderRadius: "999px",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isOpen ? "var(--accent)" : "var(--text-2)",
            transition: "border-color 0.2s, color 0.2s",
            borderColor: isOpen ? "var(--accent-dim)" : "var(--border)",
          }}
        >
          <Plus size={14} weight="bold" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                paddingBottom: "1.75rem",
                color: "var(--text-2)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                maxWidth: "70ch",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-pad"
      style={{ background: "transparent" }}
    >
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-[1fr_2fr]"
        >
          {/* Left */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <motion.p variants={fadeUp} className="label" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUp} className="display-3">
              Questions we hear often.
            </motion.h2>
          </div>

          {/* Right — accordion */}
          <motion.div variants={fadeUp}>
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
