import axios from "axios";
import store from "../../store/index";
import { refreshTokenAction } from "../../store/authActions";
// Create a function to get the access token from store or localStorage

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        withCredentials: false,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error.response);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch(refreshTokenAction() as any);
      const accessToken = window.localStorage.getItem("accessToken");
      axiosInstance.defaults.headers.common["Authorization"] = accessToken;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
