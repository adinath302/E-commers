import { AiOutlineDelete } from "react-icons/ai";
import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const Cart = useCartStore((state) => state.cart);
  const Increaseqty = useCartStore((state) => state.increaseQuantity);
  const Decreaseqty = useCartStore((state) => state.decreaseQuantity);
  const RemoveProduct = useCartStore((state) => state.RemoveProduct);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-30 mx-5">
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
                  <div className="sm:h-24 sm:w-24 h-18 w-18 bg-gray-100 overflow-hidden ">
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
                          onClick={() => RemoveProduct(item.id)}
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
          <section className="sticky top-0">
            {/* logo  */}
            <h1 className="font-semibold text-black flex items-center justify-center  text-md sm:text-xl line-clamp-1">
              Summary
            </h1>

            {/* total */}
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
