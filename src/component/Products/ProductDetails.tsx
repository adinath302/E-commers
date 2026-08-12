import { data, useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import Loading from "../Loading";
import ErrorPage from "../../pages/ErrorPage";

const ProductDetails = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useProduct(productId ? Number(productId) : undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  if (!product) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
console.log(data)
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
