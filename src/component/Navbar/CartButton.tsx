import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface CartButtonProps {
  quantity: number;
}

const CartButton: React.FC<CartButtonProps> = ({ quantity }) => {
  return (
    <>
      {" "}
      <li className="cursor-pointer relative flex  text-[11px]">
        <Link to="/cart" className="relative flex items-center">
          <span className="absolute right-[-8px] top-[-8px] w-[18px] h-[18px]  bg-red-600 rounded-full flex justify-center items-center text-white text-[11px]]">
            {quantity}
          </span>
          <IoCartOutline className="text-[19px]" />
        </Link>
      </li>
    </>
  );
};

export default CartButton;