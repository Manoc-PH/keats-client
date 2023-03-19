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
    <ScrollPage>
      {isGetIntakesLoading &&
        DUMMY_SERACH_DATA.map((dummy) => (
          <FoodCard key={dummy.id} isLoading={true} />
        ))}
      {!isGetIntakesLoading &&
        dailyIntakes &&
        dailyIntakes.map((item) => (
          <FoodCard
            key={item.id}
            name={item.food_name || item.recipe_name}
            name_ph={item.food_name_ph}
            name_brand={item.food_name_brand || item.recipe_name_owner}
            calories={Math.floor(
              (item.food_nutrient_calories / item.food_nutrient_amount) *
                item.amount
            )}
            amount={item.amount}
            amount_desc={item.amount_unit}
            thumbnail_link={item.thumbnail_link}
            onPress={() => {}}
          />
        ))}
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
