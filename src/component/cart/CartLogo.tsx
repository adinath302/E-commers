import useCartStore from "../../store/useCartStore";

const CartLogo = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <section className="flex justify-center items-center mt-7 sm:mt-5 sm:mb-9 mb-15">
      {cart.length > 0 && (
        <h1 className="font-semibold text-black text-xl sm:text-3xl line-clamp-1">
          Shopping Cart
        </h1>
      )}
    </section>
  );
};

export default CartLogo;
