'use client';

import { useCartStore } from '../store/useCartStore';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotalPriceUSD, getTotalPriceCDF, getTotalItems } = useCartStore();
  const t = useTranslations('Cart');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white dark:bg-zinc-900 h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <span>{t('title')}</span>
            <span className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              {getTotalItems()}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                {t('empty')}
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
              >
                {t('browse')}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-zinc-50 dark:bg-zinc-800/30 p-3 rounded-xl border border-zinc-100/50 dark:border-zinc-800/50 items-center"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 truncate">
                    {item.name}
                  </h3>
                  <div className="mt-1">
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      ${(item.price_usd * item.quantity).toFixed(2)}
                    </span>
                    <span className="text-xs text-zinc-400 ml-2">
                      {((item.price_cdf * item.quantity)).toLocaleString()} CDF
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-full bg-white dark:bg-zinc-900 p-0.5">
                      <button
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.id, item.quantity - 1);
                          } else {
                            removeItem(item.id);
                          }
                        }}
                        className="w-7 h-7 flex items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        {item.quantity === 1 ? '🗑️' : '-'}
                      </button>
                      <span className="text-xs font-bold w-6 text-center text-zinc-900 dark:text-zinc-50">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
                    >
                      {t('remove')}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Total
              </span>
              <div className="text-right">
                <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                  ${getTotalPriceUSD().toFixed(2)}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                  {getTotalPriceCDF().toLocaleString()} CDF
                </p>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-center font-semibold shadow-md transition-colors duration-200"
            >
              {t('checkout')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
