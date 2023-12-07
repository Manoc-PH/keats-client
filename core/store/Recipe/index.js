import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRecipeID: null,
  addedLike: false,
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
  },
});

export default store;
