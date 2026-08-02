import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Vision: React.FC = () => {
  const stats = [
    { num: '₹1Cr+', label: 'Seed Fund Pool' },
    { num: '10+', label: 'Incubation Cohorts' },
    { num: '50+', label: 'Active Startups' },
  ];

  return (
    <section id="vision" className="py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/10 relative">
      {/* Top Tag */}
      <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-white/50 uppercase mb-8">
        <Sparkles className="w-3.5 h-3.5" />
        <span>[ OUR MISSION ]</span>
      </div>

      {/* Immersive Center Text */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-display font-light text-white/90 leading-relaxed tracking-tight"
        >
          We empower ambitious student builders at{' '}
          <span className="font-semibold text-white underline decoration-white/30 underline-offset-4">
            Chandigarh University Uttar Pradesh
          </span>{' '}
          to transform raw ideas into thriving startups.
        </motion.p>
      </div>

      {/* Horizontal Stats Row matching Screenshot */}
      <div className="mt-24 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="text-5xl sm:text-7xl font-display font-bold text-white tracking-tight mb-2">
              {s.num}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
