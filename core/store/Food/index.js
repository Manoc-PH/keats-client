import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodSearchResults: null,
  isFoodSearchLoading: null,
  foodNutrients: null,
};

const store = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodSearchResults: (state, { payload }) => {
      if (payload) state.foodSearchResults = payload;
      else state.foodSearchResults = null;
    },
    setIsFoodSearchLoading: (state, { payload }) => {
      if (payload) state.isFoodSearchLoading = payload;
      else state.isFoodSearchLoading = false;
    },
    setFoodNutrients: (state, { payload }) => {
      if (payload) state.foodNutrients = payload;
      else state.foodNutrients = false;
    },
  },
});

export default store;
