import type { CreateOrderInput, Order } from "../types/orders";

export const orderService = {
  createOrder: async (order: CreateOrderInput): Promise<Order> => {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }

    return response.json();
  },

  getOrder: async (userId: number): Promise<Order[]> => {
    const response = await fetch(`/api/orders?userId=${userId}`);

    if (!response.ok) {
      throw new Error("failed to fetch the order");
    }

    return response.json();
  },
};
