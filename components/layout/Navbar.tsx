"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { List, X } from "@phosphor-icons/react";

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
    setScrolled(y > 40);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "68px",
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled
          ? "rgba(8,10,15,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
            color: "var(--text-1)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>E</span>
          <span style={{ color: "var(--text-3)" }}>·</span>
          <span>CELL</span>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: "var(--text-3)",
              textTransform: "uppercase",
              marginLeft: "0.25rem",
              marginTop: "0.15rem",
            }}
          >
            CUUP
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: "2.5rem" }}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--text-2)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-1)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-2)")
              }
            >
              {link.label}
            </a>
          ))}

          <a
            href="#join"
            id="nav-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
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
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-1)",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(8,10,15,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontWeight: 500,
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
              justifyContent: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Join E-Cell
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
