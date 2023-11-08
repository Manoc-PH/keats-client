import { View } from "react-native";

// Layouts
import CalorieGraph from "@app/views/layouts/Graphs/CalorieGraph";

import { styles } from "./styles";

export default function CalorieGoalProgress() {
  return (
    <View style={styles.wrapper}>
      <CalorieGraph />
      <View style={styles.spacer} />
    </View>
  );
}
