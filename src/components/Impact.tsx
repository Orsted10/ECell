import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, FileText, Sparkles } from 'lucide-react';

export const Impact: React.FC = () => {
  const milestones = [
    {
      stat: '₹1Cr+',
      label: 'Seed Funding Raised',
      desc: 'Secured by campus-incubated startups from angel investors and government grants.',
      icon: TrendingUp,
    },
    {
      stat: '50+',
      label: 'Startups Incubated',
      desc: 'Active ventures operating across EdTech, FinTech, HealthTech, AI, and Green Mobility.',
      icon: Award,
    },
    {
      stat: '2,000+',
      label: 'Student Founders',
      desc: 'Ambitious builders participating in workshops, hackathons, and cohort programs.',
      icon: Users,
    },
    {
      stat: '15+',
      label: 'Patents & IP Filed',
      desc: 'Intellectual property and tech innovations registered with university R&D support.',
      icon: FileText,
    },
  ];

  return (
    <section id="impact" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white/50 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ Impact & Proven Results ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            Our <span className="font-serif italic font-normal text-white/80">Milestones</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
          Real numbers reflecting the growing entrepreneurial ecosystem at Chandigarh University Uttar Pradesh.
        </p>
      </div>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="doppelrand-outer group"
            >
              <div className="doppelrand-inner p-8 flex flex-col justify-between h-full min-h-[260px] relative overflow-hidden">
                {/* Top Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                    CU UP
                  </span>
                </div>

                {/* Main Stat & Label */}
                <div className="my-6">
                  <div className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.stat}
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider font-mono">
                    {item.label}
                  </h3>
                  <p className="text-xs text-white/50 mt-2 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
