'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Haptics } from '@/utils/haptics';

const languages = [
  {
    code: 'fr',
    short: 'FR',
    label: 'Français',
  },
  {
    code: 'sw',
    short: 'SW',
    label: 'Swahili',
  },
  {
    code: 'kin',
    short: 'KIN',
    label: 'Kinande',
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Language');

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    Haptics.light();
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Trigger */}
      <button
        onClick={() => {
          Haptics.light();
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white/70 px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:border-zinc-700/50 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-900"
        aria-label={t('select')}
      >
        <span>{currentLanguage.short}</span>

        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 top-14 z-50 min-w-[180px] overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/80"
          >
            {languages.map((language) => {
              const isActive = locale === language.code;

              return (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                      : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span>{language.label}</span>

                  {isActive && (
                    <span className="text-xs font-semibold">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}