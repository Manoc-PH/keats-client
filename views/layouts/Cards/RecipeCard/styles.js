import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: SPACING.Tiny,
  },
  name: { fontFamily: FONT_FAMILY.Medium },
  noNameRecipe: {
    color: themeColors.backgroundDark,
    fontFamily: FONT_FAMILY.Medium,
  },
  row: { flexDirection: "row", gap: SPACING.Tiny, alignItems: "center" },
  loader: { width: Dimensions.get("window").width / 3 },
  smallLoader: { width: Dimensions.get("window").width / 5 },
});
