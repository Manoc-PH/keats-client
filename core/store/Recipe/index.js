import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRecipeID: null,
  recipeOwnerId: null,
  addedLike: false,
  isReviewEdit: false,
  isRecipeUpdated: false,
  isRecipeHomeUpdated: false,
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
    setRecipeOwnerId: (state, { payload }) => {
      if (payload) state.recipeOwnerId = payload;
      else state.recipeOwnerId = null;
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
    setIsRecipeHomeUpdated: (state, { payload }) => {
      if (payload) state.isRecipeHomeUpdated = payload;
      else state.isRecipeHomeUpdated = false;
    },
    setRecipeIngredient: (state, { payload }) => {
      if (payload) state.recipeIngredient = payload;
      else state.recipeIngredient = {};
    },
  },
});

export default store;
