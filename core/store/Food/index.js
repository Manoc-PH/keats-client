import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodSearchResults: null,
  isFoodSearchLoading: null,
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
  },
});

export default store;
