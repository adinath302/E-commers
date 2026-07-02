import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home.js";
import Product_List from "./component/Products/Product_List.js";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        {/* Outlet is used to render the child routes */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default App;
