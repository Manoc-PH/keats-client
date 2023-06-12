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
import { SearchResultCard, Image } from "@app/views/components";

import { styles } from "./styles";

export default function IntakeList() {
  // Store State
  const { dailyIntakes } = useSelector((state) => state.tracker);

  // Store Actions
  const { setDailyIntakes: sdi } = actions;
  const dispatch = useDispatch();
  const setDailyIntakes = (v) => dispatch(sdi(v));

  // Hooks
  const {
    getIntakes,
    getIntakesData,
    isGetIntakesLoading,
    isGetIntakesSuccess,
  } = useGetIntakes();

  // Functions

  // UseEffects
  useEffect(() => {
    if (!dailyIntakes) {
      getIntakes();
    }
  }, []);
  useEffect(() => {
    if (isGetIntakesSuccess) {
      setDailyIntakes(getIntakesData);
    }
  }, [getIntakesData]);

  // TODO Add intake to daily intakes when consuming food
  return (
    <ScrollPage style={styles.wrapper}>
      {isGetIntakesLoading &&
        DUMMY_SERACH_DATA.map((dummy) => (
          <SearchResultCard key={dummy.id} isLoading={true} />
        ))}
      {!isGetIntakesLoading &&
        dailyIntakes &&
        dailyIntakes.map((item, i) => (
          <>
            {item?.ingredient_mapping_id ? (
              <SearchResultCard
                key={item.id}
                title={`${item.ingredient_name} ${item.ingredient_variant_name}`}
                subtitle={`${item.ingredient_name_owner} - ${
                  item.amount
                } ${item.amount_unit.toUpperCase()}`}
                thumbnail_link={item.thumbnail_image_link}
                onPress={() => {}}
              />
            ) : (
              <SearchResultCard
                key={item.id}
                title={item.food_name}
                subtitle={`${item.food_name_owner} - ${
                  item.amount
                } ${item.amount_unit.toUpperCase()}`}
                thumbnail_link={item.food_name_owner}
                onPress={() => {}}
              />
            )}
          </>
        ))}
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
