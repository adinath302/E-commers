import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export const useProduct = (productId: number | undefined) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => productService.getProduct(productId!),
    enabled: productId! == undefined,
  });
};
