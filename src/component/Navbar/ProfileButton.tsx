import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <div>
      {" "}
      <Link to={"/profile"} className="cursor-pointer">
        <CgProfile />
      </Link>
    </div>
  );
};

export default ProfileButton;
