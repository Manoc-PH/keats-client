import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  contentWrapper: {
    paddingBottom: SPACING.Regular,
    paddingHorizontal: SPACING.Regular,
    backgroundColor: themeColors.background,
    borderRadius: SPACING.Large,
  },
  imageWrapper: {
    padding: SPACING.Regular,
    gap: SPACING.Regular,
    backgroundColor: themeColors.background,
    borderRadius: SPACING.Large,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: SPACING.Regular,
  },
  loader: {
    height: Dimensions.get("window").height / 2,
  },
});
