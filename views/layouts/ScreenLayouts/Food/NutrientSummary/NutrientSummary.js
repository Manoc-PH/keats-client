import { useEffect, useState } from "react";
import { View } from "react-native";

import NutrientSummaryBar from "@app/views/layouts/SummaryBars/NutrientSummaryBar";

import { styles } from "./styles";

export default function NutrientSummary(props) {
  // Props
  const { foodDetails, selectedFoodAmount, dailyNutrients } = props;

  // Local State
  const [nutrientSummary, setNutrientSummary] = useState();

  // Functions
  function formatMacros() {
    const multiplier = selectedFoodAmount * 0.01;
    const macros = [];
    let calTotal, proTotal, fatTotal, carTotal;
    if (selectedFoodAmount) {
      calTotal =
        multiplier * foodDetails.food_nutrients.calories +
        dailyNutrients.calories;
      proTotal =
        multiplier * foodDetails.food_nutrients.protein +
        dailyNutrients.protein;
      fatTotal =
        multiplier * foodDetails.food_nutrients.fats + dailyNutrients.fats;
      carTotal =
        multiplier * foodDetails.food_nutrients.carbs + dailyNutrients.carbs;
    } else {
      calTotal = foodDetails.food_nutrients.calories + dailyNutrients.calories;
      proTotal = foodDetails.food_nutrients.protein + dailyNutrients.protein;
      fatTotal = foodDetails.food_nutrients.fats + dailyNutrients.fats;
      carTotal = foodDetails.food_nutrients.carbs + dailyNutrients.carbs;
    }
    macros.push({
      label: "calories",
      value: multiplier * foodDetails.food_nutrients.calories,
      total: calTotal,
      valueMax: Math.floor(dailyNutrients.max_calories),
      amountUnit: "",
    });
    macros.push({
      label: "carbs",
      total: carTotal,
      value: multiplier * foodDetails.food_nutrients.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      total: fatTotal,
      value: multiplier * foodDetails.food_nutrients.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      total: proTotal,
      value: multiplier * foodDetails.food_nutrients.protein,
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
