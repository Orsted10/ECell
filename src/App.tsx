import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { Vision } from './components/Vision';
import { Roadmap } from './components/Roadmap';
import { Impact } from './components/Impact';
import { StartupShowcase } from './components/StartupShowcase';
import { FounderStories } from './components/FounderStories';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { JoinCommunityModal } from './components/JoinCommunityModal';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BlurGradient } from './components/BlurGradient';

export function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll for Framer-level butter smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0c] text-white min-h-screen relative font-sans selection:bg-white selection:text-black">
      {/* Framer Custom Magic Cursor & Blur Overlay */}
      <CustomCursor />
      <BlurGradient />

      {/* Navigation */}
      <Navbar onOpenJoinModal={() => setJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenJoinModal={() => setJoinModalOpen(true)} />
        <Vision />
        <WhatWeDo onOpenJoinModal={() => setJoinModalOpen(true)} />
        <Roadmap />
        <Impact />
        <StartupShowcase />
        <FounderStories />
        <Team />
        <FAQ />
      </main>

      {/* Footer & Modal */}
      <Footer />
      <JoinCommunityModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}

export default App;
