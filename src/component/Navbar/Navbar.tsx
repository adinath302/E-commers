import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/Products" },
  { label: "Login", href: "/Login" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-3 relative bg-gray-200 items-center justify-between px-4 gap-10 flex">
      {/* Menu Icon: Only visible on mobile screens */}
      <div className="sm:hidden cursor-pointer">
        <AiOutlineBars onClick={() => setIsOpen(true)} aria-label="Open Menu" />
      </div>

      <div className="flex-none ml-20 sm:ml-0 font-bold text-purple-500">
        E-commers
      </div>

      {/* Desktop Links: Hidden on mobile, visible on sm and up */}
      <div className="hidden sm:block">
        <ul className="flex gap-6 items-center flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="animated-underline cursor-pointer">
              <Link to={link.href} className="block w-full py-1">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar: Controlled entirely by the isOpen state */}
      <MobailSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div>
        <ul className="flex gap-6 items-center flex-1">
          <li className="cursor-pointer">
            <IoCartOutline className="text-[19px]" />
          </li>
          <li className="cursor-pointer">
            <CgProfile />
          </li>
        </ul>
      </div>
    </div>
  );
};

interface Mobailview {
  isOpen: boolean;
  onClose: () => void;
}

const MobailSidebar = ({ isOpen, onClose }: Mobailview) => {
  return (
    <div
      // Fixed the transform logic so it pops out correctly based on isOpen state
      className={`fixed top-0 left-[-400px] z-50 bg-gray-100 w-64 h-screen transition-all duration-500 ${
        isOpen ? "translate-x-[400px]" : "translate-x-0"
      }`}
    >
      <div className="absolute top-0 right-0 p-3">
        <RxCross2 onClick={onClose} className="cursor-pointer" />
      </div>

      <ul className="flex flex-col gap-8 mt-4">
        <div className="flex-none mx-auto font-bold text-purple-500">
          E-commers
        </div>
        {NAV_LINKS.map((link) => (
          <li key={link.label} className="animated-underline cursor-pointer ml-4">
            <Link to={link.href} onClick={onClose} className="block w-full py-1">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
