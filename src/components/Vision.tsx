import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

export const Vision: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animation slightly earlier, end it when center hits center
    offset: ["start 0.95", "start 0.1"],
  });

  // Apply a heavily damped, massive physics spring for that slow cinematic camera feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 35,
    mass: 2,
  });

  // --- TRANSFORMS ---

  // Top Pill (Slowly rises from the deep background)
  const pillOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const pillY = useTransform(smoothProgress, [0, 0.2], [100, 0]);
  const pillScale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);
  const pillBlurRaw = useTransform(smoothProgress, [0, 0.2], [20, 0]);
  const pillBlur = useMotionTemplate`blur(${pillBlurRaw}px)`;

  // Main Text Lines - Cinematic "Focus Pull" Effect (Flying out of the lens)
  // Line 1
  const t1Opacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
  const t1Y = useTransform(smoothProgress, [0.1, 0.4], [150, 0]);
  const t1Rotate = useTransform(smoothProgress, [0.1, 0.4], [-40, 0]);
  const t1Scale = useTransform(smoothProgress, [0.1, 0.4], [1.5, 1]);
  const t1BlurRaw = useTransform(smoothProgress, [0.1, 0.4], [30, 0]);
  const t1Blur = useMotionTemplate`blur(${t1BlurRaw}px)`;

  // Line 2
  const t2Opacity = useTransform(smoothProgress, [0.25, 0.55], [0, 1]);
  const t2Y = useTransform(smoothProgress, [0.25, 0.55], [150, 0]);
  const t2Rotate = useTransform(smoothProgress, [0.25, 0.55], [-40, 0]);
  const t2Scale = useTransform(smoothProgress, [0.25, 0.55], [1.5, 1]);
  const t2BlurRaw = useTransform(smoothProgress, [0.25, 0.55], [30, 0]);
  const t2Blur = useMotionTemplate`blur(${t2BlurRaw}px)`;

  // Line 3
  const t3Opacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const t3Y = useTransform(smoothProgress, [0.4, 0.7], [150, 0]);
  const t3Rotate = useTransform(smoothProgress, [0.4, 0.7], [-40, 0]);
  const t3Scale = useTransform(smoothProgress, [0.4, 0.7], [1.5, 1]);
  const t3BlurRaw = useTransform(smoothProgress, [0.4, 0.7], [30, 0]);
  const t3Blur = useMotionTemplate`blur(${t3BlurRaw}px)`;

  // Line 4
  const t4Opacity = useTransform(smoothProgress, [0.55, 0.85], [0, 1]);
  const t4Y = useTransform(smoothProgress, [0.55, 0.85], [150, 0]);
  const t4Rotate = useTransform(smoothProgress, [0.55, 0.85], [-40, 0]);
  const t4Scale = useTransform(smoothProgress, [0.55, 0.85], [1.5, 1]);
  const t4BlurRaw = useTransform(smoothProgress, [0.55, 0.85], [30, 0]);
  const t4Blur = useMotionTemplate`blur(${t4BlurRaw}px)`;

  // Stats Row (Swells up from the ground)
  const statsOpacity = useTransform(smoothProgress, [0.7, 1], [0, 1]);
  const statsY = useTransform(smoothProgress, [0.7, 1], [150, 0]);
  const statsScale = useTransform(smoothProgress, [0.7, 1], [0.9, 1]);
  const statsBlurRaw = useTransform(smoothProgress, [0.7, 1], [20, 0]);
  const statsBlur = useMotionTemplate`blur(${statsBlurRaw}px)`;

  const stats = [
    { num: '₹1Cr+', label: 'Seed Fund Pool' },
    { num: '10+', label: 'Incubation Cohorts' },
    { num: '50+', label: 'Active Startups' },
  ];

  return (
    <section ref={containerRef} id="vision" className="py-52 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* Top Tag - Sleek Pill */}
      <motion.div 
        style={{ opacity: pillOpacity, y: pillY, scale: pillScale, filter: pillBlur }}
        className="flex justify-center mb-24"
      >
        <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] animate-pulse" />
          <span className="text-sm sm:text-base font-mono tracking-[0.25em] text-white/90 uppercase font-bold">
            Our Mission
          </span>
        </div>
      </motion.div>

      {/* Immersive Center Text with Scrubbable Stagger */}
      <div className="text-center max-w-5xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-display font-light text-white/40 leading-[1.3] tracking-tight flex flex-col items-center gap-4">
        <motion.div style={{ opacity: t1Opacity, y: t1Y, rotateX: t1Rotate, scale: t1Scale, filter: t1Blur }}>
          We empower ambitious student builders at
        </motion.div>
        <motion.div style={{ opacity: t2Opacity, y: t2Y, rotateX: t2Rotate, scale: t2Scale, filter: t2Blur }}>
          <span className="font-semibold text-white">Chandigarh University, </span>
          <span className="font-serif italic text-white/90">Uttar Pradesh </span>
        </motion.div>
        <motion.div style={{ opacity: t3Opacity, y: t3Y, rotateX: t3Rotate, scale: t3Scale, filter: t3Blur }}>
          to transform raw ideas into
        </motion.div>
        <motion.div style={{ opacity: t4Opacity, y: t4Y, rotateX: t4Rotate, scale: t4Scale, filter: t4Blur }}>
          <span className="font-semibold text-white">thriving startups.</span>
        </motion.div>
      </div>

      {/* Horizontal Stats Row - Metallic Gradient Numbers */}
      <motion.div 
        style={{ opacity: statsOpacity, y: statsY, scale: 1, filter: statsBlur }}
        className="mt-40 pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 text-center relative"
      >
        {stats.map((s, idx) => (
          <div 
            key={s.label} 
            className={`flex flex-col items-center group cursor-default relative py-8 ${idx !== stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <span className="text-7xl lg:text-[7.5rem] font-display font-bold bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent tracking-tighter mb-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10">
              <AnimatedCounter value={s.num} />
            </span>
            <span className="text-sm font-mono uppercase tracking-[0.35em] text-white/60 font-semibold group-hover:text-white transition-colors duration-500 relative z-10">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  );
};
