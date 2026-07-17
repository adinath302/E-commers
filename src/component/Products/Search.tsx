
type searchprop = {
  value: string;
  onSearchChange : (value: string) => void;
};

const Search = ({ value, onSearchChange  }: searchprop) => {
  return (
    <div className="border-xl">
      <input
        type="text"
        value={value}
        placeholder="Search product"
        className="rounded-xl border- shadow shadow-gray-1 p-2.5 text-sm"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
