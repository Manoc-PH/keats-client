import { View } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Constants
import { DUMMY_SERACH_DATA } from "@app/common/constants/dummyData";

// Hooks
import { useGetIntakes } from "@app/core/hooks/api";

// Layouts
import { ScrollPage, SearchResultCard } from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function IntakeList() {
  // Store State
  const { dailyIntakes } = useSelector((state) => state.tracker);

  // Store Actions
  const { setDailyIntakes: sdi, setSelectedIntake: ssi } = actions;
  const dispatch = useDispatch();
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setSelectedIntake = (v) => dispatch(ssi(v));

  // Hooks
  const navigation = useNavigation();
  const {
    getIntakes,
    getIntakesData,
    isGetIntakesLoading,
    isGetIntakesSuccess,
  } = useGetIntakes();

  // Functions
  async function handlePress(item) {
    await setSelectedIntake(item);
    if (item?.ingredient_mapping_id) {
      navigation.navigate("Common", { screen: "IntakeIngredientDetails" });
    }
    if (item?.food_id) {
      navigation.navigate("Common", { screen: "IntakeFoodDetails" });
    }
  }

  // UseEffects
  useEffect(() => {
    if (!dailyIntakes) getIntakes();
  }, []);
  useEffect(() => {
    if (isGetIntakesSuccess) setDailyIntakes(getIntakesData);
  }, [getIntakesData]);

  return (
    <ScrollPage style={styles.wrapper}>
      {isGetIntakesLoading &&
        DUMMY_SERACH_DATA.map((dummy) => (
          <SearchResultCard key={dummy.id} isLoading={true} />
        ))}
      {!isGetIntakesLoading &&
        dailyIntakes &&
        dailyIntakes.map((item) => (
          <SearchResultCard
            key={item.id}
            title={
              item?.ingredient_mapping_id
                ? `${item.ingredient_name} ${item.ingredient_variant_name}`
                : `${item?.food_name} ${item?.food_name_ph}`
            }
            subtitle={
              item?.ingredient_mapping_id
                ? `${item.ingredient_name_owner} - ${
                    item.amount
                  } ${item.amount_unit.toUpperCase()}`
                : `${item?.food_name_owner}`
            }
            thumbnail_url={item.thumbnail_image_link}
            onPress={() => handlePress(item)}
          />
        ))}
      <View style={styles.spacer} />
    </ScrollPage>
  );
}

// Intake format:
// {
//   "added_daily_nutrients": {
//       "id": 41,
//       "amount": 0,
//       "amount_unit": "",
//       "amount_unit_desc": "",
//       "serving_size": 0,
//       "serving_total": 0,
//       "calories": 57.5,
//       "protein": 0,
//       "carbs": 5.5,
//       "fats": 3.75,
//       "trans_fat": 0,
//       "saturated_fat": 2.25,
//       "sugars": 4.25,
//       "fiber": 0.75,
//       "sodium": 0,
//       "iron": 0.0000011250002,
//       "calcium": 0.0000050000003
//   },
//   "intake": {
//       "id": 43,
//       "account_id": "4767bca7-4911-4496-9de2-fb6b2d318c6c",
//       "date_created": "2023-09-26T05:12:25.876857801Z",
//       "amount": 10,
//       "amount_unit": "g",
//       "amount_unit_desc": "gram",
//       "serving_size": 0,
//       "food_id": 7619,
//       "ingredient_mapping_id": 0
//   },
//   "ingredient": {
//       "ingredient": {
//           "id": 0,
//           "name": "",
//           "name_ph": "",
//           "name_owner": "",
//           "date_created": "0001-01-01T00:00:00Z",
//           "thumbnail_image_link": "",
//           "ingredient_desc": "",
//           "category_id": 0
//       },
//       "ingredient_variant": {
//           "id": 0,
//           "name": "",
//           "name_ph": ""
//       },
//       "ingredient_subvariant": {
//           "id": 0,
//           "name": "",
//           "name_ph": ""
//       },
//       "nutrient": {
//           "id": 0,
//           "amount": 0,
//           "amount_unit": "",
//           "amount_unit_desc": "",
//           "serving_size": 0,
//           "serving_total": 0,
//           "calories": 0,
//           "protein": 0,
//           "carbs": 0,
//           "fats": 0,
//           "trans_fat": 0,
//           "saturated_fat": 0,
//           "sugars": 0,
//           "fiber": 0,
//           "sodium": 0,
//           "iron": 0,
//           "calcium": 0
//       }
//   },
//   "food": {
//       "id": 7619,
//       "name": "Organic Dark Chocolate Minis",
//       "name_ph": "",
//       "name_owner": "",
//       "date_created": "0001-01-01T00:00:00Z",
//       "barcode": "",
//       "thumbnail_image_link": "",
//       "food_desc": "",
//       "owner_id": "00000000-0000-0000-0000-000000000000",
//       "category_id": 0,
//       "food_type_id": 0,
//       "nutrient_id": 0
//   }
// }
