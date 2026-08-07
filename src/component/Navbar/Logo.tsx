import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="flex-none ml-20 sm:ml-0 font-bold text-purple-500">
        <Link to="/">E-commers</Link>
      </div>
    </>
  );
};

export default Logo;
