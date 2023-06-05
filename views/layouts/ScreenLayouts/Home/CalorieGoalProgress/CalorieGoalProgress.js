import { View } from "react-native";

import { Button, Title2 } from "@app/views/components";

import CalorieGraph from "@app/views/layouts/Graphs/CalorieGraph";
import { styles } from "./styles";

export default function CalorieGoalProgress() {
  // TODO QUERY ENDPOINTS HERE
  return (
    <View style={styles.wrapper}>
      <CalorieGraph />
      <View style={styles.spacer} />
      <Button style={styles.btn}>Know More</Button>
    </View>
  );
}
