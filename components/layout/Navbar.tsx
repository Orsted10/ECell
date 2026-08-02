"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { List, X, ArrowRight, Sparkle } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Vision", href: "#vision" },
  { label: "Launchpads", href: "#offerings" },
  { label: "Roadmap", href: "#roadmap" },
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
      className="fixed top-0 left-0 right-0 z-[100] pt-4 sm:pt-6 px-4 sm:px-8 transition-all duration-300 pointer-events-none"
    >
      {/* AgencyIO Floating Glass Capsule Dock */}
      <div className="max-w-6xl mx-auto rounded-full bg-[#06080D]/85 border border-white/15 backdrop-blur-2xl px-5 sm:px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white text-decoration-none group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#98FF03] to-[#FF5500] p-[1.5px] shadow-[0_0_20px_rgba(152,255,3,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#030712] flex items-center justify-center font-outfit font-black text-sm text-[#98FF03]">
              E
            </div>
          </div>
          <div className="flex items-center gap-2 font-outfit font-black text-lg tracking-tight">
            <span>E-CELL</span>
            <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-black tracking-widest text-[#98FF03] bg-[#98FF03]/15 border border-[#98FF03]/40">
              CUUP
            </span>
          </div>
        </Link>

        {/* Desktop AgencyIO Nav Capsule */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-outfit text-sm font-bold text-slate-300 hover:text-[#98FF03] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#98FF03] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_10px_#98FF03]" />
            </a>
          ))}
        </nav>

        {/* Action Call to Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-outfit text-sm font-black text-black bg-[#98FF03] hover:bg-[#B2FF43] transition-all duration-300 shadow-[0_0_25px_rgba(152,255,3,0.5)] hover:scale-105 active:scale-95"
          >
            JOIN LAUNCHPAD <ArrowRight size={16} weight="bold" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-[#98FF03] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-3 max-w-6xl mx-auto rounded-3xl bg-[#06080D]/95 border border-white/20 backdrop-blur-2xl p-6 shadow-2xl pointer-events-auto flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-outfit text-lg font-bold text-slate-200 hover:text-[#98FF03] transition-colors py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-outfit text-base font-black text-black bg-[#98FF03] hover:bg-[#B2FF43] shadow-[0_0_25px_rgba(152,255,3,0.5)]"
          >
            JOIN LAUNCHPAD <ArrowRight size={18} weight="bold" />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
