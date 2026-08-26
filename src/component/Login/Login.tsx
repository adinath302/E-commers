import type { FormEvent } from "react";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, error } = useLogin();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ 
      username,
      password,
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>

        {isError && (
          <p className="text-red-500">
            {error instanceof Error ? error.message : "Login failed"}
          </p>
        )}
      </form>
    </main>
  );
};

export default Login;