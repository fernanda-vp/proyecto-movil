import { apiClient } from "../../lib/api-client";
import { AuthResponse, LoginCredentials } from "./types";

export const loginRequest = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login",
      credentials,
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data?.message || "Error en el servidor");
    }

    throw new Error("No se pudo conectar con el servidor");
  }
};
