import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: SPACING.Regular,
    marginVertical: SPACING.Tiny,
  },
  imageContainer: {
    borderRadius: 50,
    aspectRatio: 1,
    backgroundColor: themeColors.backgroundLight,
    maxWidth: SPACING.Huge * 1.5,
    width: "100%",
  },
  nameContainer: {
    justifyContent: "center",
    flex: 1,
    marginLeft: SPACING.Regular,
  },
  title: { fontWeight: FONT_WEIGHTS.Medium },
  subtitle: { color: themeColors.secondaryLight },
  titleSkeleton: { marginBottom: SPACING.Small, width: "90%" },
  skeleton: { borderRadius: 5 },
  subHeadlineSkeleton: { width: "40%" },
});
