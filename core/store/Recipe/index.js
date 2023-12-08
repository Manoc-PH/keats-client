import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRecipeID: null,
  addedLike: false,
  isReviewEdit: false,
  isRecipeUpdated: false,
  recipeIngredient: {},
};

const store = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipeID: (state, { payload }) => {
      if (payload) state.selectedRecipeID = payload;
      else state.selectedRecipeID = null;
    },
    setAddedLike: (state, { payload }) => {
      if (payload) state.addedLike = payload;
      else state.addedLike = false;
    },
    setIsReviewEdit: (state, { payload }) => {
      if (payload) state.isReviewEdit = payload;
      else state.isReviewEdit = false;
    },
    setIsRecipeUpdated: (state, { payload }) => {
      if (payload) state.isRecipeUpdated = payload;
      else state.isRecipeUpdated = false;
    },
    setRecipeIngredient: (state, { payload }) => {
      if (payload) state.recipeIngredient = payload;
      else state.recipeIngredient = {};
    },
  },
});

export default store;
