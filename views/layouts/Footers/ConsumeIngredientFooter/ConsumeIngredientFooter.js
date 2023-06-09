import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Hooks
import { usePostIntake } from "@app/core/hooks/api";

// Constants
import { SIZES } from "@app/common/constants/styles";

// Components
import {
  Button,
  CircleLoader,
  NumberInput,
  SliderInput,
} from "@app/views/components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ConsumeIngredientFooter() {
  // Store State
  const { ingredientDetails } = useSelector((state) => state.ingredient);
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );
  // Store Actions
  const {
    setSelectedIngredientAmount: sfa,
    setDailyNutrients: sdn,
    setIsHomeSearchActive: sihsa,
    setDailyIntakes: sdi,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientAmount = (value) => dispatch(sfa(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setIsHomeSearchActive = (value) => dispatch(sihsa(value));
  const setDailyIntakes = (v) => dispatch(sdi(v));

  // Local State
  const [amount, setAmount] = useState(100);
  const [maxAmount, setMaxAmount] = useState(1000);
  const [incrementValue, setIncrementValue] = useState(50);
  const [measureUnit, setMeasureUnit] = useState({
    value: "g",
    desc: "gram",
    label: "Grams",
    shortLabel: "G",
  });
  const options = [
    { value: "g", label: "Grams", desc: "gram", shortLabel: "G" },
    { value: "srvs", desc: "servings", label: "Servings", shortLabel: "SRVS" },
  ];

  // Hooks
  const {
    postIntake,
    postIntakeData,
    isPostIntakeLoading,
    isPostIntakeSuccess,
  } = usePostIntake();
  const navigation = useNavigation();

  // Functions
  function handleSubmit() {
    const data = {
      food_id: ingredientDetails.id,
      amount: parseFloat(amount),
      amount_unit: measureUnit.value,
      amount_unit_desc: measureUnit.desc,
    };
    postIntake(data);
  }
  function handleIntake() {
    const newData = {
      ...dailyNutrients,
      calories:
        dailyNutrients.calories + postIntakeData.added_daily_nutrients.calories,
      protein:
        dailyNutrients.protein + postIntakeData.added_daily_nutrients.protein,
      carbs: dailyNutrients.carbs + postIntakeData.added_daily_nutrients.carbs,
      fats: dailyNutrients.fats + postIntakeData.added_daily_nutrients.fats,
    };
    const newIntake = {
      id: postIntakeData.intake.id,
      account_id: postIntakeData.intake.account_id,
      food_id: postIntakeData.intake.food_id,
      recipe_id: postIntakeData.intake.recipe_id,
      date_created: postIntakeData.intake.date_created,
      calories: postIntakeData.added_daily_nutrients.calories,
      amount: postIntakeData.intake.amount,
      amount_unit: postIntakeData.intake.amount_unit,
      amount_unit_desc: postIntakeData.intake.amount_unit_desc,
      serving_size: postIntakeData.intake.serving_size,

      food_name: postIntakeData.food.name,
      food_name_ph: postIntakeData.food.name_ph,
      food_name_brand: postIntakeData.food.name_brand,
      food_nutrient_id: postIntakeData.food.food_nutrient_id,
      food_nutrient_calories: postIntakeData.added_daily_nutrients.calories,

      recipe_name: postIntakeData.recipe_name,
      recipe_name_owner: postIntakeData.recipe_name_owner,
    };
    setDailyIntakes([newIntake, ...dailyIntakes]);
    setDailyNutrients(newData);
    setIsHomeSearchActive(false);
    navigation.navigate("Home", { screen: "HomeDefault" });
  }
  // UseEffects
  useEffect(() => {
    setSelectedIngredientAmount(amount);
  }, [amount]);
  useEffect(() => {
    if (postIntakeData && isPostIntakeSuccess) handleIntake();
  }, [postIntakeData]);

  // TODO add support for servings
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <SliderInput /> */}
      {!isPostIntakeLoading && (
        <View style={styles.container}>
          <View style={styles.navContainer}>
            <View style={styles.searchInputContainer}>
              <NumberInput
                value={amount}
                onChange={setAmount}
                incrementValue={incrementValue}
                maxValue={maxAmount}
                options={options}
                onOptionChange={setMeasureUnit}
                optionPlaceholder={measureUnit.shortLabel}
              />
            </View>
            <Button size={SIZES.Small} onPress={handleSubmit}>
              Consume
            </Button>
          </View>
        </View>
      )}
      {isPostIntakeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
