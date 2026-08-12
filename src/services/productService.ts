import type { Product } from "../types/product";

export const productService = {
  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return response.json();
  },

  getProducts: async (): Promise<{
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }> => {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  },
};