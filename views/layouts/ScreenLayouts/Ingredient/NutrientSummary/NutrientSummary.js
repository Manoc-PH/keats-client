import { useEffect, useState } from "react";
import { View } from "react-native";

import NutrientSummaryBar from "@app/views/layouts/SummaryBars/NutrientSummaryBar";

import { styles } from "./styles";

export default function NutrientSummary(props) {
  // Props
  const { details, amount, dailyNutrients, isLoading } = props;

  // Local State
  const [nutrientSummary, setNutrientSummary] = useState();

  // Functions
  function formatMacros() {
    const multiplier = amount * 0.01;
    const macros = [];
    let calTotal, proTotal, fatTotal, carTotal;
    if (amount) {
      calTotal =
        multiplier * details.nutrient.calories + dailyNutrients.calories;
      proTotal = multiplier * details.nutrient.protein + dailyNutrients.protein;
      fatTotal = multiplier * details.nutrient.fats + dailyNutrients.fats;
      carTotal = multiplier * details.nutrient.carbs + dailyNutrients.carbs;
    } else {
      calTotal = details.nutrient.calories + dailyNutrients.calories;
      proTotal = details.nutrient.protein + dailyNutrients.protein;
      fatTotal = details.nutrient.fats + dailyNutrients.fats;
      carTotal = details.nutrient.carbs + dailyNutrients.carbs;
    }
    macros.push({
      label: "calories",
      value: multiplier * details.nutrient.calories,
      total: calTotal,
      valueMax: Math.floor(dailyNutrients.max_calories),
      amountUnit: "",
    });
    macros.push({
      label: "carbs",
      total: carTotal,
      value: multiplier * details.nutrient.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      total: fatTotal,
      value: multiplier * details.nutrient.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      total: proTotal,
      value: multiplier * details.nutrient.protein,
      valueMax: Math.floor(dailyNutrients.max_protein),
      amountUnit: "g",
    });
    setNutrientSummary(macros);
  }

  // UseEffects
  useEffect(() => {
    if (details?.nutrient) formatMacros();
  }, [details, amount]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <NutrientSummaryBar loading={isLoading} macros={nutrientSummary} />
      </View>
    </View>
  );
}
