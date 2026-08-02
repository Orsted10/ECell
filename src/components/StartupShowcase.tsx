import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const StartupShowcase: React.FC = () => {
  const projects = [
    {
      title: 'EdVenture AI',
      subtitle: 'Featured / Launcher',
      category: 'EdTech & AI',
      image: 'https://framerusercontent.com/images/TGcveslLFOoJEhB079jeYPrB8A.png',
      tag: 'INCUBATED VENTURE',
      description: 'Personalized AI tutor platform delivering adaptive learning paths for higher education STEM students.',
    },
    {
      title: 'GreenGrid Mobility',
      subtitle: 'Featured / Brand',
      category: 'EV & Sustainability',
      image: 'https://framerusercontent.com/images/vt1yWVm705HU96sMIHFT2Gf0SZ0.png',
      tag: 'SEED FUNDED',
      description: 'Smart battery swapping network designed specifically for last-mile delivery fleets on university campuses.',
    },
    {
      title: 'Virtual Reality Lab',
      subtitle: 'Virtual / Reality Lab',
      category: 'HealthTech & Hardware',
      image: 'https://framerusercontent.com/images/R5C9E9dqFAvJrv0g9dLqaUvnNT0.png',
      tag: 'PATENT FILED',
      description: 'Non-invasive continuous biometric monitoring patch for preventive cardiac care in rural clinics.',
    },
  ];

  return (
    <section id="showcase" className="py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/10">
      {/* Cards Stack matching screenshot */}
      <div className="space-y-12">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="rounded-[2.5rem] bg-[#121216] border border-white/10 p-6 md:p-10 relative overflow-hidden group cursor-pointer shadow-2xl"
          >
            {/* Banner Image Container */}
            <div className="relative h-[380px] sm:h-[480px] rounded-[1.75rem] overflow-hidden mb-8 border border-white/10">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216]/90 via-transparent to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-6 left-6">
                <span className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-black/70 text-white/90 border border-white/20 backdrop-blur-md">
                  {p.tag}
                </span>
              </div>
            </div>

            {/* Bottom Content Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
                  {p.subtitle}
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 font-light mt-3 max-w-xl">
                  {p.description}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all shrink-0">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center Button matching screenshot */}
      <div className="mt-16 text-center">
        <a
          href="#offerings"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-xl"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
