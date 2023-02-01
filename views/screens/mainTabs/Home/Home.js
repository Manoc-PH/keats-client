import { ScrollView } from "react-native";

import { styles } from "./styles";
import { NutrientSummary, CurrentDietCard } from "@app/views/layouts";

export default function Home() {
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "start",
      }}>
      <NutrientSummary />
      <CurrentDietCard />
    </ScrollView>
  );
}
