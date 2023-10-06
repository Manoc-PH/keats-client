import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    marginBottom: SPACING.Huge,
    paddingVertical: SPACING.Medium,
  },
  container: {
    position: "relative",
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Huge,
  },
  spacer: { height: SPACING.Huge, width: "100%" },
  smallSpacer: { height: SPACING.Regular, width: "100%" },
  spacerSubheadline: { height: SPACING.Regular, width: "100%" },
  rowContainer: { flexDirection: "row", alignItems: "center" },
});
