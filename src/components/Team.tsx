import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Sparkles } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Shivam Kumar Tiwari',
      role: 'President',
      initials: 'SKT',
      color: 'from-emerald-500/20 to-teal-900/40',
      glow: 'emerald'
    },
    {
      name: 'Alka Singh',
      role: 'Vice-President',
      initials: 'AS',
      color: 'from-blue-500/20 to-indigo-900/40',
      glow: 'blue'
    },
    {
      name: 'Mohd Humza',
      role: 'General Secretary',
      initials: 'MH',
      color: 'from-purple-500/20 to-fuchsia-900/40',
      glow: 'purple'
    },
    {
      name: 'Radhika Yadav',
      role: 'Marketing & PR Head',
      initials: 'RY',
      color: 'from-rose-500/20 to-red-900/40',
      glow: 'rose'
    },
    {
      name: 'Aditya Raj',
      role: 'Events and Operations Lead',
      initials: 'AR',
      color: 'from-amber-500/20 to-orange-900/40',
      glow: 'amber'
    },
    {
      name: 'Priyanchal Soni',
      role: 'Technical Lead',
      initials: 'PS',
      color: 'from-cyan-500/20 to-blue-900/40',
      glow: 'cyan'
    },
  ];

  return (
    <section id="team" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Background Dot Particle Wave Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <img
          src="https://framerusercontent.com/images/Wyx3vnXhu5GNGk97dfJ58QbuQ.png"
          alt="Particle wave background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Header */}
      <div className="text-center mb-24 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-mono text-xs tracking-widest uppercase mb-6">
          <Sparkles className="w-3 h-3" /> Core Leadership
        </div>
        <h2 className="text-5xl sm:text-7xl font-display font-bold text-white tracking-tight leading-tight">
          The Minds Behind <br />
          <span className="font-serif italic font-normal text-white/70">The Foundry</span>
        </h2>
      </div>

      {/* 3 Column Grid with Typography abstract cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative p-1 rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              
              {/* Abstract Initial Graphic Area */}
              <div className={`relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br ${member.color} border border-white/5 flex items-center justify-center`}>
                {/* Background blur orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Large Typography Initials */}
                <h3 className="text-8xl sm:text-9xl font-display font-bold text-white/90 drop-shadow-2xl mix-blend-overlay group-hover:scale-110 transition-transform duration-700 select-none">
                  {member.initials}
                </h3>
                
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216]/80 via-transparent to-transparent opacity-80" />
                
                {/* Social Links on Hover */}
                <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Name & Role */}
              <div className="px-6 pb-6 text-center">
                <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-white transition-colors tracking-tight">
                  {member.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <p className="text-xs font-mono text-white/60 tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

