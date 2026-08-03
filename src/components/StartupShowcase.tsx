import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Cpu, Leaf, HeartPulse } from 'lucide-react';

export const StartupShowcase: React.FC = () => {
  const projects = [
    {
      title: 'EdVenture AI',
      category: 'EdTech & AI',
      tag: 'INCUBATED VENTURE',
      description: 'Personalized AI tutor platform delivering adaptive learning paths for higher education STEM students.',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-900/40',
      borderGlow: 'group-hover:border-emerald-500/50'
    },
    {
      title: 'GreenGrid Mobility',
      category: 'EV & Sustainability',
      tag: 'SEED FUNDED',
      description: 'Smart battery swapping network designed specifically for last-mile delivery fleets on university campuses.',
      icon: Leaf,
      color: 'from-green-500/20 to-emerald-900/40',
      borderGlow: 'group-hover:border-green-500/50'
    },
    {
      title: 'Virtual Reality Lab',
      category: 'HealthTech & Hardware',
      tag: 'PATENT FILED',
      description: 'Non-invasive continuous biometric monitoring patch for preventive cardiac care in rural clinics.',
      icon: HeartPulse,
      color: 'from-rose-500/20 to-pink-900/40',
      borderGlow: 'group-hover:border-rose-500/50'
    },
  ];

  return (
    <section id="showcase" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative z-10">
      
      {/* Section Header */}
      <div className="mb-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3 h-3" /> E-Cell Portfolio
        </div>
        <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-white tracking-tight">
          Featured <span className="font-serif italic font-normal text-white/70">Startups</span>
        </h2>
        <p className="mt-6 text-white/60 max-w-2xl text-lg">
          Explore the groundbreaking ventures born out of The Foundry. From artificial intelligence to sustainable mobility, our founders are building the future.
        </p>
      </div>

      {/* Cinematic Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`group relative h-[500px] rounded-[2.5rem] bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 ${p.borderGlow} hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Abstract Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Blur Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

              {/* Content Container */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-white/80" />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10 text-white/70 text-xs font-mono tracking-widest backdrop-blur-md">
                    {p.tag}
                  </span>
                </div>

                {/* Bottom Section */}
                <div>
                  <h3 className="text-4xl font-display font-bold text-white mb-2 leading-tight drop-shadow-md">
                    {p.title}
                  </h3>
                  <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
                    {p.category}
                  </p>
                  <p className="text-white/70 leading-relaxed mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {p.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Button */}
      <div className="mt-24 text-center relative z-20">
        <a
          href="#offerings"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500 shadow-xl"
        >
          <span>Explore All Startups</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

