import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/common/language-switcher';
import ThemeToggle from '@/components/common/theme-toggle';

export default function IndexPage() {
  const t = useTranslations('Index');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-4 transition-colors">
      <header className="absolute top-4 right-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
      </header>
      
      <main className="text-center max-w-md">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {t('description')}
        </p>
      </main>
    </div>
  );
}
