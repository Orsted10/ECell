import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, FileText, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

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
    <section id="impact" className="py-32 px-4 md:px-8 w-full relative z-10 border-t border-white/10 bg-black">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 max-w-screen-2xl mx-auto">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="text-sm font-mono tracking-[0.2em] text-white/80 uppercase font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Impact & Proven Results
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[6rem] font-display font-extrabold text-white tracking-tighter leading-none drop-shadow-2xl">
            Our <span className="font-serif italic font-normal text-white/90">Milestones</span>
          </h2>
        </div>
        <p className="text-xl sm:text-2xl text-white/80 max-w-xl font-light leading-relaxed">
          Real numbers reflecting the unstoppable growth of the entrepreneurial ecosystem at <span className="font-medium text-white">Chandigarh University Uttar Pradesh</span>.
        </p>
      </div>

      {/* Grid of Cinematic Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        {milestones.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 20, 
                delay: idx * 0.15 
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative rounded-[3rem] p-[1px] group cursor-default"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-[3rem] opacity-50 group-hover:opacity-100 group-hover:from-white/60 transition-opacity duration-700" />
              
              <div className="relative h-full min-h-[420px] bg-[#050507]/90 backdrop-blur-2xl rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_60px_rgba(255,255,255,0.02)] group-hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.06)] transition-all duration-700">
                
                {/* Hardware-Accelerated Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', transform: 'translateZ(0)', willChange: 'transform' }} />

                {/* Glowing Ambient Core (Bottom Right) */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-[60px] opacity-30 group-hover:opacity-80 group-hover:scale-150 transition-all duration-1000 z-0 pointer-events-none" />

                {/* Glowing Ambient Core (Top Left) */}
                <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />

                {/* Content Container (z-10 to stay above glows) */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between mb-auto">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:rotate-6 transition-all duration-500 backdrop-blur-md">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white/30 tracking-[0.3em] uppercase bg-white/5 px-4 py-2 rounded-full border border-white/5 group-hover:text-white/80 group-hover:border-white/20 transition-all duration-500">
                      CU UP
                    </span>
                  </div>

                  {/* Main Stat & Copy */}
                  <div className="mt-12">
                    {/* The massive stat number */}
                    <div className="text-[4.5rem] leading-none font-display font-extrabold text-white tracking-tighter mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500">
                      <AnimatedCounter value={item.stat} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white/90 uppercase tracking-[0.2em] font-mono mb-4 group-hover:text-emerald-400 transition-colors duration-500">
                      {item.label}
                    </h3>
                    
                    <p className="text-base text-white/60 font-light leading-relaxed group-hover:text-white/85 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
