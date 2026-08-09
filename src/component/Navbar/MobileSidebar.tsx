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
      className={`fixed top-0 left-[-400px] z-50 bg-gray-100 w-64 h-screen transition-all duration-500 ${
        isOpen ? "translate-x-[400px]" : "translate-x-0"
      }`}
    >
      {/* close button on mobile view */}
      <button className="absolute top-0 right-0 p-3" onClick={onClose}>
        <RxCross2 className="cursor-pointer" />
      </button>

      <section className="flex flex-col gap-8 mt-4 w-full">
        <div className="mx-auto font-bold text-purple-500">
          E-commers
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={onClose}
           
            className="block w-full pl-4 py-3 hover:bg-gray-400 hover:text-white transition-colors"
          >
            {/* Wrapping text inside an inline-block container safely contains your custom underline rules */}
            <span className="inline-block">
              {link.label}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default MobileSidebar;
