import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = SPACING.Medium * 2;
const width = (screenWidth - horizontalPadding) / 7;
const size = width * 0.7;

export const styles = StyleSheet.create({
  itemSpace: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  text: { textAlign: "center", color: themeColors.secondary },
  barContainer: { paddingTop: SPACING.Regular },
  checkContainer: {
    borderRadius: width,
    height: size,
    width: size,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.primary,
  },
});
