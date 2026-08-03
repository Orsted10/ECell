import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const StartupShowcase: React.FC = () => {
  const projects = [
    {
      title: 'EdVenture AI',
      subtitle: 'Featured / Launcher',
      category: 'EdTech & AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
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
    <section id="showcase" className="py-32 px-4 md:px-8 max-w-[100rem] mx-auto border-t border-white/10 relative z-10">
      
      {/* Section Header */}
      <div className="mb-20">
        <span className="text-sm uppercase tracking-[0.3em] text-white/80 font-mono font-bold block mb-4">
          [ Featured Ventures ]
        </span>
        <h2 className="text-5xl sm:text-7xl font-display font-extrabold text-white tracking-tight">
          Incubated <span className="font-serif italic font-normal text-white/70">Startups</span>
        </h2>
      </div>

      {/* Cards Stack matching cinematic mockup */}
      <div className="space-y-24">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 60, damping: 20 }}
            className="relative h-[700px] md:h-[800px] w-full rounded-[3rem] bg-[#09090b] border border-white/5 overflow-hidden shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_40px_80px_rgba(0,0,0,0.8)] group"
          >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full group-hover:bg-white/10 transition-colors duration-1000 ease-out" />
            </div>

            {/* Top Left Pills */}
            <div className="absolute top-10 left-10 flex flex-col gap-3 z-30">
              <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium tracking-wide backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                {p.tag}
              </span>
              <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium tracking-wide backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] w-fit">
                {p.category}
              </span>
            </div>

            {/* Top Right Stats (Desktop Only) */}
            <div className="absolute top-10 right-10 hidden md:flex flex-col gap-8 z-30 text-right w-64">
              <div className="flex items-center justify-end gap-5 border-b border-white/5 pb-5">
                <div className="text-3xl font-serif font-bold text-white drop-shadow-md">W.</div>
                <div className="text-left">
                  <div className="text-[13px] font-bold text-white mb-1">E-Cell highlight</div>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">June 2024</div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-5 border-b border-white/5 pb-5">
                <div className="text-3xl font-serif font-bold text-white drop-shadow-md">Bē</div>
                <div className="text-left">
                  <div className="text-[13px] font-bold text-white mb-1">Campus milestone</div>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">August 2024</div>
                </div>
              </div>
            </div>

            {/* Center Phone Mockup (The Hero) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px] md:w-[320px] md:h-[660px] z-20 group-hover:-translate-y-[52%] transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]">
              {/* Phone Hardware Frame */}
              <div className="relative w-full h-full rounded-[3rem] border-[8px] border-[#1a1a1c] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2),0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Dynamic Island Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]" />
                
                {/* App UI / Image Content */}
                <div className="absolute inset-0 bg-[#f4f4f5]">
                  {/* Faux App Header inside phone */}
                  <div className="absolute top-16 w-full text-center z-20 px-4">
                    <h4 className="text-4xl font-display font-extrabold text-black leading-tight tracking-tight">
                      {p.title.split(' ')[0]}<br/>
                      <span className="text-emerald-600">{p.title.split(' ').slice(1).join(' ')}</span>
                    </h4>
                  </div>
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="absolute bottom-0 w-full h-[70%] object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  {/* Faux bottom gradient inside phone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Center Phone Reflection */}
            <div 
              className="absolute left-1/2 top-[calc(50%+280px)] md:top-[calc(50%+320px)] -translate-x-1/2 w-[280px] md:w-[320px] h-[580px] md:h-[660px] scale-y-[-1] z-10 opacity-30 blur-[4px] pointer-events-none group-hover:opacity-10 group-hover:translate-y-6 group-hover:blur-[8px] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" 
              style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 35%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 35%)' }}
            >
              <div className="w-full h-full rounded-[3rem] border-[8px] border-[#1a1a1c] bg-[#f4f4f5] overflow-hidden">
                <img src={p.image} alt={p.title} className="absolute bottom-0 w-full h-[70%] object-cover object-top" />
              </div>
            </div>

            {/* Bottom Left Title */}
            <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-30">
              <p className="text-[13px] text-white/50 font-medium tracking-wide mb-4">E-Cell Chandigarh University, Uttar Pradesh</p>
              <h3 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                {p.title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>

            {/* Bottom Right Button */}
            <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 z-30 text-right flex flex-col items-end gap-6">
              <p className="text-sm text-white/60 font-light leading-relaxed hidden lg:block max-w-[280px]">
                {p.description}
              </p>
              <button className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-[13px] tracking-wide hover:bg-white/90 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95">
                <span>Made in E-Cell</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
          </motion.div>
        ))}
      </div>

      {/* Center Button */}
      <div className="mt-24 text-center relative z-20">
        <a
          href="#offerings"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#1a1a1c] border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500 shadow-2xl"
        >
          <span>Explore All Startups</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
