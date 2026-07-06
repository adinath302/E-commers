import { useQuery } from "@tanstack/react-query";
import Product from "./Product";

const loading = "/loading.svg";

const Product_List = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      }),
  });

  console.log("new data", data);

  if (isFetching)
    return (
      <div className="flex justify-center items-center h-screen ">
        <img className="w-150 flex" src={loading} alt="Loading..." />;
      </div>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* fetch products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((item: any) => {
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
