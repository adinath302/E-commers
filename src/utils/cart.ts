import type { CartItem } from "../types/cart";

// Ensure 'export' is present for every variable and function
export const calculateSubTotal = (cart: any) => {
  let total = 0;
  cart.forEach((item: any) => (total += item.price * item.quantity));
  return Math.round(total * 100) / 100;
};

// Calculate the total quantity of all items in the cart
export const calculateTotalQuantity = (cart: any) => {
  return cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
};

export const SHIPPING_COST = 2.35;

export const calculateTotalCost = (cart: any) => {
  return calculateSubTotal(cart) + SHIPPING_COST;
};

export const calculateTotalQuantiy = (cartq: CartItem[]) => {
  let total = 0;
  cartq.forEach((item) => (total += item.quantity));
  return total;
};