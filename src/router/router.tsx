import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../component/cart/Cart";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Product_List from "../component/Products/ProductList";
import ErrorPage from "../pages/ErrorPage";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
