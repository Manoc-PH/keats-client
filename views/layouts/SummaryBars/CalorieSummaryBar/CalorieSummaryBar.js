import { Dimensions, StyleSheet, View } from "react-native";

import {
  CircleButton,
  CircularProgressBar,
  LargeTitle,
  SubHeadline2,
  TextSkeleton,
} from "@app/views/components";
import themeColors from "@app/common/theme";
import { styles } from "./styles";
import { BTN_VARIANTS, FONT_SIZES } from "@app/common/constants/styles";
import { PlusIcon } from "@app/assets/icons";

export default function CalorieSummaryBar(props) {
  const { calories, maxCalories, loading } = props;

  const width = Math.floor(Dimensions.get("screen").width * 0.8);

  const localyStyle = StyleSheet.create({
    container: {
      width: Math.floor(width * 0.6),
    },
  });
  return (
    <View style={{ width: "100%" }}>
      <CircularProgressBar
        size={width}
        progress={(calories / maxCalories) * 100}
        foregroundColor={themeColors.primary}
        backgroundColor={themeColors.backgroundLight}>
        <View style={{ ...styles.container, ...localyStyle.container }}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <TextSkeleton
                fontSize={FONT_SIZES.Huge}
                style={styles.skeleton}
              />
            </View>
          ) : (
            <LargeTitle style={styles.title}>{calories || 0}</LargeTitle>
          )}
          {loading ? (
            <View style={styles.smallLoadingContainer}>
              <TextSkeleton
                fontSize={FONT_SIZES.Small}
                style={styles.smallSkeleton}
              />
            </View>
          ) : (
            <SubHeadline2>of {maxCalories || 0} Calories</SubHeadline2>
          )}
          <View style={styles.addBtnContainer}>
            <CircleButton variant={BTN_VARIANTS.outlined}>
              <PlusIcon width={25} height={25} color={themeColors.primary} />
            </CircleButton>
          </View>
        </View>
      </CircularProgressBar>
    </View>
  );
}
