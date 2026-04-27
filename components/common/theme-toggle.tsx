'use client';

import { useThemeStore } from '@/features/theme/store/useThemeStore';
import { useTranslations } from 'next-intl';

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  const t = useTranslations('Theme');

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{t('toggle')}:</span>
      <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
        <button
          onClick={() => setTheme('light')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            theme === 'light' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            theme === 'dark' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            theme === 'system' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          System
        </button>
      </div>
    </div>
  );
}
