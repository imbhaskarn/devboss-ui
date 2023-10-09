import { setAccessToken } from "@/store";
import axiosInstance from "@/utils/axios/axios";


export const refreshTokenAction = () => async (dispatch: any) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axiosInstance.post("/refresh-token", {
      refreshToken,
    });
    dispatch(setAccessToken(response.data.accessToken));
    const { accessToken } = response.data;
  } catch (error) {
    // Handle token refresh error (e.g., logout the user)
  }
};
