import { createSlice } from "@reduxjs/toolkit";

const idToken = localStorage.getItem("idToken");
console.log("idToken===>", idToken);
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: !!idToken },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducers = authSlice.reducer;
