import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import MobileSidebar from "./MobileSidebar";
import Logo from "./Logo";
import CartButton from "./CartButton";
import DesktopNav from "./DesktopNav";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = useCartStore((state) => state.cart.length);

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
