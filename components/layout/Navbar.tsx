"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { List, X, ArrowRight } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Vision", href: "#vision" },
  { label: "What You Get", href: "#offerings" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 30);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: scrolled ? "76px" : "88px",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled
          ? "rgba(6, 7, 10, 0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 77, 0, 0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
      }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "1.45rem",
            letterSpacing: "-0.03em",
            color: "var(--text-1)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontWeight: 900,
              fontSize: "1.2rem",
              boxShadow: "0 0 16px rgba(255, 77, 0, 0.4)",
            }}
          >
            E
          </div>
          <span style={{ color: "var(--text-3)", fontWeight: 300, fontSize: "1.2rem" }}>·</span>
          <span style={{ letterSpacing: "-0.01em", fontWeight: 800 }}>CELL</span>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#FF5500",
              textTransform: "uppercase",
              background: "rgba(255, 85, 0, 0.12)",
              border: "1px solid rgba(255, 85, 0, 0.3)",
              padding: "0.2rem 0.55rem",
              borderRadius: "6px",
              marginLeft: "0.25rem",
            }}
          >
            CUUP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "2.25rem" }}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--text-2)",
                textDecoration: "none",
                transition: "color 0.25s, transform 0.25s",
                padding: "0.4rem 0.6rem",
                borderRadius: "8px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#FFFFFF";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-2)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Primary CTA */}
          <a
            href="#join"
            id="nav-cta"
            className="group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.55rem 0.55rem 0.55rem 1.6rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
              color: "#fff",
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(255, 77, 0, 0.45)",
              transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s",
              whiteSpace: "nowrap",
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255, 77, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(255, 77, 0, 0.45)";
            }}
          >
            JOIN E-CELL
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group-hover:translate-x-1 group-hover:scale-105"
            >
              <ArrowRight size={16} weight="bold" />
            </div>
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            color: "var(--text-1)",
            cursor: "pointer",
            padding: "0.6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            position: "absolute",
            top: scrolled ? "76px" : "88px",
            left: 0,
            right: 0,
            background: "rgba(6, 7, 10, 0.98)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255, 77, 0, 0.25)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-1)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #FF5500 0%, #D93600 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.1rem",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(255, 77, 0, 0.45)",
              marginTop: "0.5rem",
            }}
          >
            JOIN E-CELL
            <ArrowRight size={18} weight="bold" />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
