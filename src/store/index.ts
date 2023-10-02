import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const loginSlice = createSlice({
  name: "signin",
  initialState: {
    showLogin: false,
  },
  reducers: {
    toggleLogin: (state) => {
      state.showLogin = !state.showLogin;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    refreshToken: "",
    user: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export the reducer and action creators
export const { toggleLogin } = loginSlice.actions;
export const { setAccessToken, setRefreshToken, setUser } = authSlice.actions;

// config the store
const store = configureStore({
  reducer: {
    signIn: loginSlice.reducer,
    auth: authSlice.reducer,
  },
});

// export default the store
export default store;
