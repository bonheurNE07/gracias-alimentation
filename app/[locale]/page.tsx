import { useTranslations } from 'next-intl';
import MenuGrid from '@/features/menu/components/MenuGrid';
import menuData from '@/data/menu.json';

export default function IndexPage() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col items-center justify-start flex-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-4 transition-colors">
      <header className="text-center max-w-md mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          {t('description')}
        </p>
      </header>

      <MenuGrid items={menuData} />
    </div>
  );
}


