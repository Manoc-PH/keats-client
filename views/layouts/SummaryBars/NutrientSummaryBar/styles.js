import { StyleSheet } from "react-native";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: { fontWeight: FONT_WEIGHTS.Medium },
  subheadline: {
    textTransform: "capitalize",
    color: themeColors.secondaryLight,
  },
  // TODO USE GAP WHEN IT FINALLY WORKS
  rowContainer: { flex: 1 },
  valueContainer: { flexDirection: "row", alignItems: "flex-end" },
  barContainer: { paddingTop: SPACING.Tiny, paddingBottom: SPACING.Small },
});