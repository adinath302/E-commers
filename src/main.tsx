import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Home from "./component/Home/Home.tsx";
import Product_List from "./component/Products/Product_List.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: (
      <div className="flex h-screen items-center justify-center text-xl font-bold">
        404 - Page Not Found
      </div>
    ),
    children: [
      {
        index: true, // this is the default route
        element: <Home />,
        errorElement: (
          <div className="flex h-screen items-center justify-center text-xl font-bold">
            404 - Page Not Found
          </div>
        ),
      },
      {
        path: "products",
        element: <Product_List />,
        errorElement: (
          <div className="flex h-screen items-center justify-center text-xl font-bold">
            404 - Page Not Found
          </div>
        ),
      },
      {
        path:'login',
        element:<Login/>,
        errorElement:(
          <div className="flex h-screen items-center justify-center text-xl font-bold">
            404 - Page Not Found
          </div>
        )
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
