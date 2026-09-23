import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/orderService";



export const useOrder = (orderId: string | undefined) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: () => orderService.getOrderById(orderId!),
    enabled: Boolean(orderId),
  });
};
