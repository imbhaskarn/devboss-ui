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

// Export the reducer and action creators
export const { toggleLogin } = loginSlice.actions;

// config the store
const store = configureStore({
  reducer: {
    signIn: loginSlice.reducer,
  },
});

// export default the store
export default store;
