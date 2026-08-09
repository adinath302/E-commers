import { useState } from "react";
import useCartStore from "../../store/useCartStore";
import MobileSidebar from "./MobileSidebar";
import Logo from "./Logo";
import CartButton from "./CartButton";
import DesktopNav from "./DesktopNav";
import ProfileButton from "./ProfileButton";
import { AiOutlineBars } from "react-icons/ai";
import { calculatecartQuantity } from "../../utils/cart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const quantity = calculatecartQuantity(cart) + cart.length;

  return (
    <div className="py-3 sticky top-0 relative z-50 bg-gray-200 items-center justify-between px-4 gap-10 flex">
      {/* Menu Icon: Only visible on mobile screens */}
      <div className="sm:hidden cursor-pointer">
        <AiOutlineBars onClick={() => setIsOpen(true)} aria-label="Open Menu" />
      </div>

      <Logo />

      {/* Desktop Links: Hidden on mobile, visible on sm and up */}
      <DesktopNav />

      {/* Mobile Sidebar: Controlled entirely by the isOpen state */}
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div>
        <ul className="flex gap-6 items-center flex-1">
          <CartButton quantity={quantity} />
          <ProfileButton />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
