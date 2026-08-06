import CartSummary from "./CartSummary.tsx";
import CartItem from "./CartItem.tsx";

const Cart = () => {

  return (
    <>
      {/* logo */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:mx-30 mx-5">
        {/* Cart ui */}
        <CartItem />

        {/* Total/Summary */}
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
