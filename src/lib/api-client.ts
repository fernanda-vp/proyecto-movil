import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.tu-servidor.com",
  headers: {
    "Content-Type": "application/json",
  },
});
