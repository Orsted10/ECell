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
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="font-bold text-base tracking-wider uppercase font-display text-white pointer-events-auto hover:opacity-80 transition-opacity"
        >
          E-CELL CU
        </a>

        {/* Center: Floating Dark Glass Pill Navigation */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-[#121216]/80 border border-white/10 backdrop-blur-2xl pointer-events-auto shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-white/70 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={onOpenJoinModal}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-white/90 transition-all duration-300 active:scale-95 shadow-xl"
          >
            <span>Join E-Cell</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
