import { View } from "react-native";

import {
  CircularProgressBar,
  LargeTitle,
  SubHeadline2,
} from "@app/views/components";
import themeColors from "@app/common/theme";
import { styles } from "./styles";

export default function CalorieSummaryBar(props) {
  const { calories, maxCalories } = props;

  // TODO ADD PROPER LOADING VIEW
  return (
    <View>
      <CircularProgressBar
        size={190}
        progress={(calories / maxCalories) * 100}
        foregroundColor={themeColors.primary}
        backgroundColor={themeColors.backgroundLight}>
        <View style={styles.container}>
          <LargeTitle style={styles.title}>{calories || 0}</LargeTitle>
          <SubHeadline2>of {maxCalories || 0} Calories</SubHeadline2>
        </View>
      </CircularProgressBar>
    </View>
  );
}
