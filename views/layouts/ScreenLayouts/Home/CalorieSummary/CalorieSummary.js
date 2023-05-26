import { View, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import { styles } from "./styles";
import { SPACING } from "@app/common/constants/styles";

export default function CalorieSummary(props) {
  // Props
  const { dailyNutrients } = props;

  // Hooks
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          ...styles.container,
          height:
            Dimensions.get("window").height -
            headerHeight -
            tabBarHeight -
            SPACING.Medium,
        }}>
        <CalorieSummaryBar
          loading={!dailyNutrients}
          calories={Math.floor(dailyNutrients?.calories) || 0}
          maxCalories={Math.floor(dailyNutrients?.max_calories) || 0}
        />
      </View>
    </View>
  );
}
