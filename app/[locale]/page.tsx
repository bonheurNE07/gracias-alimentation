'use client';

import { useTranslations } from 'next-intl';
import MenuGrid from '@/features/menu/components/MenuGrid';
import menuData from '@/data/menu.json';
import { motion } from 'framer-motion';

export default function IndexPage() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col items-center justify-start flex-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-4 transition-colors">
      <header className="text-center max-w-md mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 font-sans"
        >
          {t('title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-2 text-base text-zinc-600 dark:text-zinc-400 font-sans font-medium"
        >
          {t('description')}
        </motion.p>

      </header>

      <MenuGrid items={menuData} />
    </div>
  );
}


