import CartSummary from "./CartSummary.tsx";
import CartItem from "./CartItem.tsx";
import CartLogo from "./CartLogo.tsx";

const Cart = () => {
  return (
    <>
      {/* logo */}
      <CartLogo />

      <div className="grid grid-cols-1 md:grid-cols-2 sm:mx-30 mx-5">
        {/* Cart ui */}
        <div>
          <CartItem />
        </div>

        {/* Total/Summary */}
        <CartSummary />
      </div>
    </>
  );
};

export default Cart;
