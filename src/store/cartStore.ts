import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItems = get().items;
        const existingItem = existingItems.find(
          (i) => i.productId === item.productId && i.variantId === item.variantId
        );

        if (existingItem) {
          const updatedItems = existingItems.map((i) =>
            i.id === existingItem.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
          set({ items: updatedItems });
        } else {
          const newItem: CartItem = {
            ...item,
            id: `${item.productId}-${item.variantId || 'default'}`,
          };
          set({ items: [...existingItems, newItem] });
        }
      },
      removeItem: (id) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        set({ items: updatedItems });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.variant?.specificPrice || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
