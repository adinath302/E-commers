import { http, HttpResponse } from "msw";
import type { CreateOrderInput, Order } from "../types/orders";
import { orders } from "./data/orders";

export const handlers = [
  http.post("/api/orders", async ({ request }) => {
    const body = (await request.json()) as CreateOrderInput;

    const newOrder: Order = {
      id: crypto.randomUUID(),
      userId: body.userId,
      items: body.items,
      shippingAddress: body.shippingAddress,
      subtotal: body.subtotal,
      shippingCost: body.shippingCost,
      total: body.total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);

    return HttpResponse.json(newOrder, {
      status: 201,
    });
  }),
];