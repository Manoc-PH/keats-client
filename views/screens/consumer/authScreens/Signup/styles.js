import { StyleSheet } from "react-native";
import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: themeColors.background,
  },
  bottomWrapper: {
    width: "100%",
    justifyContent: "space-between",
    padding: SPACING.Medium,
  },
  bottomContentWrapper: {
    marginTop: SPACING.Large,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});