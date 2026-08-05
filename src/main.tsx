import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./component/Home/Home.tsx";
import Product_List from "./component/Products/Product_List.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./component/cart/Cart.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // this is the default route
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "products",
        element: <Product_List />,
        errorElement: <ErrorPage />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
