import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de request (se ejecuta antes de cada llamada)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Buscamos token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Lo ponemos en headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
