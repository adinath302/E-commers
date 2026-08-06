import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "./NavLinks";
import { RxCross2 } from "react-icons/rx";
interface Mobailview {
  isOpen: boolean;
  onClose: () => void;
}
const MobileSidebar = ({ isOpen, onClose }: Mobailview) => {
  return (
    <div
      // Fixed the transform logic so it pops out correctly based on isOpen state
      className={`fixed top-0 left-[-400px] z-50 bg-gray-100 w-64 h-screen transition-all duration-500 ${
        isOpen ? "translate-x-[400px]" : "translate-x-0"
      }`}
    >
      {/* close button on mobail view */}
      <div className="absolute top-0 right-0 p-3">
        <RxCross2 onClick={onClose} className="cursor-pointer" />
      </div>

      <ul className="flex flex-col gap-8 mt-4 w-64">
        <div className="flex-none mx-auto font-bold text-purple-500">
          E-commers
        </div>
        {NAV_LINKS.map((link) => (
          <li
            key={link.label}
            className="animated-underline block w-full cursor-pointer pl-4 hover:bg-gray-400 select-none"
          >
            <Link
              to={link.href}
              onClick={onClose}
              className="w-full py-1 block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSidebar;
