import React from 'react';
import { ArrowUp, Rocket, MapPin, Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070709] pt-20 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Col */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-wider font-display uppercase">
              E-Cell <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">CU UP</span>
            </span>
          </div>
          <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
            The official Entrepreneurship Cell of Chandigarh University Uttar Pradesh. Nurturing student innovation, early-stage ventures, and future founders.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70 font-light">
            <li>
              <a href="#vision" className="hover:text-white transition-colors">
                Vision & Story
              </a>
            </li>
            <li>
              <a href="#offerings" className="hover:text-white transition-colors">
                What We Offer
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-white transition-colors">
                Incubation Roadmap
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:text-white transition-colors">
                Milestones & Impact
              </a>
            </li>
            <li>
              <a href="#showcase" className="hover:text-white transition-colors">
                Startup Showcase
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
            Campus Office
          </h4>
          <div className="space-y-3 text-xs text-white/60 font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
              <span>Incubation Center, Chandigarh University Uttar Pradesh Campus</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-white/80 shrink-0" />
              <span>ecell@cuchd.in</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-white/80 shrink-0" />
              <span>+91 (0120) 800-ECELL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
        <p>© 2026 E-Cell Chandigarh University UP. All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
