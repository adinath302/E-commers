import type {
  AuthResponse,
  CurrentUser,
  LoginCredentials,
} from "../types/auth";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    return response.json();
  },

  getCurrentUser: async (token: string | null): Promise<CurrentUser | null> => {
    // console.log("token from authService", token);

    if (!token) {
      return null;
    }

    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return response.json();
  },
};
