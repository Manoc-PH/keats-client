import { useEffect, useState } from "react";
import { View } from "react-native";

import NutrientSummaryBar from "@app/views/layouts/SummaryBars/NutrientSummaryBar";

import { styles } from "./styles";

export default function NutrientSummary(props) {
  // Props
  const {
    ingredientDetails,
    selectedIngredientAmount,
    dailyNutrients,
    isLoading,
  } = props;

  // Local State
  const [nutrientSummary, setNutrientSummary] = useState();

  // Functions
  function formatMacros() {
    const multiplier = selectedIngredientAmount * 0.01;
    const macros = [];
    let calTotal, proTotal, fatTotal, carTotal;
    if (selectedIngredientAmount) {
      calTotal =
        multiplier * ingredientDetails.nutrient.calories +
        dailyNutrients.calories;
      proTotal =
        multiplier * ingredientDetails.nutrient.protein +
        dailyNutrients.protein;
      fatTotal =
        multiplier * ingredientDetails.nutrient.fats + dailyNutrients.fats;
      carTotal =
        multiplier * ingredientDetails.nutrient.carbs + dailyNutrients.carbs;
    } else {
      calTotal = ingredientDetails.nutrient.calories + dailyNutrients.calories;
      proTotal = ingredientDetails.nutrient.protein + dailyNutrients.protein;
      fatTotal = ingredientDetails.nutrient.fats + dailyNutrients.fats;
      carTotal = ingredientDetails.nutrient.carbs + dailyNutrients.carbs;
    }
    macros.push({
      label: "calories",
      value: multiplier * ingredientDetails.nutrient.calories,
      total: calTotal,
      valueMax: Math.floor(dailyNutrients.max_calories),
      amountUnit: "",
    });
    macros.push({
      label: "carbs",
      total: carTotal,
      value: multiplier * ingredientDetails.nutrient.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      total: fatTotal,
      value: multiplier * ingredientDetails.nutrient.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      total: proTotal,
      value: multiplier * ingredientDetails.nutrient.protein,
      valueMax: Math.floor(dailyNutrients.max_protein),
      amountUnit: "g",
    });
    setNutrientSummary(macros);
  }

  // UseEffects
  useEffect(() => {
    if (ingredientDetails) formatMacros();
  }, [ingredientDetails, selectedIngredientAmount]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <NutrientSummaryBar loading={isLoading} macros={nutrientSummary} />
      </View>
    </View>
  );
}
