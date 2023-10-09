import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["toggleLogin"],
};

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
    isLoggedIn: false,
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
    toggleAuthState: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

// Export the reducer and action creators
export const { toggleLogin } = loginSlice.actions;
export const { setAccessToken, setRefreshToken, setUser, toggleAuthState } =
  authSlice.actions;

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    signIn: loginSlice.reducer,
    auth: authSlice.reducer,
  })
);

// config the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

// export default the store
export default store;
