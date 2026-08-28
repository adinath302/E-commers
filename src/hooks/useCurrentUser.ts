import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import useAuthStore from "../store/useAuthStore";

export const useCurrentUser = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  console.log("token from localstorage in useCurrentUserb", accessToken);

  return useQuery({
    queryKey: ["current-user", accessToken],

    queryFn: () => authService.getCurrentUser(accessToken!),

    enabled:Boolean(),

    staleTime: 1000 * 60 * 5,

    retry: false,
  });
};
