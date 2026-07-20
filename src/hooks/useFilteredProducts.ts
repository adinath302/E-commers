import { useMemo } from "react";
import type { Product } from "../types/product";
import type { Filters } from "../types/Filters";
const useFilteredProducts = (
  products: Product[], // api data
  filters: Filters, // the state for Search
): Product[] => {
  return useMemo(() => {
    let result = [...products];
    
    if (filters.search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(filters.search.toLowerCase()),
      );
    }

    if (filters.category) {
      result = result.filter(
        (product) =>
          product.category.toLocaleLowerCase() ===
          filters.category.toLocaleLowerCase(),
      );
    }

    return result;
  }, [products, filters.search, filters.category]);
};

export default useFilteredProducts;
