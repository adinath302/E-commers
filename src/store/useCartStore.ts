import { create } from "zustand";
import type { Product } from "../types/product";

export interface CartItem extends Product {
  quantity: number;
}
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
        // console.log("globle-store",product);

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
}));

export default useCartStore;
