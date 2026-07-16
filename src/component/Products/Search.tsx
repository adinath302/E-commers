
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
        className="border rounded-xl p-1 text-sm"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
