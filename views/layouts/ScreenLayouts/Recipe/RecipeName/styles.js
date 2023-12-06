import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
    paddingVertical: SPACING.Medium,
  },
  container: { width: "100%", gap: SPACING.Small },
  rowWrapper: { width: "100%", gap: SPACING.Medium, flexDirection: "row" },
  rowContainer: { gap: SPACING.Tiny, flexDirection: "row" },
  subheadline: { fontFamily: FONT_FAMILY.Regular },
});
