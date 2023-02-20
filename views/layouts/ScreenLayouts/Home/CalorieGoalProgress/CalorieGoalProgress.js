import { View } from "react-native";
import {
  BUTTON_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "@app/common/constants/styles";

import { Button, Txt } from "@app/views/components";

import CalorieGraph from "@app/views/layouts/Graphs/CalorieGraph";
import { styles } from "./styles";

export default function CalorieGoalProgress() {
  // TODO QUERY ENDPOINTS HERE
  return (
    <View style={styles.wrapper}>
      <View style={styles.rowWrapper}>
        <Txt
          style={{
            fontWeight: FONT_WEIGHTS.SemiBold,
            fontSize: FONT_SIZES.Large,
          }}>
          Calorie Goal Progress
        </Txt>
      </View>
      <CalorieGraph />
    </View>
  );
}
