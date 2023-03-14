import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import NutrientSummaryBar from "@app/views/layouts/SummaryBars/NutrientSummaryBar";

import { styles } from "./styles";

export default function NutrientSummary() {
  // Store State
  const { foodNutrients } = useSelector((state) => state.food);
  const { dailyNutrients } = useSelector((state) => state.tracker);

  // Local State
  const [nutrientSummary, setNutrientSummary] = useState();

  // Functions
  function formatMacros() {
    const macros = [];
    macros.push({
      label: "kcal",
      value: dailyNutrients.calories + foodNutrients.calories,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "",
    });
    macros.push({
      label: "carbs",
      value: dailyNutrients.carbs + foodNutrients.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      value: dailyNutrients.fats + foodNutrients.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      value: dailyNutrients.protein + foodNutrients.protein,
      valueMax: Math.floor(dailyNutrients.max_protein),
      amountUnit: "g",
    });
    setNutrientSummary(macros);
  }

  // UseEffects
  useEffect(() => {
    if (foodNutrients) formatMacros();
  }, [foodNutrients]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CalorieSummaryBar
          loading={!foodNutrients}
          calories={foodNutrients?.calories || 0}
          maxCalories={foodNutrients?.max_calories || 0}
        />
      </View>
      <View style={styles.container}>
        <NutrientSummaryBar
          loading={!nutrientSummary}
          macros={nutrientSummary}
        />
      </View>
    </View>
  );
}
