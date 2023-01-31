import { View } from "react-native";

import { CircularProgressBar, Txt } from "@app/views/components";
import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export default function CalorieSummaryBar(props) {
  const { progress, calories, maxCalories } = props;
  return (
    <View>
      <CircularProgressBar
        size={190}
        progress={progress}
        foregroundColor={themeColors.primary}
        backgroundColor={themeColors.backgroundLight}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Txt
            style={{
              marginBottom: 2,
              fontSize: FONT_SIZES.Huge,
              fontWeight: FONT_WEIGHTS.Bold,
            }}>
            {calories || 0}
          </Txt>
          <Txt style={{ fontWeight: FONT_WEIGHTS.Light }}>
            of {maxCalories || 0} Calories
          </Txt>
        </View>
      </CircularProgressBar>
    </View>
  );
}
