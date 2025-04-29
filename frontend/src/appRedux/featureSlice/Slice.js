import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
  sessionCode: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.sessionCode = action.payload.sessionCode;
      state.isAuthenticated = true;
    },
    userLoggedOut: (state) => {
      state.user = null;
      state.token = null;
      state.sessionCode = null;
      state.isAuthenticated = false;
    },
    updateSessionCode: (state, action) => {
      state.sessionCode = action.payload;
    }
  },
});

export const { userLoggedIn, userLoggedOut, updateSessionCode } = authSlice.actions;
export default authSlice.reducer;