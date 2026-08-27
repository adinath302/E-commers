import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useCurrentUser = () => {
  const token = localStorage.getItem("accessToken");
  console.log("token from localstorage in useCurrentUserb", token);

  return useQuery({
    queryKey: ["current-user", token],
    queryFn: () => authService.getCurrentUser(token!),
    enabled: !!token,

    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};