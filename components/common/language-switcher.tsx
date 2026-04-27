'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Language');

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{t('select')}:</span>
      <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
        <button
          onClick={() => handleLanguageChange('fr')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            locale === 'fr' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => handleLanguageChange('sw')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            locale === 'sw' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          SW
        </button>
        <button
          onClick={() => handleLanguageChange('kin')}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            locale === 'kin' 
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50 shadow-sm' 
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
        >
          KIN
        </button>
      </div>
    </div>
  );
}
