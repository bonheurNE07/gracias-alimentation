'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useThemeStore } from '@/features/theme/store/useThemeStore';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const t = useTranslations('Index');
  const { theme } = useThemeStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 ${
            theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'
          }`}
        >

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              className="w-20 h-20 rounded-3xl bg-emerald-600 flex items-center justify-center text-3xl font-extrabold shadow-xl select-none"
            >
              G
            </motion.div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              {t('title')}
            </h1>
            
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-xs">
              {t('description')}
            </p>


            <div className="mt-8 flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
