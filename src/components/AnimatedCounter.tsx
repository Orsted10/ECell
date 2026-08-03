import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseStatValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: '', target: 0, suffix: raw, hasCommas: false, decimals: 0, animDecimals: 0 };
  }
  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];

  const hasCommas = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const target = parseFloat(cleanNumStr) || 0;

  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0;
  // For small integer targets (like 1 in 1Cr+), use 1 decimal place while counting up for smooth visual progression
  const animDecimals = (decimals === 0 && target <= 5 && target > 0) ? 1 : decimals;

  return { prefix, target, suffix, hasCommas, decimals, animDecimals };
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 2.2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [displayValue, setDisplayValue] = useState<string>(value);

  const { prefix, target, suffix, hasCommas, decimals, animDecimals } = parseStatValue(value);

  // Top-level hook call
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView || target === 0) return;

    const unsubscribe = count.on('change', (latest) => {
      const isComplete = latest >= target - 0.0001;
      const activeDecimals = isComplete ? decimals : animDecimals;
      let formatted = activeDecimals > 0 ? latest.toFixed(activeDecimals) : Math.round(latest).toString();

      // Prevent showing ".0" for whole numbers during animation (e.g., skip 1.0 and just show 1)
      if (decimals === 0 && activeDecimals > 0 && formatted.endsWith('.0')) {
        formatted = formatted.slice(0, -2);
      }

      if (hasCommas) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`);
    });

    const controls = animate(count, target, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth custom ease-out
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, count, target, duration, prefix, suffix, hasCommas, decimals, animDecimals]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
