import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHomeSearchActive: false,
  recipeSearch: "",
};

const store = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsHomeSearchActive: (state, { payload }) => {
      if (payload) state.isHomeSearchActive = payload;
      else state.isHomeSearchActive = false;
    },
    setRecipeSearch: (state, { payload }) => {
      if (payload) state.recipeSearch = payload;
      else state.recipeSearch = "";
    },
  },
});

export default store;
