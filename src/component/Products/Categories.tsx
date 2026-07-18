type Categorie = {
  value: string;
  onCategoriChange: (value: string) => void;
};

const Categories = ({ onCategoriChange, value }: Categorie) => {
  return (
    <div className="rounded-xl shadow-sm items-center text-sm flex text-gray-600 p-1 sm:p-2.5 ">
      <select
        onchange={(e) => onCategoriChange(e.target.value)}
        name=""
        id=""
        className="focus:outline-none"
      >
        <option disabled selected>Categories</option>
        <option value="Beauty">Beauty</option>
        <option value="Fragrances">Fragrances</option>
        <option value="Furniture">Furniture</option>
        <option value="Groceries">Groceries</option>
      </select>
    </div>
  );
};
export default Categories;
