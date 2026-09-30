import { useState } from "react";
import { loginRequest } from "./api";
import { LoginCredentials, User } from "./types";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const data = await loginRequest(credentials);

      setUser(data.user);

      return data;
    } catch (err: any) {
      const message = err?.message || "Error al iniciar sesión";

      setError(message);

      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, user };
};
