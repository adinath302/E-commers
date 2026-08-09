import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <>
      {" "}
      <div className="cursor-pointer relative flex text-[11px]">
        <Link to="/cart" className="">
          <IoCartOutline className="text-[19px]" />
        </Link>
      </div>
    </>
  );
};

export default CartButton;