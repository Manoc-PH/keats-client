import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    backgroundColor: themeColors.background,
    borderRadius: SPACING.Regular,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: themeColors.backgroundDark,
    borderTopLeftRadius: SPACING.Regular,
    borderTopRightRadius: SPACING.Regular,
  },
  image: {},
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: "100%",
    padding: SPACING.Regular,
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
});
