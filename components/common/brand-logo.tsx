'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandLogo() {
  const [showText, setShowText] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    setShowText(true);

    // cleanup old timeout before creating new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowText(false);
    }, 2500);
  };

  useEffect(() => {
    return () => {
      // cleanup on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Brand Mark */}
      <button
        onClick={handleToggle}
        className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-md ring-1 ring-emerald-500/20 transition-transform active:scale-95"
      >
        <span className="text-lg font-extrabold tracking-tight text-white">
          G
        </span>

        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
      </button>

      {/* Floating Glass Text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.96 }}
            animate={{ opacity: 1, x: 10, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute left-10 top-1/2 z-50 -translate-y-1/2 whitespace-nowrap rounded-2xl border border-white/20 bg-white/70 px-4 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70"
          >
            <p className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
              Alimentation
            </p>
            <p className="text-xs font-medium tracking-wide text-emerald-700 dark:text-emerald-400">
              Gracias
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}