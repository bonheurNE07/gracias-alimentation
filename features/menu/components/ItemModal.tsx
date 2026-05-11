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
  const mt = useTranslations('Menu.items');

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

        {/* Image - Reduced height to allow more space for description */}
        <div className="relative w-full h-40 sm:h-44 bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.25 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-full h-full cursor-zoom-in"
          >
            <Image
              src={item.image}
              alt={mt.has(`${item.id}.name`) ? mt(`${item.id}.name`) : item.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white"
          >
            ✕
          </button>
        </div>

        {/* Content - Scrollable with proper spacing */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {mt.has(`${item.id}.name`) ? mt(`${item.id}.name`) : item.name}
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {mt.has(`${item.id}.description`) ? mt(`${item.id}.description`) : item.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {item.price_cdf.toLocaleString()} FC
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                ${item.price_usd.toFixed(2)}
              </p>

            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center justify-between border-t border-b border-zinc-100 dark:border-zinc-800 py-3">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t('quantity')}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecrement}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="text-base font-bold w-5 text-center text-zinc-900 dark:text-zinc-50">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-bold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Footer / Add button - Sticky */}
        <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800 flex-shrink-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold shadow-md transition-colors duration-200"
          >
            {t('addToCart')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
