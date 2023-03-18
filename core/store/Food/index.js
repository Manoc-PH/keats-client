import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodSearchResults: null,
  isFoodSearchLoading: null,
  foodDetails: null,
  selectedFoodID: null,
  selectedFoodAmount: null,
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
    setFoodDetails: (state, { payload }) => {
      if (payload) state.foodDetails = payload;
      else state.foodDetails = null;
    },
    setSelectedFoodID: (state, { payload }) => {
      if (payload) state.selectedFoodID = payload;
      else state.selectedFoodID = null;
    },
    setSelectedFoodAmount: (state, { payload }) => {
      if (payload) state.selectedFoodAmount = payload;
      else state.selectedFoodAmount = null;
    },
  },
});

export default store;
