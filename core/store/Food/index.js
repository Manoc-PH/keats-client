import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodSearchResults: null,
};

const store = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoodSearchResults: (state, { payload }) => {
      if (payload) state.foodSearchResults = payload;
      else state.foodSearchResults = null;
    },
  },
});

export default store;
