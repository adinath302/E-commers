import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: authService.login,
    retry: false,
  });
};
