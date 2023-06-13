import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dailyNutrients: null,
  // {
  //   account_id: "5bf69ea0-c455-4645-82f8-05b5388893f7",
  //   activity_lvl_id: "6eb28de2-a4f0-43ed-8bbb-bd83d9d7f247",
  //   calories: 0,
  //   carbs: 0,
  //   date_created: "2023-03-09T00:00:00Z",
  //   diet_plan_id: "e5eea194-dbd2-4532-baff-0a5565ab9f0f",
  //   fats: 0,
  //   id: 2,
  //   max_calories: 1968,
  //   max_carbs: 295.19998,
  //   max_fats: 32.8,
  //   max_protein: 123,
  //   protein: 0,
  // },
  dailyIntakes: null,
  selectedIntake: null,
  selectedIntakeAmount: 0,
  // "id": 13,
  // "account_id": "4767bca7-4911-4496-9de2-fb6b2d318c6c",
  // "ingredient_mapping_id": 1631,
  // "food_id": 0,
  // "date_created": "2023-06-12T09:27:12.540807Z",
  // "amount": 100,
  // "amount_unit": "g",
  // "amount_unit_desc": "gram",
  // "serving_size": 0,
  // "ingredient_name": "Rice",
  // "ingredient_name_ph": "",
  // "ingredient_variant_name": "brown",
  // "ingredient_variant_name_ph": "",
  // "ingredient_subvariant_name": "long-grain, cooked (Includes foods for USDA's Food Distribution Program)",
  // "ingredient_subvariant_name_ph": "",
  // "ingredient_name_owner": "USDA",
  // "food_name": "",
  // "food_name_ph": "",
  // "food_name_owner": ""
};

const store = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    setDailyNutrients: (state, { payload }) => {
      if (payload) state.dailyNutrients = payload;
      else state.dailyNutrients = null;
    },
    setDailyIntakes: (state, { payload }) => {
      if (payload) state.dailyIntakes = payload;
      else state.dailyIntakes = null;
    },
    setSelectedIntake: (state, { payload }) => {
      if (payload) state.selectedIntake = payload;
      else state.selectedIntake = null;
    },
    setSelectedIntakeAmount: (state, { payload }) => {
      if (payload) state.selectedIntakeAmount = payload;
      else state.selectedIntakeAmount = 0;
    },
  },
});

export default store;
