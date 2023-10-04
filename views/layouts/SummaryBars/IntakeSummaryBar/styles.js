import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = SPACING.Medium * 2;

export const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemSpace: { width: (screenWidth - horizontalPadding) / 7 },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: { textAlign: "center", color: themeColors.secondary },
});
