import { z } from 'zod';

export const getCheckoutSchema = (t: (key: string) => string) => z.object({
  customerName: z.string().min(2, t('errors.name')),
  deliveryType: z.enum(['pickup', 'delivery']),
  phone: z.string().optional(),
  address: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.deliveryType === 'delivery') {
    if (!data.phone || data.phone.trim().length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('errors.phone'),
        path: ['phone'],
      });
    }
    if (!data.address || data.address.trim().length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('errors.address'),
        path: ['address'],
      });
    }
  }
});

export type CheckoutFormData = {
  customerName: string;
  deliveryType: 'pickup' | 'delivery';
  phone?: string;
  address?: string;
};
