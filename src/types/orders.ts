export interface OrderItem {
  productId: number;
  title: string;
  price: number;
  quantity: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: number;
  items: OrderItem[];
  shippingAddress: ShippingAddress;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}