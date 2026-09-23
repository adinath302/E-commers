import { http, HttpResponse } from "msw";
import type { CreateOrderInput, Order } from "../types/orders";
import { orders, saveOrders } from "./data/orders";
// msw handler
export const handlers = [
  http.post("/api/orders", async ({ request }) => {
    const body = (await request.json()) as CreateOrderInput;

    console.log("MSW received order", body);

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
    saveOrders();

    console.log("Mock database", orders);
    console.log("Mock database", orders);

    return HttpResponse.json(newOrder, {
      status: 201,
    });
  }),

  http.get("/api/orders", ({ request }) => {
    const url = new URL(request.url);
    const userId = Number(url.searchParams.get("userId"));

    const userOrders = orders.filter((order) => order.userId === userId);

    return HttpResponse.json(userOrders);
  }),

  // order details
  http.get("/api/orders/:orderId", ({ params }) => {
    const orderId = String(params.orderId);

    const order = orders.find((order) => order.id === orderId);

    if (!order) {
      return HttpResponse.json(
        {
          message: "Order not found",
        },
        {
          status: 404,
        },
      );
    }
    return HttpResponse.json(order);
  }),
];
