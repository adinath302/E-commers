import { useState } from "react";
import useCartStore from "../../store/useCartStore";
import MobileSidebar from "./MobileSidebar";
import Logo from "./Logo";
import CartButton from "./CartButton";
import DesktopNav from "./DesktopNav";
import ProfileButton from "./ProfileButton";
import { AiOutlineBars } from "react-icons/ai";
import { calculateTotalQuantiy } from "../../utils/cart";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const quantity = calculateTotalQuantiy(cart) + cart.length;

  return (
    <div className="py-3 sticky top-0 relative z-50 bg-gray-200 items-center justify-between px-4 gap-10 flex">
      {/* Menu Icon: Only visible on mobile screens */}
      <button
        className="sm:hidden cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      >
        <AiOutlineBars aria-label="Open navigation menu" />
      </button>

      <Logo />

      {/* Desktop Links: Hidden on mobile, visible on sm and up */}
      <DesktopNav />

      {/* Mobile Sidebar: Controlled entirely by the isOpen state */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div>
        <div className="flex gap-6 items-center flex-1">
          <div className="relative flex items-center">
            <CartButton />
            <span className="absolute right-[-8px] top-[-8px] w-[15px] h-[15px]  bg-red-600 rounded-full flex justify-center items-center text-white text-[10px]">
              {quantity}
            </span>
          </div>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
