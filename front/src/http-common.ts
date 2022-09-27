import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: `http://localhost:${import.meta.env.VITE_PORT}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
