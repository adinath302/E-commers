import React from "react";
import { NAV_LINKS } from "./NavLinks";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
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
  );
};

export default DesktopNav;
