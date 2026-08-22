import useCartStore from "../../store/useCartStore";
import useWishlistStore from "../../store/useWishlistStore";
import { MdDelete } from "react-icons/md";
import type { Product } from "../../types/product";

const Wishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  console.log("wishlist data",wishlist)
  // const validWishlist = Wishlist?.filter((item) => item && item.id) ?? [];

  const HandleAddtoCart = (item: Product) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };
  
  const addToCart = useWishlistStore((state) => state.addToWishlist);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  return (
    <>
      <section className="hidden sm:block mx-20">
        {/* header */}
        <h1 className="flex items-start font-semibold  justify-center mt-3">
          Wishlist
        </h1>
        {/* Product */}
        {wishlist.map((item) => (
          <div
            className="grid grid-cols-2 sm:grid-cols-4 items-center border-b border-gray-200"
            key={item.id}
          >
            <div className="flex sm:items-center gap-5">
              {/* remove button */}
              <MdDelete
                onClick={() => removeFromWishlist(item.id)}
                className="text-xl text-gray-500 cursor-pointer"
              />

              {/* product Image */}
              {item?.images?.length > 0 && (
                <div className="flex items-center justify-center">
                  <img
                    src={item?.images[0]}
                    alt="image"
                    className="h-25 w-25"
                  />
                </div>
              )}
            </div>

            {/* price */}
            <div>
              <p>${item?.price}</p>
            </div>

            {/* Product Title */}
            <div>
              <p className="font-semibold text-md text-gray-500">
                {item?.title}
              </p>
            </div>

            {/*Add to cart  */}
            <div className="flex justify-center">
              <button
                onClick={() => HandleAddtoCart(item)}
                className="px-2 py-1 rounded-xl bg-purple-200 hover:bg-purple-400 cursor-pointer select-none"
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
      {/* mobail view */}

      <section className="sm:hidden">
        <h1 className="sm:hidden flex items-center text-xl justify-center my-3 font-semibold">
          Wishlist
        </h1>
        <div className="grid-cols-2 grid gap-3 p-3">
          {/* Product */}
          {wishlist?.map((item) => (
            <div
              className="flex flex-col justify-between border border-gray-200 rounded-sm bg-white shadow-sm shadow-purple-300 items-center p-3 "
              key={item.id}
            >
              <div className="flex items-center justify-center relative">
                {/* product Image */}
                {item?.images?.length > 0 && (
                  <div className="flex items-center justify-center">
                    <img
                      src={item?.images[0]}
                      alt="image"
                      className="h-35 w-35"
                    />
                  </div>
                )}

                {/* remove button */}
                <MdDelete
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-xl absolute top-2 right-2 text-gray-500 cursor-pointer"
                />
              </div>

              {/* Product Title */}
              <div>
                <p className="font-semibold text-md text-gray-500">
                  {item?.title}
                </p>
              </div>

              {/* price */}
              <div>
                <p>${item?.price}</p>
              </div>

              {/*Add to cart  */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="px-2 py-1 rounded-sm bg-purple-200 hover:bg-purple-400 cursor-pointer select-none"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Wishlist;

// 340
