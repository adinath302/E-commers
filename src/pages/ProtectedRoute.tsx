import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = () => {
  // it takes  the access token form useAuthStore
  const accessToken = useAuthStore((state) => state.accessToken);
  
  // if the user has token or not
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;