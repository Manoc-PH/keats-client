import { View } from "react-native";

import {
  CircularProgressBar,
  LargeTitle,
  SubHeadline2,
} from "@app/views/components";
import themeColors from "@app/common/theme";

export default function CalorieSummaryBar(props) {
  const { calories, maxCalories } = props;
  return (
    <View>
      <CircularProgressBar
        size={190}
        progress={(calories / maxCalories) * 100}
        foregroundColor={themeColors.primary}
        backgroundColor={themeColors.backgroundLight}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <LargeTitle style={{ marginBottom: 2 }}>{calories || 0}</LargeTitle>
          <SubHeadline2>of {maxCalories || 0} Calories</SubHeadline2>
        </View>
      </CircularProgressBar>
    </View>
  );
}
