import { View } from "react-native";

import { Title2 } from "@app/views/components";

import CalorieGraph from "@app/views/layouts/Graphs/CalorieGraph";
import { styles } from "./styles";

export default function CalorieGoalProgress() {
  // TODO QUERY ENDPOINTS HERE
  return (
    <View style={styles.wrapper}>
      <View style={styles.rowWrapper}>
        <Title2>My Progress</Title2>
      </View>
      <CalorieGraph />
    </View>
  );
}
