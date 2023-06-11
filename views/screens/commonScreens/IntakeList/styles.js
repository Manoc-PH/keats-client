import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { padding: SPACING.Regular },
  spacer: {
    paddingBottom: SPACING.Large * 3 * PixelRatio.getFontScale(),
  },
  imageWrapper: {
    aspectRatio: 1,
    width: "100%",
    backgroundColor: themeColors.backgroundLight,
  },
});
