import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const store = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, { payload }) => {
      if (payload) state.isLoggedIn = payload;
      else state.isLoggedIn = false;
    },
  },
});

export default store;
