import useCartStore from "../../store/useCartStore";

const Cart = useCartStore((state) => state.cart);

export const subTotal = (Cart: any) => {
  let total = 0;
  Cart.forEach((item: any) => (total += item.price * item.quantity));
  return Math.round(total * 100) / 100; // round to 2 decimal places and return total;
};
export const shippingCost = 2.35;

export const totalCost = subTotal(Cart) + shippingCost;

console.log(subTotal(Cart), shippingCost, totalCost);
