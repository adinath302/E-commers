import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { authService } from "../services/authService";
import useAuthStore from "../store/useAuthStore";

export const useCurrentUser = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);

  const query = useQuery({
    queryKey: ["current-user", accessToken],
    queryFn: () => authService.getCurrentUser(accessToken!),
    enabled: Boolean(accessToken),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  useEffect(() => {
    if (query.error?.message === "Failed to fetch user profile") {
      logout();
    }
  }, [query.error, logout]);

  return query;
};