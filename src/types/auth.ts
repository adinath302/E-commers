export interface LoginCredentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface AuthResponse {
  user: User;
  // We'll add the actual session/token shape
  // once your backend/API contract is defined.
}