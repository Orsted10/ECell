import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Who can join E-Cell Chandigarh University Uttar Pradesh?',
      a: 'E-Cell is open to all students across undergraduate, postgraduate, and PhD programs at Chandigarh University UP. Whether you have a concrete startup idea, technical skills, or simply want to learn about entrepreneurship, you are welcome to apply.',
    },
    {
      q: 'How do I apply for incubation or seed funding?',
      a: 'You can submit your venture pitch deck through our Join E-Cell portal. Shortlisted student teams are invited to present at our quarterly Cohort Screening, where selected ventures unlock workspace, legal mentorship, and up to ₹10 Lakhs in seed support.',
    },
    {
      q: 'Do I need a co-founder or team to participate in Ideathons?',
      a: 'No! You can register individually for our Ideathons and Hackathons. We host dedicated Team Matching mixers at the start of every event so solo builders can find co-founders, developers, and designers.',
    },
    {
      q: 'Is there any fee to join E-Cell or access incubation facilities?',
      a: 'No. E-Cell membership and campus incubation support are completely free for enrolled Chandigarh University Uttar Pradesh students.',
    },
    {
      q: 'Can non-technical students build startups at E-Cell?',
      a: 'Absolutely! Successful ventures require market researchers, strategists, designers, and domain experts alongside developers. We provide no-code tools workshops and pair domain experts with technical co-founders.',
    },
  ];

  return (
    <section id="faq" className="py-32 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/50 uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>[ Frequently Asked Questions ]</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
          Got <span className="font-serif italic font-normal text-white/80">Questions?</span>
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.q}
              className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-semibold text-lg sm:text-xl text-white hover:text-emerald-400 transition-colors"
              >
                <span>{item.q}</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
