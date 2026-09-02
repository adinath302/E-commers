import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../component/Cart/Cart";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Product_List from "../component/Products/ProductList";
import ErrorPage from "../pages/ErrorPage";
import ProductDetails from "../component/Products/ProductDetails";
import Wishlist from "../component/Wishlist/Wishlist";
import CartDetails from "../component/Cart/CartDetails.tsx";
import ProtectedRoute from "../pages/ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // this is the default route
        element: <Home />,
      },
      {
        path: "products",
        element: <Product_List />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "cart/:cartId",
        element: <CartDetails />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },

      // Protected routes
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "checkout",
            // element: <Checkout />,
          },
          {
            path: "orders",
            // element: <Orders />,
          },
          {
            path: "profile",
            // element: <Profile />,
          },
        ],
      },
    ],
  },
]);
