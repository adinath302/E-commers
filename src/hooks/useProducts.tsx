import { useQuery } from "@tanstack/react-query";

// Define the structure of a single product
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}
// Define the API response structure
interface ApiResponse {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
export const useProducts = () => {
  return useQuery<ApiResponse>({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => data.products),
  });
};
