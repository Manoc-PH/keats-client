import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import NutrientSummaryBar from "@app/views/layouts/SummaryBars/NutrientSummaryBar";

import { styles } from "./styles";

export default function NutrientSummary() {
  // Store State
  const { foodDetails, selectedFoodAmount } = useSelector(
    (state) => state.food
  );
  const { dailyNutrients } = useSelector((state) => state.tracker);

  // Local State
  const [nutrientSummary, setNutrientSummary] = useState();

  // Functions
  function formatMacros() {
    const multiplier = selectedFoodAmount * 0.01;
    const macros = [];
    macros.push({
      label: "calories",
      value: selectedFoodAmount
        ? multiplier * foodDetails.food_nutrients.calories +
          dailyNutrients.calories
        : dailyNutrients.calories + foodDetails.food_nutrients.calories,
      valueMax: Math.floor(dailyNutrients.max_calories),
      amountUnit: "",
    });
    macros.push({
      label: "carbs",
      value: selectedFoodAmount
        ? multiplier * foodDetails.food_nutrients.carbs + dailyNutrients.carbs
        : dailyNutrients.carbs + foodDetails.food_nutrients.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      value: selectedFoodAmount
        ? multiplier * foodDetails.food_nutrients.fats + dailyNutrients.fats
        : dailyNutrients.fats + foodDetails.food_nutrients.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      value: selectedFoodAmount
        ? multiplier * foodDetails.food_nutrients.protein +
          dailyNutrients.protein
        : dailyNutrients.protein + foodDetails.food_nutrients.protein,
      valueMax: Math.floor(dailyNutrients.max_protein),
      amountUnit: "g",
    });
    setNutrientSummary(macros);
  }

  // UseEffects
  useEffect(() => {
    if (foodDetails) formatMacros();
  }, [foodDetails, selectedFoodAmount]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <NutrientSummaryBar
          loading={!nutrientSummary}
          macros={nutrientSummary}
        />
      </View>
    </View>
  );
}
