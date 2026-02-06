import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// TODO: Add interceptors for auth and error handling.

export default api;
