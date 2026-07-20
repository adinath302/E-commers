type Props = {
  title: string;
  price: number;
  description: string;
  image: string;
  cate:"string"
};

const Product = ({ title, price, description, image ,cate}: Props) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full w-full">
      <div className="h-48 w-full bg-gray-100 overflow-hidden ">
        <img
          src={image}
          loading="lazy"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col grow p-4 justify-between gap-4">
        <div className="flex justify-between items-center">
        {/* title */}
        <h1 className="font-semibold text-black text-lg line-clamp-1">
          {title}
        </h1>
        <div className="text-sm font-semibold text-gray-600">{cate}</div>
        </div>
        {/* description */}
        <div className="font-normal text-sm leading-5 text-gray-600 mt-1 line-clamp-3">
          {description}
        </div>
        {/* price & button */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-50">
          <div className="flex-col flex">
            <div className="text-[11px] font-bold text-gray-400 tracking-wider">
              PRICE
            </div>
            <div className="font-bold text-xl text-black">${price}</div>
          </div>
          <div className="px-4 py-2 bg-black text-sm text-white font-medium cursor-pointer hover:bg-purple-600 hover:scale-[1.03] active:scale-95 shadow-sm duration-200 transition-all  rounded-lg">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
