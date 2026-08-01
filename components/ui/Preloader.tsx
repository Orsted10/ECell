"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial extremely fast load just for the premium snap effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="overflow-hidden flex flex-col items-center gap-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="block text-3xl font-extrabold tracking-widest text-gradient uppercase"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              E-CELL CUUP
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[0.65rem] tracking-[0.3em] text-[#FF5500] uppercase font-mono"
            >
              FOUNDRY // INITIALIZING 2025
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
