"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function RevealText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Handle <br/> or split by spaces
  const parts = text.split(/(<br\s*\/?>)/g);

  return (
    <h2 ref={ref} className={className}>
      {parts.map((part, index) => {
        if (part.match(/<br\s*\/?>/)) {
          return <br key={index} />;
        }
        return (
          <span key={index} style={{ display: "inline", whiteSpace: "normal" }}>
            {part.split(" ").map((word, wordIndex) => (
              <span
                key={`${index}-${wordIndex}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                  paddingRight: "0.25em",
                  paddingBottom: "0.25em",
                  marginBottom: "-0.25em",
                }}
              >
                <motion.span
                  style={{ display: "inline-block", transformOrigin: "left bottom" }}
                  initial={{ y: "120%", rotate: 4, opacity: 0 }}
                  animate={isInView ? { y: 0, rotate: 0, opacity: 1 } : { y: "120%", rotate: 4, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1], // Custom EASE_OUT
                    delay: (index * 0.1) + (wordIndex * 0.03),
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        );
      })}
    </h2>
  );
}
