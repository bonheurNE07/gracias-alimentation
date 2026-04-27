'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('Errors');

  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-6 min-h-[70vh] text-center">
      <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-4xl mb-6 shadow-sm border border-zinc-200/50 dark:border-zinc-700/30">
        🍽️
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 animate-fade-in">
        {t('notFoundTitle')}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8">
        {t('notFoundDesc')}
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {t('backToMenu')}
      </Link>
    </div>
  );
}
