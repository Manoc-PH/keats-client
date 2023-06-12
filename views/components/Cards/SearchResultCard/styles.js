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
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
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
