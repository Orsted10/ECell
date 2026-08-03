import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, CheckCircle2, Sparkles, ChevronRight, Download, BrainCircuit, Users, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import * as htmlToImage from 'html-to-image';
import { FounderCard } from './FounderCard';
import { generateFounderScore } from '../utils/scoring';
import { supabase, FounderApplication } from '../lib/supabase';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRACKS = [
  { id: 'Founder', icon: Rocket, desc: 'You have a vision and want to build a startup.' },
  { id: 'Builder', icon: BrainCircuit, desc: 'You write code and build products.' },
  { id: 'Designer', icon: Sparkles, desc: 'You craft beautiful UI/UX and brand identities.' },
  { id: 'Growth', icon: Target, desc: 'You scale products and acquire users.' },
  { id: 'Operations', icon: Users, desc: 'You optimize processes and manage teams.' },
];

export const JoinCommunityModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    department: '',
    year: '1st Year',
    phone: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    track: '',
    problemStatement: '',
    buildIn30Days: '',
    pastExperience: '',
    skills: '',
    weeklyAvailability: '10-20 hours',
    pledgeAccepted: false
  });

  const [founderScore, setFounderScore] = useState<any>(null);
  const [founderId, setFounderId] = useState<string>('');

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStep(6); // Processing step

    // 1. Generate Score
    const score = await generateFounderScore(formData.track, {
      problem: formData.problemStatement,
      build: formData.buildIn30Days,
      past: formData.pastExperience
    });
    setFounderScore(score);
    
    // Generate pseudo-random ID
    const fId = `FND-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setFounderId(fId);

    // 2. Submit to Supabase (Graceful fallback if keys aren't provided)
    try {
      const application: FounderApplication = {
        full_name: formData.fullName,
        email: formData.email,
        student_id: formData.studentId,
        department: formData.department,
        year: formData.year,
        phone: formData.phone,
        linkedin_url: formData.linkedinUrl,
        github_url: formData.githubUrl,
        portfolio_url: formData.portfolioUrl,
        track: formData.track,
        problem_statement: formData.problemStatement,
        build_in_30_days: formData.buildIn30Days,
        past_experience: formData.pastExperience,
        skills: formData.skills.split(',').map(s => s.trim()),
        weekly_availability: formData.weeklyAvailability,
        founder_score: score.overall,
        status: 'pending'
      };

      const { error } = await supabase.from('applicants').insert([application]);
      if (error) {
        console.warn('Supabase insert failed. Likely missing credentials. Data:', application);
      }
    } catch (err) {
      console.warn('Error connecting to Supabase:', err);
    }

    // Artificial delay for cinematic effect
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(7); // Final Card step
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#10B981', '#ffffff', '#3B82F6']
      });
    }, 3500);
  };

  const handleDownloadCard = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, { quality: 1.0, pixelRatio: 3 });
      const link = document.createElement('a');
      link.download = `${formData.fullName.replace(/\s+/g, '_')}_FounderCard.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error generating image', err);
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Heavy Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
          />

          <button onClick={onClose} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-50">
            <X className="w-5 h-5" />
          </button>

          {/* Main Wizard Container */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto px-6 py-12 hide-scrollbar flex flex-col items-center">
            
            <AnimatePresence mode="wait">
              {/* STEP 0: INTRO */}
              {step === 0 && (
                <motion.div key="step0" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="text-center max-w-2xl mx-auto pt-20">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-8">
                    <Sparkles className="w-4 h-4" /> The Foundry
                  </div>
                  <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                    This isn't just another college club.
                  </h1>
                  <p className="text-xl text-white/60 font-light mb-12">
                    We build founders. We ship products. We create impact. If you're looking for a casual society, this isn't for you.
                  </p>
                  <button onClick={handleNext} className="px-10 py-5 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    I Accept The Challenge
                  </button>
                </motion.div>
              )}

              {/* STEP 1: PERSONAL DETAILS */}
              {step === 1 && (
                <motion.div key="step1" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-2xl mx-auto">
                  <div className="mb-10">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step 1 of 5</span>
                    <h2 className="text-4xl font-display font-bold text-white">Identify Yourself</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase mb-2">Full Name</label>
                        <input type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Steve Jobs" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase mb-2">University Email</label>
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="steve@cuchd.in" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase mb-2">Student ID (UID)</label>
                        <input type="text" value={formData.studentId} onChange={e => setFormData({...formData, studentId: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="21BCSXXXX" />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase mb-2">Year</label>
                        <select value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-[#111115] border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors">
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/40 uppercase mb-2">Phone</label>
                        <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/40 uppercase mb-2">LinkedIn URL</label>
                      <input type="text" value={formData.linkedinUrl} onChange={e => setFormData({...formData, linkedinUrl: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="linkedin.com/in/stevejobs" />
                    </div>
                    <div className="flex justify-end pt-6">
                      <button onClick={handleNext} disabled={!formData.fullName || !formData.email || !formData.studentId} className="flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        Next Phase <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TRACK SELECTION */}
              {step === 2 && (
                <motion.div key="step2" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-4xl mx-auto">
                  <div className="mb-10 text-center">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step 2 of 5</span>
                    <h2 className="text-4xl font-display font-bold text-white">Choose Your Weapon</h2>
                    <p className="text-white/50 mt-4">Select your primary role in the ecosystem.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TRACKS.map(track => {
                      const Icon = track.icon;
                      const isSelected = formData.track === track.id;
                      return (
                        <div 
                          key={track.id}
                          onClick={() => setFormData({...formData, track: track.id})}
                          className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${isSelected ? 'bg-emerald-500/10 border-emerald-500 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'}`}
                        >
                          <Icon className={`w-8 h-8 mb-4 ${isSelected ? 'text-emerald-400' : 'text-white/40'}`} />
                          <h3 className="text-xl font-bold text-white mb-2">{track.id}</h3>
                          <p className="text-sm text-white/50 leading-relaxed">{track.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-between pt-10">
                    <button onClick={handlePrev} className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">Back</button>
                    <button onClick={handleNext} disabled={!formData.track} className="flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                      Next Phase <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: MINDSET */}
              {step === 3 && (
                <motion.div key="step3" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-2xl mx-auto">
                  <div className="mb-10">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step 3 of 5</span>
                    <h2 className="text-4xl font-display font-bold text-white mb-2">Startup DNA</h2>
                    <p className="text-white/50">Show us how you think. Be concise but impactful.</p>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">What's one problem you notice every day that nobody is solving?</label>
                      <textarea rows={3} value={formData.problemStatement} onChange={e => setFormData({...formData, problemStatement: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="I noticed that..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">If we gave you $10,000 today, what would you build in 30 days?</label>
                      <textarea rows={3} value={formData.buildIn30Days} onChange={e => setFormData({...formData, buildIn30Days: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="I would build..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">Describe something you've built or achieved.</label>
                      <textarea rows={3} value={formData.pastExperience} onChange={e => setFormData({...formData, pastExperience: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Hackathons, startups, open source..." />
                    </div>
                    <div className="flex justify-between pt-6">
                      <button onClick={handlePrev} className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">Back</button>
                      <button onClick={handleNext} disabled={!formData.problemStatement || !formData.buildIn30Days} className="flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-black font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 transition-colors disabled:opacity-50">
                        Next Phase <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SKILLS & PLEDGE */}
              {step === 4 && (
                <motion.div key="step4" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-2xl mx-auto">
                  <div className="mb-10">
                    <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">Step 4 of 5</span>
                    <h2 className="text-4xl font-display font-bold text-white mb-2">Capabilities</h2>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">Core Skills (Comma separated)</label>
                      <input type="text" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="React, Python, Marketing, Figma..." />
                    </div>
                    
                    <div className="pt-6 border-t border-white/10">
                      <h3 className="text-2xl font-display font-bold text-white mb-6">The Founder Pledge</h3>
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-1">
                          <input type="checkbox" className="peer sr-only" checked={formData.pledgeAccepted} onChange={(e) => setFormData({...formData, pledgeAccepted: e.target.checked})} />
                          <div className="w-6 h-6 rounded border-2 border-white/20 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-black opacity-0 peer-checked:opacity-100" />
                          </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">
                          I pledge to build relentlessly, learn constantly, collaborate with the ecosystem, ship consistently, and represent Chandigarh University with pride. I understand that builders aren't selected; they prove themselves.
                        </p>
                      </label>
                    </div>

                    <div className="flex justify-between pt-6">
                      <button onClick={handlePrev} className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">Back</button>
                      <button onClick={handleNext} disabled={!formData.skills || !formData.pledgeAccepted} className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-colors shadow-xl disabled:opacity-50">
                        Final Review <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: CONFIRMATION */}
              {step === 5 && (
                <motion.div key="step5" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-xl mx-auto text-center">
                  <div className="w-24 h-24 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-8">
                    <Rocket className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white mb-6">Ready for Ignition?</h2>
                  <p className="text-white/60 mb-10 text-lg">
                    By submitting this application, you are entering the evaluation pool for The Foundry. We will generate your Startup DNA profile and Founder ID immediately.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button onClick={handlePrev} className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">Go Back</button>
                    <button onClick={handleSubmit} className="px-10 py-4 rounded-full bg-emerald-500 text-black font-bold text-sm tracking-widest uppercase hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      Submit & Generate ID
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 6: PROCESSING */}
              {step === 6 && (
                <motion.div key="step6" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-md mx-auto text-center py-20">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="w-8 h-8 text-emerald-400 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Analyzing Startup DNA...</h3>
                  <p className="text-white/50 font-mono text-sm tracking-widest uppercase animate-pulse">Minting Founder Passport</p>
                </motion.div>
              )}

              {/* STEP 7: FOUNDER PASSPORT */}
              {step === 7 && founderScore && (
                <motion.div key="step7" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Welcome to<br/>The Foundry.</h2>
                    <p className="text-lg text-white/60 mb-8 max-w-md">
                      Your application has been logged. Builders aren't selected. They prove themselves. Here is your official Founder Passport. Download and share it on LinkedIn.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <button onClick={handleDownloadCard} className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-colors shadow-xl">
                        <Download className="w-4 h-4" /> Download Card
                      </button>
                      <button onClick={onClose} className="px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors">
                        Close
                      </button>
                    </div>
                  </div>
                  
                  {/* The Founder Card Component (Visible & Downloadable) */}
                  <div className="relative shrink-0">
                    {/* Floating animation wrapper */}
                    <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                      <FounderCard 
                        ref={cardRef}
                        name={formData.fullName} 
                        uid={formData.studentId} 
                        track={formData.track} 
                        score={founderScore}
                        founderId={founderId}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
