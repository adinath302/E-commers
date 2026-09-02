import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/authService";
import useAuthStore from "../store/useAuthStore";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: authService.login,

    retry: false,

    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);

      //Refresher useCurrentUser immediately so your app knows who logged in
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
  });
};