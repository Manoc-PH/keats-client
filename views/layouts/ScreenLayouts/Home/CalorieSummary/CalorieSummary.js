import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import CalorieSummaryBar from "@app/views/layouts/SummaryBars/CalorieSummaryBar";
import { styles } from "./styles";
import { BTN_VARIANTS, FONT_SIZES } from "@app/common/constants/styles";
import { CircleButton, TextSkeleton, Title3 } from "@app/views/components";
import { TrippleArrowDownIcon } from "@app/assets/icons";

export default function CalorieSummary(props) {
  // Props
  const { dailyNutrients, isViewSimple } = props;

  // Hooks
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View
      style={{
        ...styles.wrapper,
        paddingTop: headerHeight,
        paddingBottom: tabBarHeight,
      }}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          {!dailyNutrients && (
            <TextSkeleton
              style={styles.skeleton}
              fontSize={FONT_SIZES.Regular}
            />
          )}
          {dailyNutrients && <Title3>How much I've eaten today</Title3>}
        </View>
        <View style={styles.itemContainer}>
          <CalorieSummaryBar
            isViewSimple={isViewSimple}
            loading={!dailyNutrients}
            calories={Math.floor(dailyNutrients?.calories) || 0}
            maxCalories={Math.floor(dailyNutrients?.max_calories) || 0}
          />
        </View>
        <CircleButton variant={BTN_VARIANTS.transparent}>
          <TrippleArrowDownIcon />
        </CircleButton>
      </View>
    </View>
  );
}
