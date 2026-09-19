import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";

export const useOrders = (userId: number | undefined) => {
  return useQuery({
    queryKey: ["orders", userId],

    queryFn: () => orderService.getOrder(userId!),

    enabled: Boolean(userId),
  });
};
