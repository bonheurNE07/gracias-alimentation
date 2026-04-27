'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useCartStore } from '@/features/cart/store/useCartStore';
import { getCheckoutSchema, CheckoutFormData } from '../validation/checkoutSchema';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { useState } from 'react';

export default function CheckoutForm() {
  const t = useTranslations('Checkout');
  const { items, getTotalPriceUSD, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(getCheckoutSchema(t)),
    defaultValues: {
      deliveryType: 'pickup',
    },
  });

  const deliveryType = watch('deliveryType');

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    const whatsappLink = generateWhatsAppLink({
      customerName: data.customerName,
      deliveryType: data.deliveryType,
      phone: data.phone,
      address: data.address,
      items,
      totalUSD: getTotalPriceUSD(),
    });

    window.open(whatsappLink, '_blank');
    clearCart();
    setIsSubmitting(false);
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/50 shadow-md space-y-6">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-800 pb-4">
        {t('title')}
      </h2>

      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          {t('name')}
        </label>
        <input
          id="customerName"
          type="text"
          {...register('customerName')}
          className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
            errors.customerName ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-700/50'
          }`}
          placeholder={t('name')}
        />
        {errors.customerName && (
          <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.customerName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
          {t('delivery')}
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className={`flex items-center justify-center p-3.5 rounded-xl border-2 cursor-pointer font-semibold text-sm transition-all ${
            deliveryType === 'pickup'
              ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/30 text-zinc-600 dark:text-zinc-400'
          }`}>
            <input
              type="radio"
              value="pickup"
              {...register('deliveryType')}
              className="sr-only"
            />
            {t('pickup')}
          </label>

          <label className={`flex items-center justify-center p-3.5 rounded-xl border-2 cursor-pointer font-semibold text-sm transition-all ${
            deliveryType === 'delivery'
              ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400'
              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/30 text-zinc-600 dark:text-zinc-400'
          }`}>
            <input
              type="radio"
              value="delivery"
              {...register('deliveryType')}
              className="sr-only"
            />
            {t('homeDelivery')}
          </label>
        </div>
      </div>

      {deliveryType === 'delivery' && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              {t('phone')}
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-700/50'
              }`}
              placeholder="+243..."
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              {t('address')}
            </label>
            <textarea
              id="address"
              rows={3}
              {...register('address')}
              className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                errors.address ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-700/50'
              }`}
              placeholder={t('address')}
            />
            {errors.address && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.address.message}</p>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold shadow-md transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        {t('submit')}
      </button>
    </form>
  );
}
