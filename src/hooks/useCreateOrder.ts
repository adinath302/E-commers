import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: orderService.createOrder,

    onSuccess: (order) => {
      console.log("Order successfully created:", order);

      // tells React Query that your cached data is old and needs a fresh fetch from the server.
      queryClient.invalidateQueries({
        queryKey: ["orders", order.userId],
      });
    },

    onError: (error) => {
      console.error("Order creation failed:", error);
    },
  });
};
