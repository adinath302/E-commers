import { Link } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import {
  calculateSubTotal,
  calculateTotalCost,
  SHIPPING_COST,
} from "../../utils/cart";
const CartSummary = () => {
  const cart = useCartStore((state) => state.cart);
  const subTotal = calculateSubTotal(cart);
  const totalCost = calculateTotalCost(cart);
  const shippingCost = SHIPPING_COST;

  return (
    <>
      {cart && cart.length > 0 && (
        <section className="sticky top-24 self-start mx-auto mt-6 lg:mt-9 w-full max-w-full lg:max-w-md bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
          {/* Component Title */}
          <h2 className="font-bold text-gray-900 flex items-center text-lg sm:text-xl tracking-tight">
            Summary
          </h2>

          {/* Fee Lines Container */}
          <div className="text-sm sm:text-base font-normal flex flex-col gap-3 mt-6 sm:mt-8 text-gray-600">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                $ {subTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="font-semibold text-gray-900">
                $ {shippingCost.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="my-5 border-gray-200" />

          {/* Total Cost Section */}
          <div className="text-base sm:text-lg font-bold flex justify-between items-center text-gray-900">
            <span>Total</span>
            <span>$ {totalCost.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <Link to={'/checkout'}>
            <button
              className="mt-6 w-full text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-xl text-sm sm:text-base px-5 py-3 transition-colors duration-200 text-center"
            >
              Proceed to Checkout
            </button>
          </Link>
        </section>
      )}
    </>
  );
};

export default CartSummary;
