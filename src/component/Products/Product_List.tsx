import Product from "./Product";
import Search from "./Search";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import useFilteredProducts from "../../hooks/useFilteredProducts";
import type { Filters } from "../../types/Filters";
const loading = "/loading.svg";

const Product_List = () => {
  const { data, isFetching, error } = useProducts();
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "",
    minPrice: 0,
    maxPrice: 10000,
    sortBy: "",
    page: 1,
    limit: 12,
  }); // the initial state is object

  const filteredProducts = useFilteredProducts(
    // function implementation
    data?.products ?? [],
    filters,
  );

  // loading
  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img className="w-150 flex" src={loading} alt="Loading..." />
      </div>
    );
  }

  // error handling
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* features */}
      <div className="p-2 flex justify-end">
        <Search
          value={filters.search}
          onSearchChange={(value: any) =>
            setFilters((prev) => ({
              ...prev,
              search: value,
            }))
          }
        />
      </div>
      {/* fetch products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts?.map((item: any) => {
          return (
            <div key={item.id} className="">
              <Product
                description={item.description}
                title={item.title}
                price={item.price}
                image={item.images[0]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product_List;
