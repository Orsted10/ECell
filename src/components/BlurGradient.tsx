import React from 'react';

export const BlurGradient: React.FC = () => {
  return (
    <>
      {/* Top Blur Overlay */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent backdrop-blur-[7px] pointer-events-none z-40" />
      {/* Bottom Blur Overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent backdrop-blur-[7px] pointer-events-none z-40" />
    </>
  );
};
