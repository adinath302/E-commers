import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. ADDED: Required import for persist
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";
// 2. REMOVED: useLocalStorage import as it is no longer needed

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
}
const useCartStore = create<CartState>()(
  persist( // with persist the cart will be saved in the local storage
    (set) => ({
      cart: [],
      // Add to cart
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            // if the item is already in the cart, increase the quantity
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      // increase quantity
      increaseQuantity: (id: number) =>
        set((state) => {
          return {
            cart: state.cart.map((item) => {
              if (item.id === id && item.quantity < 100) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                };
              }
              return item;
            }),
          };
        }),

      // decrease quantity
      decreaseQuantity: (id: number) =>
        set((state) => {
          return {
            cart: state.cart.map((item) => {
              if (item.id === id && item.quantity > 1) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }
              return item;
            }),
          };
        }),

      // remove product
      removeProduct: (id: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

        // total cart quantitgy

    }), // 4. FIXED: Properly closed the store configuration function
    {
      name: "cart-storage", // This configuration object is now correctly passed as the second argument to persist
    },
  ),
);

export default useCartStore;
