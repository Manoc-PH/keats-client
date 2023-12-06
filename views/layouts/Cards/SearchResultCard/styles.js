import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  nameContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    marginLeft: SPACING.Regular,
  },
  title: { color: themeColors.secondary, fontSize: FONT_SIZES.Regular },
  subtitle: { color: themeColors.secondaryLight },
  titleSkeleton: { marginBottom: SPACING.Small, width: "90%" },
  skeleton: { borderRadius: 5 },
  subHeadlineSkeleton: { width: "40%" },
});
