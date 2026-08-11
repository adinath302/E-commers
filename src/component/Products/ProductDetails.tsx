import { useParams } from "react-router-dom";

// const 

const ProductDetails = () => {
  const { productId } = useParams();

  return <div>Product</div>;
};

export default ProductDetails;
