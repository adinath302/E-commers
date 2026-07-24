import type { Product } from "../../types/product";

type Categorie = {
  value: string;
  onCategoriChange: (value: string) => void;
  data: Product[];
};

const Categories = ({ onCategoriChange, value, data }: Categorie) => {
  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <div className="rounded-xl shadow-sm items-center text-sm flex text-gray-600 p-1 sm:p-2.5 ">
      <select
        onChange={(e) => onCategoriChange(e.target.value)}
        value={value}
        name=""
        id=""
        className="focus:outline-none"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Categories;
