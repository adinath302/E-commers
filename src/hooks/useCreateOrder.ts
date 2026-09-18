import { useMutation } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: orderService.createOrder,

    onSuccess: (order) => {
      console.log("Order successfully created:", order);
    },

    onError: (error) => {
      console.error("Order creation failed:", error);
    },
  });
};
