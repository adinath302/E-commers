import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. ADDED: Required import for persist
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

// 2. REMOVED: useLocalStorage import as it is no longer needed

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProduct: (id: number) => void;
}
const useCartStore = create<CartState>()(
  persist(
    // with persist the cart will be saved in the local storage
    (set, get) => ({
      cart: [],
      // Add to cart
      addToCart: (product, quantity = 1) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);
        const currentQuantity = existingItem?.quantity ?? 0;
        const newQuantity = currentQuantity + quantity;

        // stock validation check
        if (newQuantity > product.stock) {
          alert(`Not enough stock. Only ${product.stock} items available.`);
          return false;
        }

        // update cart state
        set((state) => {
          if (existingItem) {
            // if the item is already in the cart, increase the quantity
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: newQuantity }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity }],
          };
        });
        return true;
      },

      // increase quantity
      increaseQuantity: (id: number) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity < item.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),

      // decrease quantity
      decreaseQuantity: (id: number) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        })),

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