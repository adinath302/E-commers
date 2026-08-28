import Navbar from "./component/Navbar/Navbar";
// import Home from "./component/Home/Home.js";
// import Product_List from "./component/Products/Product_List.js";
import { Outlet } from "react-router-dom";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Loading from "./pages/Loading";
const App = () => {
  const { data, isLoading, isError } = useCurrentUser();

  console.log("CURRENT USER:", data);
  console.log("AUTH ERROR:", isError);
  return (
    <div>
      <Navbar />

      {isLoading && (
        <>
          <Loading />
        </>
      )}

      <main>
        {/* Outlet is used to render the child routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default App;