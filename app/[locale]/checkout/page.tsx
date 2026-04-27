'use client';

import { useTranslations } from 'next-intl';
import { useCartStore } from '@/features/cart/store/useCartStore';
import CheckoutForm from '@/features/checkout/components/CheckoutForm';
import { Link } from '@/i18n/navigation';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const t = useTranslations('Cart');
  const items = useCartStore((state) => state.items);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-start flex-1 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 p-4 transition-colors pt-12">
      {items.length === 0 ? (
        <div className="text-center py-12 max-w-md mx-auto">
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
            {t('empty')}
          </p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
          >
            {t('browse')}
          </Link>
        </div>
      ) : (
        <CheckoutForm />
      )}
    </div>
  );
}
