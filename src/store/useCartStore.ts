import { create } from "zustand";
import type { Product } from "../types/product";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],

  // Add to cart
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      // console.log("globle-store",product);
      console.log(state);
      if (existingItem) {
        // if the item is already in the cart, increase the quantity
        return {
          cart: state.cart.map(
            (
              item, // item means each product in the cart
            ) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 } // here we increase the quantity
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
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }),

  // increase quantity
  decreaseQuantity: (id: number) =>
    set((state) => {
      return {
        cart: state.cart.map((item) => {
          if (item.id === id) {
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
  RemoveProduct: (id: number) =>
    set((state) => {
      return {
        cart: state.cart.filter((item) => item.id !== id),
      };
      return state;
    }),
}));

export default useCartStore;
