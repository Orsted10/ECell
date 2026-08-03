import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface WhatWeDoProps {
  onOpenJoinModal: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenJoinModal }) => {
  const offerings = [
    {
      num: '/01',
      title: 'Startup Incubation',
      image: 'https://framerusercontent.com/images/kSNWwZnlXmObrxxkf8A0ATWAqUM.png',
      description:
        'Turn early-stage concepts into scalable, pitch-ready ventures with dedicated workspace, tech infrastructure, and legal guidance.',
      tag: 'Incubation Support',
    },
    {
      num: '/02',
      title: 'Ideathons & Hackathons',
      image: 'https://framerusercontent.com/images/9I7Qx7g7CBfFZ73OXVEkVFSQ.png',
      description:
        'High-intensity innovation challenges to brainstorm, build working prototypes, and validate solutions with real users and judges.',
      tag: 'Competitions',
    },
    {
      num: '/03',
      title: 'Mentor & Alumni Network',
      image: 'https://framerusercontent.com/images/8k6Berw12UVQksnDsQX0hgMEs.png',
      description:
        'Learn directly from successful founders, VC investors, and campus alumni who walk the journey with you from day one.',
      tag: 'Mentorship',
    },
    {
      num: '/04',
      title: 'Pitch & Seed Funding',
      image: 'https://framerusercontent.com/images/zPbOW46xOX0IqHUqx1WsHTkDEeo.png',
      description:
        'Build compelling pitch decks, present at E-Cell Demo Days, and unlock dedicated campus seed funding pools up to ₹10 Lakhs per venture.',
      tag: 'Capital & Pitching',
    },
  ];

  return (
    <section id="offerings" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 border-b border-white/10 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Sleek Pill Tag */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-white/80 uppercase font-bold">
              Core Programs
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-bold text-white tracking-tighter leading-none">
            What We <span className="font-serif italic font-normal text-white/90">Offer</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-lg font-light leading-relaxed"
        >
          From raw ideas to venture launch, <span className="text-white font-medium">E-Cell Chandigarh University</span> provides student founders with the tools, mentorship, and funding opportunities to scale.
        </motion.p>
      </div>

      {/* Offerings Stack - Cinematic Sticky Architecture */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col">
        {offerings.map((item, idx) => (
          <CinematicCard key={item.num} item={item} onOpenJoinModal={onOpenJoinModal} index={idx} />
        ))}
        {/* Massive invisible spacer to guarantee the final card has enough scrolling runway to fully stack */}
        <div className="h-[100vh] w-full pointer-events-none shrink-0" />
      </div>
    </section>
  );
};

// --- CINEMATIC CARD COMPONENT ---

interface CinematicCardProps {
  item: any;
  onOpenJoinModal: () => void;
  index: number;
}

const CinematicCard: React.FC<CinematicCardProps> = ({ item, onOpenJoinModal, index }) => {
  // Use ultra-premium monochromatic/metallic tones to perfectly match the dark aesthetic
  const colors = [
    'from-white/20',
    'from-zinc-400/20',
    'from-neutral-400/20',
    'from-slate-400/20'
  ];
  const accentColor = colors[index % colors.length];

  return (
    <div
      className="sticky w-full cursor-pointer mb-32 last:mb-0 transition-transform duration-700 hover:-translate-y-6"
      style={{
        top: `calc(10vh + ${index * 35}px)`,
        zIndex: index + 1,
      }}
      onClick={onOpenJoinModal}
    >
      <div className="group h-full relative rounded-[3rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-[0_-30px_80px_rgba(0,0,0,0.9)]">
        {/* We use a 1px padding wrapper to create a perfect gradient border effect */}
        <div className="relative p-10 sm:p-16 flex flex-col justify-between min-h-[550px] overflow-hidden bg-[#050505]/90 backdrop-blur-3xl rounded-[3rem] shadow-[inset_0_0_100px_rgba(255,255,255,0.03)]">
          
          {/* Premium Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

          {/* Intense Colorful Inner Glow */}
          <div className={`absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-gradient-to-br ${accentColor} to-transparent rounded-full blur-[100px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0`} />
          <div className="absolute -bottom-40 -right-40 w-[35rem] h-[35rem] bg-white/10 rounded-full blur-[80px] opacity-40 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none z-0" />

          {/* Top Row: Number & Asset Image Frame */}
          <div className="flex items-center justify-between z-10 mb-10">
            <span className="text-base font-bold font-mono text-white/80 tracking-[0.5em] uppercase bg-white/10 px-6 py-3 rounded-full border border-white/20 shadow-2xl backdrop-blur-md">
              {item.num}
            </span>
            <div className="w-24 h-24 rounded-3xl overflow-hidden border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:-rotate-6 group-hover:border-white/80 transition-all duration-700 bg-black/50 backdrop-blur-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div className="my-6 z-10 flex-grow flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-sm uppercase font-mono tracking-[0.3em] px-5 py-2 rounded-full bg-gradient-to-r from-white/15 to-transparent text-white border-l-2 border-white inline-block shadow-lg backdrop-blur-sm">
                {item.tag}
              </span>
            </div>
            <h3 className="text-5xl sm:text-[4rem] leading-tight font-extrabold font-display text-white tracking-tight mb-6 drop-shadow-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all duration-700">
              {item.title}
            </h3>
            <p className="text-xl sm:text-2xl text-white/70 leading-relaxed font-light group-hover:text-white/95 transition-colors duration-700 max-w-3xl drop-shadow-md">
              {item.description}
            </p>
          </div>

          {/* Bottom Row: Action Link */}
          <div className="flex items-center justify-between pt-8 border-t border-white/15 z-10 mt-auto">
            <span className="text-base uppercase font-bold text-white/70 tracking-[0.3em] group-hover:text-white transition-colors duration-500">
              Get Involved
            </span>
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-xl group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-rotate-45 transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.8)]">
              <ArrowUpRight className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
