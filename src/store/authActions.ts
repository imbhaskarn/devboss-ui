import { setAccessToken } from "@/store";
import axiosInstance from "@/utils/axios";

export const refreshTokenAction = () => async (dispatch: any) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await axiosInstance.post("/auth/refresh-token", {
      refreshToken,
    });
    localStorage.setItem("accessToken", response.data.data.accessToken);
    window.localStorage.setItem("accessToken", response.data.data.accessToken);
  } catch (error) {
    console.log("this is the error", error);
  }
};
