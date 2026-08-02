import { AiOutlineDelete } from "react-icons/ai";
import useCartStore from "../../store/useCartStore";
import {
  calculateSubTotal,
  calculateTotalCost,
  SHIPPING_COST,
} from "../utils/cart.ts";
import type { CartItem } from "../../types/cart.ts";
const Cart = () => {
  const Cart = useCartStore((state) => state.cart);
  const Increaseqty = useCartStore((state) => state.increaseQuantity);
  const Decreaseqty = useCartStore((state) => state.decreaseQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

  const subTotal = calculateSubTotal(Cart);
  const totalCost = calculateTotalCost(Cart);
  const shippingCost = SHIPPING_COST;

  function calculateShippingCost(Cart: CartItem[]): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {/* logo */}
      <section className="flex justify-center items-center mt-7 sm:mt-5 sm:mb-9 mb-15">
        {Cart.length > 0 && (
          <h1 className="font-semibold text-black text-xl sm:text-3xl line-clamp-1">
            Shopping Cart
          </h1>
        )}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:mx-30 mx-5">
        <div>
          {/* Cart ui */}
          {Cart &&
            Cart.map((item) => {
              return (
                <section
                  key={item.id}
                  className="relative flex bg-white overflow-hidden gap-3 p-4 inset-x-0 bottom-0"
                >
                  {/* image */}
                  <div className="sm:h-24 sm:w-24  h-18 w-18 bg-gray-100 overflow-hidden ">
                    <img
                      src={item.images[0]}
                      loading="lazy"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex grow justify-between gap-4">
                    <div className="flex-col flex justify-between items-start">
                      {/* title & quantity */}
                      <h1 className="overflow-hidden font-normal text-sm sm:text-[16px] text-black line-clamp-1">
                        {item.title}
                      </h1>
                      <div className="text-gray-700 text-sm flex gap-4 border rounded-2xl sm:px-2 sm:py-1 px-2 py-1">
                        <span
                          className="cursor-pointer select-none"
                          onClick={() => Decreaseqty(item.id)}
                        >
                          -
                        </span>
                        {item.quantity}
                        <span
                          className="cursor-pointer select-none"
                          onClick={() => Increaseqty(item.id)}
                        >
                          +
                        </span>
                      </div>
                    </div>

                    {/* price & remove button */}
                    <div className="flex-col flex justify-between items-top border-t border-gray-50">
                      <div className="font-semibold items-end sm:text-[18px] text-black">
                        {/* price */}${item.price}
                      </div>
                      <div className="flex items-end justify-end">
                        {/*  remove button */}
                        <AiOutlineDelete
                          onClick={() => removeProduct(item.id)}
                          className="cursor-pointer select-none text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] [background:linear-gradient(to_right,transparent,theme(colors.gray.300)_20%,theme(colors.gray.300)_80%,transparent)]"></div>
                </section>
              );
            })}
        </div>

        {/* Total/Summary */}
        {Cart && Cart.length > 0 && (
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
            <button className="mt-6 w-full text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-xl text-sm sm:text-base px-5 py-3 transition-colors duration-200 text-center">
              Proceed to Checkout
            </button>
          </section>
        )}
      </div>
      {Cart && Cart.length === 0 && (
        <section className="flex justify-center w-full items-center mt-7 sm:mt-5 sm:mb-9 mb-15">
          <h1 className="font-normal text-gray-500 text-xl sm:text-5xl line-clamp-1">
            Cart is Empty
          </h1>
        </section>
      )}
    </>
  );
};

export default Cart;

("Cart ui ");
// https://dribbble.com/shots/27420398-Maximize-Digital-Marketplace-Shopping-Cart-Page/
