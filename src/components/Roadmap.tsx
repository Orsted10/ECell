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
    <section id="roadmap" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono block mb-3">
            [ Founder Journey ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            Incubation <span className="font-serif italic font-normal text-white/80">Roadmap</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
          A structured 4-phase acceleration framework designed to take student builders from zero to launch.
        </p>
      </div>

      {/* Grid of Roadmap Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="doppelrand-outer group"
          >
            <div className="doppelrand-inner p-6 flex flex-col justify-between h-full min-h-[360px] relative">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-white/40">{step.number}</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/10">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-4">
                  {step.subtitle}
                </p>
                <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                  {step.content}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {step.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-[11px] text-white/70">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
