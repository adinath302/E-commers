import { useMutation } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: orderService.createOrder,
  });
};
