import type { LoginCredentials } from "../types/auth";

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    return response.json();
  },

  getCurrentUser: async (token: string) => {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer ${token}",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return response.json();
  },
};
