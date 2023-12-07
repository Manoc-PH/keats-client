import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isViewSimple: true,
  isDeleteIntakeModalVisible: false,
  isProgressInfoModalVisible: false,
  isReviewRecipeModalVisible: false,
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
    setIsProgressInfoModalVisible: (state, { payload }) => {
      if (payload) state.isProgressInfoModalVisible = payload;
      else state.isProgressInfoModalVisible = false;
    },
    setIsReviewRecipeModalVisible: (state, { payload }) => {
      if (payload) state.isReviewRecipeModalVisible = payload;
      else state.isReviewRecipeModalVisible = false;
    },
  },
});

export default store;
