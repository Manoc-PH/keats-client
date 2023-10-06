import { View } from "react-native";

import { Button } from "@app/views/components";

// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";

// Layouts
import CalorieGraph from "@app/views/layouts/Graphs/CalorieGraph";

import { styles } from "./styles";

export default function CalorieGoalProgress() {
  // TODO QUERY ENDPOINTS HERE
  return (
    <View style={styles.wrapper}>
      <CalorieGraph />
      <View style={styles.spacer} />
      <Button variant={BTN_VARIANTS.outlined} style={styles.btn}>
        Know More
      </Button>
    </View>
  );
}
