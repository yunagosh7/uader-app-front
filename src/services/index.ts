import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {

    config.headers.Authorization = "Token " + token;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
  return config
})

export default axiosInstance