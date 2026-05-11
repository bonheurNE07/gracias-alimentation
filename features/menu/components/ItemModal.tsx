'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { useCartStore } from '@/features/cart/store/useCartStore';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Haptics } from '@/utils/haptics';

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

  const handleIncrement = () => {
    Haptics.light();
    setQuantity((prev) => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      Haptics.light();
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    Haptics.medium();
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
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
    >
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-md bg-white dark:bg-zinc-900 rounded-t-[2.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl max-h-[95vh] flex flex-col relative cursor-default"
      >
        {/* Mobile Drag Handle */}
        <div className="flex sm:hidden justify-center pt-3 pb-1 absolute top-0 w-full z-20">
          <div className="w-12 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 opacity-50" />
        </div>

        {/* Close button for desktop */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-all duration-200"
        >
          ✕
        </button>

        {/* Image Section - Blurred Background + Full Image Foreground */}
        <div className="relative w-full h-72 sm:h-96 bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0 group">
          {/* Blurred Background Layer */}
          <div className="absolute inset-0 scale-110 blur-2xl opacity-40 dark:opacity-30">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-full h-full cursor-zoom-in flex items-center justify-center p-4"
          >
            <Image
              src={item.image}
              alt={mt.has(`${item.id}.name`) ? mt(`${item.id}.name`) : item.name}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 flex sm:hidden items-center justify-center w-9 h-9 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20"
          >
            ✕
          </button>
        </div>

        {/* Content - Scrollable with refined typography */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto custom-scrollbar">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
              {mt.has(`${item.id}.name`) ? mt(`${item.id}.name`) : item.name}
            </h2>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {item.price_cdf.toLocaleString()} FC
              </span>
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
                / ${item.price_usd.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p className="text-base leading-relaxed">
              {mt.has(`${item.id}.description`) ? mt(`${item.id}.description`) : item.description}
            </p>
          </div>

          {/* Quantity Selector - More modern design */}
          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {t('quantity')}
              </span>
              <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full">
                <button
                  onClick={handleDecrement}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:bg-white dark:hover:bg-zinc-700 shadow-sm transition-all disabled:opacity-30"
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="text-lg font-black w-10 text-center text-zinc-900 dark:text-zinc-50">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:bg-white dark:hover:bg-zinc-700 shadow-sm transition-all"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Premium sticky bar */}
        <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex-shrink-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-lg shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {t('addToCart')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
