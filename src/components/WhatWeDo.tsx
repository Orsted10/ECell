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
      <div className="relative w-full max-w-4xl mx-auto flex flex-col">
        {offerings.map((item, idx) => (
          <CinematicCard key={item.num} item={item} onOpenJoinModal={onOpenJoinModal} index={idx} />
        ))}
        {/* Massive spacer to allow the final card to scroll all the way up to its sticky position */}
        <div className="h-[800px] w-full pointer-events-none" />
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
  // Give each card a slightly different accent color for the glowing orb
  const colors = [
    'from-blue-500/20',
    'from-purple-500/20',
    'from-emerald-500/20',
    'from-orange-500/20'
  ];
  const accentColor = colors[index % colors.length];

  return (
    <div
      className="sticky w-full cursor-pointer mb-24 last:mb-0 transition-transform duration-700 hover:-translate-y-4"
      style={{
        top: `calc(15vh + ${index * 25}px)`,
        zIndex: index + 1,
      }}
      onClick={onOpenJoinModal}
    >
      <div className="group h-full relative rounded-[2.5rem] p-[1px] overflow-hidden bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        {/* We use a 1px padding wrapper to create a perfect gradient border effect */}
        <div className="relative p-8 sm:p-12 flex flex-col justify-between h-[450px] overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.5rem] shadow-[inset_0_0_80px_rgba(255,255,255,0.05)]">
          
          {/* Intense Colorful Inner Glow */}
          <div className={`absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-gradient-to-br ${accentColor} to-transparent rounded-full blur-[80px] opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          {/* Top Row: Number & Asset Image Frame */}
          <div className="flex items-center justify-between z-10 mb-8">
            <span className="text-sm font-bold font-mono text-white/60 tracking-[0.4em] uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg">
              {item.num}
            </span>
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-125 group-hover:-rotate-6 group-hover:border-white/60 transition-all duration-700 bg-black/50 backdrop-blur-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div className="my-4 z-10 flex-grow flex flex-col justify-center">
            <div className="mb-5">
              <span className="text-xs uppercase font-mono tracking-[0.2em] px-4 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-transparent text-white border-l-2 border-white inline-block shadow-sm">
                {item.tag}
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-5 drop-shadow-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">
              {item.title}
            </h3>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light group-hover:text-white transition-colors duration-500 max-w-2xl drop-shadow-sm">
              {item.description}
            </p>
          </div>

          {/* Bottom Row: Action Link */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 z-10 mt-auto">
            <span className="text-sm uppercase font-bold text-white/70 tracking-[0.25em] group-hover:text-white transition-colors duration-500">
              Get Involved
            </span>
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-rotate-45 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
