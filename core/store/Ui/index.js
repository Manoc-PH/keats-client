import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isViewSimple: true,
};

const store = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsViewSimple: (state, { payload }) => {
      if (payload) state.isViewSimple = payload;
      else state.isViewSimple = true;
    },
  },
});

export default store;
