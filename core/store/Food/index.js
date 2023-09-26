import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodDetails: null,
  selectedFoodID: null,
  selectedFoodBarcode: null,
  selectedFoodAmount: null,
};

const store = createSlice({
  name: "food",
  initialState,
  reducers: {
    setfoodDetails: (state, { payload }) => {
      if (payload) state.foodDetails = payload;
      else state.foodDetails = null;
    },
    setSelectedFoodID: (state, { payload }) => {
      if (payload) state.selectedFoodID = payload;
      else state.selectedFoodID = null;
    },
    setSelectedFoodBarcode: (state, { payload }) => {
      if (payload) state.selectedFoodBarcode = payload;
      else state.selectedFoodBarcode = null;
    },
    setSelectedFoodAmount: (state, { payload }) => {
      if (payload) state.selectedFoodAmount = payload;
      else state.selectedFoodAmount = null;
    },
  },
});

export default store;
