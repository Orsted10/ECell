import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe, Instagram, Facebook, Share2 } from 'lucide-react';
import { BackgroundScene } from './BackgroundScene';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0c] overflow-hidden">

      {/* ── BACKGROUND LAYER: 3D Aesthetic Scene ── */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#050505]" />}>
        <BackgroundScene />
      </Suspense>
      
      {/* Subtle overlay to ensure text readability but keep 3D visible */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* ── FOREGROUND: All content sits above background ── */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 sm:px-12 pt-32 pb-12 pointer-events-none">

        {/* Main grid row: Headline (left) | Narrative (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-start pt-12">

          {/* Left: Giant headline */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 flex flex-col pointer-events-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            {/* Tighter line height for the overlap effect */}
            <h1 className="leading-[0.8] tracking-tight">
              <span
                className="block text-white font-bold"
                style={{ fontSize: 'clamp(5.5rem, 13vw, 12rem)', fontFamily: "'Urbanist', sans-serif" }}
              >
                Build Bold.
              </span>
              <span
                className="block text-white font-normal italic -mt-2 pr-8"
                style={{ fontSize: 'clamp(5.5rem, 13vw, 12rem)', fontFamily: "'Playfair Display', serif" }}
              >
                Impactful
              </span>
            </h1>
          </motion.div>

          {/* Right: Narrative paragraph + Join social row — pushed to far right */}
          <motion.div
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start h-full gap-8 pt-4 lg:pt-2 lg:ml-auto w-full max-w-[480px] pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
          >
            {/* Large, bright, prominent paragraph */}
            <p
              className="text-white font-light leading-[1.7] max-w-[480px]"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)' }}
            >
              © E-Cell Chandigarh University, Uttar Pradesh.{' '}
              <br className="hidden lg:block" />
              We help student founders turn early ideas into ventures with{' '}
              momentum, mentorship and a{' '}
              <span
                className="text-white/35"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              >
                community that shows up.
              </span>
            </p>

            {/* Divider + Join row */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/15 max-w-[480px]">
              <span
                className="text-white font-semibold tracking-wider uppercase"
                style={{ fontSize: '0.9rem', letterSpacing: '0.12em' }}
              >
                Join the community
              </span>
              <div className="flex items-center gap-2.5 ml-auto">
                {[
                  { Icon: Facebook,  label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Globe,     label: 'Web' },
                  { Icon: Share2,    label: 'Behance' },
                ].map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    aria-label={label}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.18)', borderColor: 'rgba(255,255,255,0.3)' }}
                    className="w-10 h-10 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-auto pt-16 pointer-events-auto">

          {/* Bottom Left: We do */}
          <motion.div
            className="md:col-span-4 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
          >
            <p className="text-[13px] font-bold text-white mb-5 tracking-wide uppercase">We do</p>
            <div className="text-[16px] text-white/95 font-medium space-y-3">
              <div className="flex items-center gap-2">
                <span>Startup Incubation</span>
                <span className="text-white/30 px-1">/</span>
                <span>Startup Incubation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Development</span>
                <span className="text-white/30 px-1">/</span>
                <span>Marketing</span>
              </div>
            </div>
            {/* Muted brand logos row */}
            <div className="flex items-center gap-5 mt-10 text-white/20 opacity-80">
              <span className="text-sm font-sans font-bold">Pro</span>
              <span className="text-sm font-serif italic font-bold">italic</span>
              <span className="text-sm font-serif italic">thew</span>
              <span className="text-sm font-mono tracking-widest">::</span>
            </div>
          </motion.div>

          {/* Center: Chevron */}
          <motion.div
            className="md:col-span-4 lg:col-span-2 flex justify-center pb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
          >
            <motion.a
              href="#offerings"
              whileHover={{ y: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="w-12 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Bottom Right: Featured Card */}
          <motion.div
            className="md:col-span-4 lg:col-span-5 flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.4 }}
          >
            <div className="w-full max-w-[280px]">
              <div className="flex items-center justify-between text-[11px] text-white/60 mb-3 px-1 tracking-wide font-medium">
                <span>Featured</span>
                <span>(02)</span>
              </div>
              <motion.div
                onClick={onOpenJoinModal}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-2xl bg-[#111113] border border-white/10 overflow-hidden cursor-pointer group shadow-2xl relative"
              >
                <div className="relative h-[200px] overflow-hidden bg-[#1a1a1f] flex items-center justify-center">
                  <img
                    src="https://framerusercontent.com/images/kJJrWRLfOnlr1d8RHlDLgRsGag.png"
                    alt="Featured venture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
