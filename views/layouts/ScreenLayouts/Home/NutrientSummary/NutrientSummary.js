import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import MacroSummaryBars from "@app/views/layouts/SummaryBars/MacroSummaryBars";
import { styles } from "./styles";

export default function NutrientSummary() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);

  // Local State
  const [macroSummary, setMacroSummary] = useState();

  // Functions
  function formatMacros() {
    const macros = [];
    macros.push({
      label: "carbs",
      value: dailyNutrients.carbs,
      valueMax: Math.floor(dailyNutrients.max_carbs),
      amountUnit: "g",
    });
    macros.push({
      label: "fats",
      value: dailyNutrients.fats,
      valueMax: Math.floor(dailyNutrients.max_fats),
      amountUnit: "g",
    });
    macros.push({
      label: "protein",
      value: dailyNutrients.protein,
      valueMax: Math.floor(dailyNutrients.max_protein),
      amountUnit: "g",
    });
    setMacroSummary(macros);
  }

  // UseEffects
  useEffect(() => {
    if (dailyNutrients) formatMacros();
  }, [dailyNutrients]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CalorieSummaryBar
          calories={dailyNutrients?.calories || 0}
          maxCalories={dailyNutrients?.maxCalories || 0}
        />
      </View>
      <View style={styles.container}>
        <MacroSummaryBars macros={macroSummary} />
      </View>
    </View>
  );
}
