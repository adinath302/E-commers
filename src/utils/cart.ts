// Ensure 'export' is present for every variable and function
export const calculateSubTotal = (cart: any) => {
  let total = 0;
  cart.forEach((item:any) => (total += item.price * item.quantity));
  return Math.round(total * 100) / 100;
};

export const SHIPPING_COST = 2.35;

export const calculateTotalCost = (cart: any) => {
  return calculateSubTotal(cart) + SHIPPING_COST;
};
