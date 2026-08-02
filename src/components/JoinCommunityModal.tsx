import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinCommunityModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    department: 'Computer Science & Engineering',
    interest: 'Startup Incubation',
    ideaDescription: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 w-full max-w-xl doppelrand-outer"
          >
            <div className="doppelrand-inner p-8 relative overflow-hidden bg-[#121216]">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <>
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>[ Join The Movement ]</span>
                  </div>
                  <h3 className="text-3xl font-bold font-display text-white mb-2">
                    Apply For E-Cell Membership
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    Chandigarh University Uttar Pradesh Campus Ecosystem. Fill in your details below to get started.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          University Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="student@cuchd.in"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Student ID / UID *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.studentId}
                          onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                          placeholder="e.g. 21BCS1045"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                        Primary Interest *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181f] border border-white/10 text-white focus:outline-none focus:border-white/40 text-sm"
                      >
                        <option value="Startup Incubation">Startup Incubation (Have an Idea)</option>
                        <option value="Ideathons & Hackathons">Ideathons & Hackathons (Competitions)</option>
                        <option value="Join a Startup Team">Join a Startup Team (Looking for Co-founders)</option>
                        <option value="Executive Board">E-Cell Executive Board Volunteer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                        Brief Startup Idea or Skillset (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.ideaDescription}
                        onChange={(e) => setFormData({ ...formData, ideaDescription: e.target.value })}
                        placeholder="Tell us what problem you want to solve..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-xl mt-6"
                    >
                      <Rocket className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold font-display text-white mb-2">
                    Application Received!
                  </h3>
                  <p className="text-sm text-white/70 max-w-sm mb-8 font-light">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our student executive board will review your profile and contact you at <span className="text-white font-mono">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
