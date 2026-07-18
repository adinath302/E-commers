import { useQuery } from "@tanstack/react-query";
import type { ProductsResponse } from "../types/product";

// Define the API response structure

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
};
