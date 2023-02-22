import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHomeSearchActive: false,
};

const store = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsHomeSearchActive: (state, { payload }) => {
      if (payload) state.isHomeSearchActive = payload;
      else state.isHomeSearchActive = false;
    },
  },
});

export default store;
