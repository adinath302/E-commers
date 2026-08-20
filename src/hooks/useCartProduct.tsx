import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/productService";

export const useCartProduct = (cartId: number | undefined) => {
  return useQuery({
    queryKey: ["cartProduct", cartId],
    queryFn: () => productService.getCartProduct(cartId!),
    enabled: cartId !== undefined,
  });
};
