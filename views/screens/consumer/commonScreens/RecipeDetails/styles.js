import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  container: {
    flex: 1,
    width: "100%",
    marginBottom: SPACING.Huge,
    paddingHorizontal: SPACING.Medium,
    paddingTop: SPACING.Medium,
    paddingBottom: SPACING.Huge * 3,
    gap: SPACING.Medium,
  },
  imageWrapper: {
    aspectRatio: 1,
    width: "100%",
    backgroundColor: themeColors.backgroundDark,
  },
});
