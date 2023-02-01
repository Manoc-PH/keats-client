import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import MacroSummaryBars from "@app/views/layouts/SummaryBars/MacroSummaryBars";
import { View } from "react-native";
import { styles } from "./styles";

export default function NutrientSummary() {
  // TODO QUERY ENDPOINTS HERE
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
