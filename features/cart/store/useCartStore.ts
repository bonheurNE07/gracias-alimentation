import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MenuItem } from '@/types/menu';

export interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPriceUSD: () => number;
  getTotalPriceCDF: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item, quantity) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
              ),
            };
          }
          return { items: [...state.items, { ...item, quantity }] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      getTotalPriceUSD: () => {
        return get().items.reduce((acc, item) => acc + item.price_usd * item.quantity, 0);
      },
      getTotalPriceCDF: () => {
        return get().items.reduce((acc, item) => acc + item.price_cdf * item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
