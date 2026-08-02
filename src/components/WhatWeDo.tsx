import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono block mb-3">
            [ Core Programs ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            What We <span className="font-serif italic font-normal text-white/80">Offer</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
          From raw ideas to venture launch, E-Cell Chandigarh University UP provides student founders with the tools, mentorship, and funding opportunities to scale.
        </p>
      </div>

      {/* Offerings Grid - Double Bezel Architecture with Framer Template Assets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offerings.map((item, idx) => {
          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="doppelrand-outer group cursor-pointer"
              onClick={onOpenJoinModal}
            >
              <div className="doppelrand-inner p-8 flex flex-col justify-between h-full min-h-[380px] relative overflow-hidden">
                {/* Top Row: Number & Asset Image Frame */}
                <div className="flex items-center justify-between z-10 mb-6">
                  <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                    {item.num}
                  </span>
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/15 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Middle Content */}
                <div className="my-4 z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/10 mb-3 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Action Link */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 z-10">
                  <span className="text-xs uppercase font-semibold text-white/70 tracking-wider group-hover:text-white transition-colors">
                    Get Involved
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4" />
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
