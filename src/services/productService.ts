import type { Product } from "../types/product";

export const productService = {
  // Product-list Product Details
  getProduct: async (productId: number): Promise<Product> => {
    const id = Number(productId); // change the type of productId to number
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  },

  // cart product Details
  getCartProduct: async (cartId: number): Promise<Product> => {
    const id = Number(cartId);
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  },

  // Product-list
  getProducts: async (): Promise<{
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }> => {
    const response = await fetch(
      "https://dummyjson.com/products?limit=0&skip=0",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  },
};
