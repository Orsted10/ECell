import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Programs', href: '#offerings' },
    { name: 'Our Story', href: '#vision' },
    { name: 'Ventures', href: '#showcase' },
    { name: 'Insights', href: '#impact' },
    { name: 'Connect', href: '#faq' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between pointer-events-none">
        {/* Left: Brand Logo (Metallic Gradient) */}
        <a
          href="#"
          className="font-extrabold text-xl tracking-[0.2em] uppercase font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] pointer-events-auto hover:opacity-80 transition-opacity"
        >
          E-CELL CU
        </a>

        {/* Center: 3D Floating Dark Glass Pill Navigation */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-[#0a0a0c]/80 border border-white/10 backdrop-blur-3xl pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-1px_1px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-[13px] text-white/70 hover:text-white font-semibold tracking-widest uppercase transition-all duration-300 rounded-full hover:bg-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-95"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Glossy 3D Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={onOpenJoinModal}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-b from-white via-neutral-100 to-neutral-300 text-black font-bold text-sm tracking-widest uppercase transition-all duration-500 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6),inset_0_2px_4px_rgba(255,255,255,1)] hover:-translate-y-1 overflow-hidden"
          >
            {/* Button Shine Effect on Hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 opacity-50 pointer-events-none" />
            <span className="relative z-10">Join E-Cell</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 rounded-full bg-[#111] border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display text-white/80 hover:text-white transition-colors border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="mt-4 w-full py-4 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Join E-Cell</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
