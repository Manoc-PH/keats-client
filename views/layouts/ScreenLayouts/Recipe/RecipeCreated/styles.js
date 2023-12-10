import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { flex: 1, gap: SPACING.Small },
  optionContainer: {},
  recipeWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: SPACING.Regular,
  },
  recipeContainer: {
    width:
      Dimensions.get("window").width / 2 -
      (SPACING.Medium + SPACING.Regular / 2),
  },
});
