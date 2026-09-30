import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.tu-servidor.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const message = error.response.data?.message || "Error en el servidor";
      return Promise.reject(new Error(message));
    }

    if (error.request) {
      return Promise.reject(new Error("No se pudo conectar con el servidor"));
    }

    return Promise.reject(new Error("Error inesperado"));
  },
);
