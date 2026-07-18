import { CiSearch } from "react-icons/ci";
type searchprop = {
  value: string;
  onSearchChange: (value: string) => void;
};

const Search = ({ value, onSearchChange }: searchprop) => {
  return (
    <div className="border-xl flex items-center rounded-xl shadow shadow-gray-1 p-1 sm:p-2.5">
      <input
        type="text"
        value={value}
        placeholder="Search product"
        className="focus:border-none text-sm focus:outline-none"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <CiSearch />
    </div>
  );
};

export default Search;
