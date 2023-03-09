import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountVitals: null,
  // {
  //   account_id: '',
  //   weight: '',
  //   height: '',
  //   birthday: '',
  //   age: '',
  //   sex: '',
  //   activity_lvl_id: '',
  //   activity_lvl_name: '',
  //   bmr_multiplier: '',
  //   diet_plan_id: '',
  //   diet_plan_name: '',
  // }
};

const store = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountVitals: (state, { payload }) => {
      if (payload) state.accountVitals = payload;
      else state.accountVitals = null;
    },
  },
});

export default store;
