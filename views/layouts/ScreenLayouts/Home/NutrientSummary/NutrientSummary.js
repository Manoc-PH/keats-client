import { View } from "react-native";
import { useEffect, useState } from "react";

// Hooks
import { useGetDailyNutrients } from "@app/core/hooks/api";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import MacroSummaryBars from "@app/views/layouts/SummaryBars/MacroSummaryBars";
import { styles } from "./styles";

export default function NutrientSummary() {
  const [data, setData] = useState();

  // Hooks
  const {
    getDailyNutrients,
    getDailyNutrientsData,
    isGetDailyNutrientsLoading,
    isGetDailyNutrientsSuccess,
  } = useGetDailyNutrients();

  useEffect(() => {
    getDailyNutrients();
  }, []);
  useEffect(() => {
    // console.log(getDailyNutrientsData);
  }, [getDailyNutrientsData]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CalorieSummaryBar calories={1300} maxCalories={2051} />
      </View>
      <View style={styles.container}>
        <MacroSummaryBars />
      </View>
    </View>
  );
}
