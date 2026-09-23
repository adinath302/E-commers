import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = () => {
  const location = useLocation();
  // it takes  the access token form useAuthStore
  const accessToken = useAuthStore((state) => state.accessToken);

  // if the user has token or not
  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
