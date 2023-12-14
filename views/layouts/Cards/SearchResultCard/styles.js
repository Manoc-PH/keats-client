import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

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
  skeleton: {
    borderRadius: 5,
    width: Dimensions.get("window").width / 1.5,
  },
  smallSkeleton: {
    width: Dimensions.get("window").width / 3,
  },
  subHeadlineSkeleton: {
    width: "100%",
    alignItems: "flex-start",
    gap: SPACING.Tiny,
  },
});
