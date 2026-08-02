import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const FounderStories: React.FC = () => {
  const testimonials = [
    {
      quote:
        '“E-Cell Chandigarh University UP gave us the incubation space, legal guidance, and mentor connections to launch our startup right from campus.”',
      author: 'Aarav Sharma',
      role: 'Co-Founder at EdVenture',
      avatar: 'https://framerusercontent.com/images/L20k7SPWAbx9kHfan5W4WR514g.png',
    },
    {
      quote:
        '“The pitch competitions and ideathons sharpened our vision and helped us secure our initial seed funding from angel investors.”',
      author: 'Riya Patel',
      role: 'Founder at GreenGrid Mobility',
      avatar: 'https://framerusercontent.com/images/3cgQeJYcAexgICvg7JYOYiUt30E.png',
    },
    {
      quote:
        '“I joined with just a rough idea and left with a co-founder, a working prototype, and real investor interest during Demo Day.”',
      author: 'Karan Malhotra',
      role: 'Student Founder at HealthPulse',
      avatar: 'https://framerusercontent.com/images/8MseiF3JqiiEF1hCSU56AnC1Ow.png',
    },
  ];

  return (
    <section id="stories" className="py-32 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono block mb-3">
            [ Founder Testimonials ]
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight">
            Founder <span className="font-serif italic font-normal text-white/80">Stories</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
          Hear directly from students who transformed their ideas into real ventures through E-Cell.
        </p>
      </div>

      {/* Grid of Testimonial Cards with Framer Template Avatars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="doppelrand-outer group"
          >
            <div className="doppelrand-inner p-8 flex flex-col justify-between h-full min-h-[320px] relative">
              {/* Quote Icon & Stars */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 font-light leading-relaxed italic mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author Footer with Framer Template Avatar */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-md group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="text-base font-bold font-display text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs font-mono text-white/50">
                    {item.role}
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
