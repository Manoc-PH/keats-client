import { ScrollView, View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Constants
import { DUMMY_SERACH_DATA } from "@app/common/constants/dummyData";

// Hooks
import { useGetIntakes } from "@app/core/hooks/api";

// Layouts
import { ScrollPage } from "@app/views/layouts";

// Components
import { FoodCard, Image } from "@app/views/components";

import { styles } from "./styles";

export default function AccountVitals() {
  // Store State
  const { accountVitals } = useSelector((state) => state.account);

  // Store Actions
  const { setAccountVitals: savs } = actions;
  const dispatch = useDispatch();
  const setAccountVitals = (v) => dispatch(savs(v));

  // Functions

  // UseEffects

  return (
    <ScrollPage style={styles.wrapper}>
      <View style={styles.spacer} />
    </ScrollPage>
  );
}

// Intake format:
// "id": 16,
// "account_id": "5bf69ea0-c455-4645-82f8-05b5388893f7",
// "food_id": 9828,
// "recipe_id": 0,
// "date_created": "2023-03-19T15:16:10.425664Z",
// "amount": 150,
// "amount_unit": "g",
// "amount_unit_desc": "gram",
// "serving_size": 0,
// "food_name": "Chicken, broilers or fryers, meat only, cooked, fried",
// "food_name_ph": "",
// "food_name_brand": "USDA",
// "food_nutrient_id": 9828,
// "recipe_name": "",
// "recipe_name_owner": ""
