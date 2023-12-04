import { StyleSheet } from "react-native";
import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    textTransform: "capitalize",
    color: themeColors.secondaryLight,
  },
  rowContainer: { flex: 1 },
  valueContainer: { flexDirection: "row", alignItems: "flex-end" },
  barContainer: { paddingTop: SPACING.Tiny, paddingBottom: SPACING.Small },
});
