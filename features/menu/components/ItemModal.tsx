'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { useCartStore } from '@/features/cart/store/useCartStore';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ItemModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {

  const cartItems = useCartStore((state) => state.items);
  const existingItem = cartItems.find((i) => i.id === item.id);
  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 1);
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const t = useTranslations('Menu');

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (existingItem) {
      updateQuantity(item.id, quantity);
    } else {
      addItem(item, quantity);
    }
    onClose();
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="w-full sm:max-w-md bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col relative"
      >

        {/* Close button for desktop */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-64 sm:h-56 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            priority
          />
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {item.name}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {item.price_cdf.toLocaleString()} FC
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                ${item.price_usd.toFixed(2)}
              </p>

            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center justify-between border-t border-b border-zinc-100 dark:border-zinc-800 py-4">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t('quantity')}
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDecrement}
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-lg font-bold w-6 text-center text-zinc-900 dark:text-zinc-50">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Footer / Add button */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={handleAddToCart}
            className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold shadow-md transition-colors duration-200"
          >
            {t('addToCart')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

