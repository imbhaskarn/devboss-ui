import axios from "axios";

import store from "../../store/index";
import { refreshTokenAction } from "../../store/authActions";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  timeout: 1000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Dispatch an action to refresh the token
      await store.dispatch(refreshTokenAction());
      const accessToken =
        store.getState().auth.accessToken ||
        localStorage.getItem("accessToken");

      // Retry the original request with the new token
      originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
