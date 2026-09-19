import { http, HttpResponse } from "msw";
import type { CreateOrderInput, Order } from "../types/orders";
import { orders } from "./data/orders";
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

    console.log("Mock database", orders);
    console.log("Mock database", orders);

    return HttpResponse.json(newOrder, {
      status: 201,
    });
  }),

  http.get("/api/orders",({request})=>{
    const url = new URL(request.url)
    const userId = Number(url.searchParams.get("userId"))

    const userOrders = orders.filter(
      (order)=>order.userId===userId
    );
    
    return HttpResponse.json(userOrders)
  })

];
