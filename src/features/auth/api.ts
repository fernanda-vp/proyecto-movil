import { apiClient } from "../../lib/api-client";
import { AuthResponse, LoginCredentials } from "./types";

export const loginRequest = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    "/auth/login",
    credentials,
  );
  return response.data;
};
