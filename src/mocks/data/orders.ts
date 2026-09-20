import type { Order } from "../../types/orders";

const STORAGE_KEY = "mock-orders";

const loadOrders = (): Order[] => {
  const storedOrders = localStorage.getItem(STORAGE_KEY);

  if (!storedOrders) {
    return [];
  }

  try {
    return JSON.parse(storedOrders) as Order[];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
};

export const orders: Order[] = loadOrders();

export const saveOrders = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};

console.log("Mock database loaded:", orders);