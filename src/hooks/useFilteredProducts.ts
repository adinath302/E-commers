import { useMemo } from "react";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  stock: number;
  thumbnail: string;
  images: string[];
}
export interface Filters {
  search: string;
}

const useFilteredProducts = (
  products: Product[],
  filters: Filters,
): Product[] => { 
  return useMemo(() => {
    let result = [...products];

    if (filters.search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }
    return result;
  }, [products, filters.search]);
};

export default useFilteredProducts;
