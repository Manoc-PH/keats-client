import { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import MacroSummaryBars from "@app/views/layouts/SummaryBars/MacroSummaryBars";
import { styles } from "./styles";
import { SPACING } from "@app/common/constants/styles";

export default function MacroSummary(props) {
  // Props
  const { dailyNutrients } = props;

  // Hooks
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  console.log(headerHeight, tabBarHeight);
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
      <View
        style={{
          ...styles.wholePageContainer,
          height:
            Dimensions.get("window").height -
            headerHeight -
            tabBarHeight -
            SPACING.Medium,
        }}>
        <CalorieSummaryBar
          loading={!dailyNutrients}
          calories={Math.floor(dailyNutrients?.calories) || 0}
          maxCalories={Math.floor(dailyNutrients?.max_calories) || 0}
        />
      </View>
      <View style={styles.container}>
        <MacroSummaryBars loading={!macroSummary} macros={macroSummary} />
      </View>
    </View>
  );
}
