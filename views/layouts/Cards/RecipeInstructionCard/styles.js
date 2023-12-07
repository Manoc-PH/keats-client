import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: SPACING.Tiny,
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.Medium,
  },
  rowContainer: {
    flexDirection: "row",
    gap: SPACING.Tiny,
    alignItems: "center",
  },
  orderContainer: {
    borderRadius: SPACING.Huge,
    borderWidth: 1,
    borderColor: themeColors.backgroundDark,
    height: SPACING.Huge + SPACING.Tiny,
    width: SPACING.Huge + SPACING.Tiny,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingTitle: {
    width: Dimensions.get("window").width / 1.6,
  },
  loadingBody: {
    width: Dimensions.get("window").width / 4,
  },
});
