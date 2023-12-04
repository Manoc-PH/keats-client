import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%", justifyContent: "flex-start" },
  container: { paddingTop: SPACING.Regular },
  title: { color: themeColors.secondary },
  brandname: { color: themeColors.primary, fontFamily: FONT_FAMILY.Medium },

  titleSkeleton: { marginBottom: SPACING.Small },
  brandnameSkeleton: { width: "40%" },
});
