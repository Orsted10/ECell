import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const steps = [
    {
      number: '/01',
      title: 'Discover',
      subtitle: 'Problem Identification',
      content:
        'Notice campus and real-world problems, ask better questions, form multidisciplinary student teams, and find opportunities worth pursuing.',
      highlights: ['Problem Statements', 'Team Formation', 'Market Research'],
    },
    {
      number: '/02',
      title: 'Validate & Prototype',
      subtitle: 'MVP & User Testing',
      content:
        'Talk to real users, test early assumptions, build no-code or code MVPs, and turn raw hypotheses into verified evidence.',
      highlights: ['User Interviews', 'Rapid Prototyping', 'Product Design'],
    },
    {
      number: '/03',
      title: 'Incubate & Scale',
      subtitle: 'Workspace & Legal Support',
      content:
        'Access dedicated incubation workspace at Chandigarh University UP, legal and IPR registration, cloud credits, and technical infrastructure.',
      highlights: ['Incubation Desk', 'Patent Filing', 'Mentorship Hours'],
    },
    {
      number: '/04',
      title: 'Launch & Pitch',
      subtitle: 'Funding & Demo Day',
      content:
        'Practice investor pitches, present at E-Cell Demo Days, connect with angel investors, and unlock seed funding pools to launch.',
      highlights: ['E-Cell Demo Day', '₹10L Seed Pool', 'VC Network'],
    },
  ];

  return (
    <section id="roadmap" className="py-32 px-4 md:px-8 w-full relative z-10 border-t border-white/10 bg-black">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 max-w-screen-2xl mx-auto">
        <div>
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 font-mono font-bold block mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            [ Founder Journey ]
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-[6rem] leading-none font-display font-extrabold text-white tracking-tight drop-shadow-2xl">
            Incubation <span className="font-serif italic font-normal text-white/90">Roadmap</span>
          </h2>
        </div>
        <p className="text-lg sm:text-2xl text-white/80 max-w-xl font-light leading-relaxed drop-shadow-md">
          A structured 4-phase acceleration framework designed to take student builders from zero to launch.
        </p>
      </div>

      {/* Grid of Roadmap Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 120, scale: 0.8, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            whileHover={{ y: -20, scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: idx * 0.15, type: "spring", stiffness: 60, damping: 20 }}
            className="group relative rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/40 via-white/5 to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.9)] cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            {/* Inner Card Container */}
            <div className="relative p-8 sm:p-10 flex flex-col justify-between h-full min-h-[500px] overflow-hidden bg-[#070707]/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[inset_0_0_80px_rgba(255,255,255,0.05)] z-10">
              
              {/* Giant Background Number for Depth */}
              <div className="absolute -top-10 -right-10 text-[16rem] font-display font-extrabold text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-700 pointer-events-none select-none leading-none z-0">
                0{idx + 1}
              </div>

              {/* Premium Noise Overlay */}
              <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

              {/* Intense Silver Spotlight */}
              <div className={`absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-[80px] opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-1000 pointer-events-none z-0`} />

              {/* Top Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-2xl font-mono font-extrabold text-white/50 group-hover:text-white transition-colors duration-500 drop-shadow-2xl">{step.number}</span>
                  <span className="text-xs uppercase font-bold font-mono tracking-[0.3em] px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 shadow-2xl backdrop-blur-xl group-hover:border-white/50 group-hover:bg-white/20 transition-colors duration-500">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-4xl font-extrabold font-display text-white mb-3 drop-shadow-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-500 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-mono text-white/70 uppercase tracking-[0.3em] mb-8 drop-shadow-lg group-hover:text-white transition-colors duration-500">
                  {step.subtitle}
                </p>
                <p className="text-base text-white/80 leading-relaxed font-light mb-10 group-hover:text-white transition-colors duration-500 drop-shadow-sm">
                  {step.content}
                </p>
              </div>

              {/* Highlights List with Staggered 3D Fade */}
              <div className="relative z-10 pt-8 border-t border-white/15 space-y-4 mt-auto">
                {step.highlights.map((h, i) => (
                  <motion.div 
                    key={h} 
                    initial={{ opacity: 0, x: -20, rotateX: 45 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    transition={{ delay: idx * 0.15 + i * 0.15 + 0.3, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-500"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/30 group-hover:bg-white group-hover:border-white transition-colors duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] group-hover:scale-110">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors duration-500" />
                    </div>
                    <span className="tracking-wide">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
