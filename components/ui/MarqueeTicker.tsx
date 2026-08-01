"use client";
import { Sparkle, Lightning, Fire, Rocket } from "@phosphor-icons/react";

const TICKER_ITEMS = [
  { text: "IGNITE YOUR VENTURE", icon: Fire, color: "#FF5500" },
  { text: "CHANDIGARH UNIVERSITY E-CELL", icon: Sparkle, color: "#00C6FF" },
  { text: "48H CAMPUS IDEATHON", icon: Lightning, color: "#FFB300" },
  { text: "ZERO EQUITY REQUIREMENT", icon: Rocket, color: "#00E676" },
  { text: "MENTOR & VC NETWORK", icon: Fire, color: "#FF5500" },
  { text: "DEMO DAY 2027", icon: Sparkle, color: "#00C6FF" },
];

export default function MarqueeTicker() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        background: "rgba(11, 14, 20, 0.75)",
        borderTop: "1px solid rgba(255, 77, 0, 0.2)",
        borderBottom: "1px solid rgba(0, 102, 255, 0.2)",
        padding: "0.9rem 0",
        backdropFilter: "blur(16px)",
        boxShadow: "0 0 30px rgba(0,0,0,0.5)",
        zIndex: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 28s linear infinite",
          gap: "2.5rem",
        }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-1)",
                fontFamily: "var(--font-mono)",
                whiteSpace: "nowrap",
              }}
            >
              <Icon size={16} color={item.color} weight="fill" />
              <span>{item.text}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 0.5rem" }}>✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
