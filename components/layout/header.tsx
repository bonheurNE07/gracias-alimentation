'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useThemeStore } from '@/features/theme/store/useThemeStore';
import { useCartStore } from '@/features/cart/store/useCartStore';
import { useEffect, useState } from 'react';
import CartDrawer from '@/features/cart/components/CartDrawer';

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useThemeStore();
  const totalItems = useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0));
  const [mounted, setMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200/50 dark:border-zinc-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
          {/* Language Selection */}
          <div className="flex items-center gap-3 text-sm font-semibold tracking-wider">
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`transition-colors duration-200 ${
                locale === 'fr' 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              FR
            </button>
            <span className="text-zinc-300 dark:text-zinc-700 font-light">|</span>
            <button
              onClick={() => handleLanguageChange('sw')}
              className={`transition-colors duration-200 ${
                locale === 'sw' 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              SW
            </button>
            <span className="text-zinc-300 dark:text-zinc-700 font-light">|</span>
            <button
              onClick={() => handleLanguageChange('kin')}
              className={`transition-colors duration-200 ${
                locale === 'kin' 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              KIN
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm border border-zinc-200/50 dark:border-zinc-700/30 relative"
              aria-label="Open cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}

            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm border border-zinc-200/50 dark:border-zinc-700/30"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-zinc-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-amber-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.62 6.38l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

