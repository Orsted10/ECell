import React, { forwardRef } from 'react';
import { Sparkles, Fingerprint } from 'lucide-react';

interface FounderCardProps {
  name: string;
  uid: string;
  track: string;
  score: {
    overall: number;
    breakdown: {
      execution: number;
      problemSolving: number;
      leadership: number;
    };
  };
  founderId: string;
}

export const FounderCard = forwardRef<HTMLDivElement, FounderCardProps>(
  ({ name, uid, track, score, founderId }, ref) => {
    return (
      <div 
        ref={ref}
        className="w-[450px] h-[700px] rounded-[2rem] bg-gradient-to-b from-[#111115] to-[#0a0a0c] border border-white/10 relative overflow-hidden shadow-2xl flex flex-col"
        style={{
          boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.8)'
        }}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Card Header */}
        <div className="p-8 border-b border-white/5 relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-display font-bold tracking-widest uppercase text-sm">The Foundry</span>
            </div>
            <Fingerprint className="w-8 h-8 text-white/20" />
          </div>
          
          <h2 className="text-4xl font-display font-bold text-white mb-2 leading-tight">
            {name || 'Founder Name'}
          </h2>
          <p className="text-white/50 font-mono text-sm tracking-wider uppercase">
            UID: {uid || 'XXBCSXXXX'}
          </p>
        </div>

        {/* Card Body */}
        <div className="p-8 flex-1 flex flex-col justify-center relative z-10">
          <div className="mb-10">
            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] block mb-2">Primary Track</span>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-semibold">
              {track || 'Builder'}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] block mb-6">Startup DNA Score</span>
            
            <div className="flex items-end gap-4 mb-8">
              <div className="text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
                {score.overall}
              </div>
              <div className="text-sm text-white/40 font-mono mb-2">/ 99</div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                  <span>Execution</span>
                  <span className="text-white">{score.breakdown.execution}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${score.breakdown.execution}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                  <span>Problem Solving</span>
                  <span className="text-white">{score.breakdown.problemSolving}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${score.breakdown.problemSolving}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-mono text-white/60 mb-2">
                  <span>Leadership</span>
                  <span className="text-white">{score.breakdown.leadership}</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${score.breakdown.leadership}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="px-8 py-6 bg-black/40 border-t border-white/5 flex justify-between items-center relative z-10">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] mb-1">Founder ID</span>
            <span className="text-xs text-white font-mono tracking-widest">{founderId}</span>
          </div>
          <div className="w-12 h-12 flex flex-wrap gap-1 opacity-40">
            {/* Fake QR code pattern block */}
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

FounderCard.displayName = 'FounderCard';
