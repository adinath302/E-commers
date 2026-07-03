import { useQuery } from "@tanstack/react-query";
import React from "react";

const Product_List = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products").then((res) => res.json()),
  });

  console.log(data);

  if (isPending) return "loading....";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {/* fetch products */}
      <div>
        {/* {data.map((item: any) => {
          return <div></div>;
        })} */}
      </div>
    </div>
  );
};

export default Product_List;
