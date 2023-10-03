import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isViewSimple: true,
  isDeleteIntakeModalVisible: false,
};

const store = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsViewSimple: (state, { payload }) => {
      if (payload) state.isViewSimple = payload;
      else state.isViewSimple = false;
    },
    setIsDeleteIntakeModalVisible: (state, { payload }) => {
      if (payload) state.isDeleteIntakeModalVisible = payload;
      else state.isDeleteIntakeModalVisible = false;
    },
  },
});

export default store;
