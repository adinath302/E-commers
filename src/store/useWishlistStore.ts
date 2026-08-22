import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface WishlistState {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
}
const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],

      addToWishlist: (product) =>
        set((state) => {
          const exists = state.wishlist.some((item) => item.id === product.id);

          if (exists) {
            return state;
          }

          return {
            wishlist: [...state.wishlist, product],
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),

      toggleWishlist: (product) => {
        if (!product?.id) return;
        const exists = get().wishlist.some((item) => item?.id === product.id);

        if (exists) {
          set((state) => ({
            wishlist: state.wishlist.filter((item) => item?.id !== product.id),
          }));
        } else {
          set((state) => ({
            wishlist: [...state.wishlist, product],
          }));
        }
      },

      isInWishlist: (id) =>
        get().wishlist?.some((item) => item?.id === id) ?? false,
    }),
    {
      name: "wishlist-storage",
    },
  ),
);

export default useWishlistStore;
