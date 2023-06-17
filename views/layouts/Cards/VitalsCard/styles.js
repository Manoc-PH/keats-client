import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  container: { width: "100%" },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING.Tiny,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: { height: "100%", marginTop: SPACING.Small },
  subheadline: { color: themeColors.primary, marginRight: 5 },
  title: { textTransform: "capitalize" },
  skeleton: { marginTop: SPACING.Small },
  smallSkeleton: { width: "40%" },
  spacerLine: {
    width: "100%",
    height: 1,
    borderTopColor: themeColors.backgroundLight,
    borderTopWidth: 1,
    marginVertical: SPACING.Regular,
  },
  spacer: { width: "100%", marginTop: SPACING.Large },
});
