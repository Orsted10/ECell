import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Shivam Kumar Tiwari',
      role: 'President',
      image: 'https://framerusercontent.com/images/L20k7SPWAbx9kHfan5W4WR514g.png',
    },
    {
      name: 'Alka Singh',
      role: 'Vice-President',
      image: 'https://framerusercontent.com/images/3cgQeJYcAexgICvg7JYOYiUt30E.png',
    },
    {
      name: 'Mohd Humza',
      role: 'General Secretary',
      image: 'https://framerusercontent.com/images/8MseiF3JqiiEF1hCSU56AnC1Ow.png',
    },
    {
      name: 'Radhika Yadav',
      role: 'Marketing & PR Head',
      image: 'https://framerusercontent.com/images/3cgQeJYcAexgICvg7JYOYiUt30E.png',
    },
    {
      name: 'Aditya Raj',
      role: 'Events and Operations Lead',
      image: 'https://framerusercontent.com/images/L20k7SPWAbx9kHfan5W4WR514g.png',
    },
    {
      name: 'Priyanchal Soni',
      role: 'Technical Lead',
      image: 'https://framerusercontent.com/images/8MseiF3JqiiEF1hCSU56AnC1Ow.png',
    },
  ];

  return (
    <section id="team" className="py-32 px-4 md:px-8 max-w-6xl mx-auto border-t border-white/10 relative">
      {/* Background Dot Particle Wave Texture matching screenshot */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <img
          src="https://framerusercontent.com/images/Wyx3vnXhu5GNGk97dfJ58QbuQ.png"
          alt="Particle wave background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Header matching screenshot */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block mb-4">
          [ TEAM MEMBERS ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
          Meet Our <span className="font-serif italic font-normal text-white/80">Team Members</span>
        </h2>
      </div>

      {/* 3 Column Grid with Large Monochrome Portrait Cards matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="doppelrand-outer group cursor-pointer"
          >
            <div className="doppelrand-inner p-4 relative overflow-hidden bg-[#121216]">
              {/* Portrait Image Frame */}
              <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent opacity-80" />
                
                {/* Social Links on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Name & Role */}
              <div className="p-2">
                <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-white/50">
                  {member.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
