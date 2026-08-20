import { AiOutlineDelete } from "react-icons/ai";
import useCartStore from "../../store/useCartStore";
import { memo } from "react";
import { Link } from "react-router-dom";

const CartItem = memo(() => {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);
  // console.log("cartitem", cart);

  return (
    <>
      {/* cart items */}
      {cart.map((item) => {
        return (
          <section
            key={item.id}
            className="relative flex bg-white overflow-hidden gap-3 p-4 inset-x-0 bottom-0"
          >
            {/* image */}
            <Link
              to={`/cart/${item.id}`}
              className="sm:h-24 sm:w-24 cursor-pointer h-18 w-18 bg-gray-100 overflow-hidden "
            >
              <img
                src={item.images[0]}
                loading="lazy"
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>

            <div className="flex grow justify-between gap-4">
              <div className="flex-col flex justify-between items-start">
                {/* title & quantity */}
                <Link
                  to={`/cart/${item.id}`}
                  className="overflow-hidden font-normal text-sm sm:text-[16px] text-black line-clamp-1"
                >
                  {item.title}
                </Link>
                <div className="text-gray-700 text-sm flex gap-4 border rounded-2xl sm:px-2 sm:py-1 px-2 py-1">
                  <button
                    className="cursor-pointer select-none"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="cursor-pointer select-none"
                    onClick={() => increaseQuantity(item.id)}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* price & remove button */}
              <div className="flex-col flex justify-between items-top border-t border-gray-50">
                <div className="font-semibold items-end sm:text-[18px] text-black">
                  {/* price */}${item.price}
                </div>
                <button
                  className="flex items-end justify-en cursor-pointer select-none text-gray-500"
                  onClick={() => removeProduct(item.id)}
                >
                  {/*  remove button */}
                  <AiOutlineDelete className="" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] [background:linear-gradient(to_right,transparent,theme(colors.gray.300)_20%,theme(colors.gray.300)_80%,transparent)]"></div>
          </section>
        );
      })}
      {cart && cart.length === 0 && (
        <section className="flex justify-center w-full items-center mt-7 sm:mt-5 sm:mb-9 mb-15">
          <h1 className="font-normal text-gray-500 text-xl sm:text-5xl line-clamp-1">
            Cart is Empty
          </h1>
        </section>
      )}
    </>
  );
});

CartItem.displayName = "CartItem";

export default CartItem;
