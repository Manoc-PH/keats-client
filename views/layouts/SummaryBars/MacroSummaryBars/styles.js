import { StyleSheet } from "react-native";
import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: SPACING[2.5],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { fontSize: FONT_SIZES.ExtraLarge },
  subtitle: {
    textTransform: "capitalize",
    color: themeColors.secondaryLight,
  },
  // TODO USE GAP WHEN IT FINALLY WORKS
  rowContainer: { flex: 1 },
  valueContainer: { flexDirection: "row", alignItems: "flex-end" },
  barContainer: { paddingTop: SPACING[0.5], paddingBottom: SPACING[1] },
});
