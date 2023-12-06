import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRecipeID: null,
};

const store = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipeID: (state, { payload }) => {
      if (payload) state.selectedRecipeID = payload;
      else state.selectedRecipeID = null;
    },
  },
});

export default store;
