import React from "react";

interface searchprop {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}


const Search = ({ searchText, setSearchText }: searchprop) => {
  return (
    <div className="border-xl">
      <input
        type="text"
        value={searchText}
        placeholder="Search product"
        className="border rounded-xl p-1 text-sm"
        onChange={(e: any) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
