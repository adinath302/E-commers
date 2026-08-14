import { useQuery } from "@tanstack/react-query";
import type { ProductsResponse } from "../types/product";
import { productService } from "../services/productService";

// Define the API response structure

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: productService.getProducts,
  });
};
