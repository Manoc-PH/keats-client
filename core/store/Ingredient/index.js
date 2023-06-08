import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientDetails: null,
  selectedIngredientID: null,
  selectedIngredientAmount: null,
};

const store = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    setIngredientDetails: (state, { payload }) => {
      if (payload) state.ingredientDetails = payload;
      else state.ingredientDetails = null;
    },
    setSelectedIngredientID: (state, { payload }) => {
      if (payload) state.selectedIngredientID = payload;
      else state.selectedIngredientID = null;
    },
    setSelectedIngredientAmount: (state, { payload }) => {
      if (payload) state.selectedIngredientAmount = payload;
      else state.selectedIngredientAmount = null;
    },
  },
});

export default store;
