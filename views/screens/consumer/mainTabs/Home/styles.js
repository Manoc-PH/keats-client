import { RADIUS, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
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
  btn: {
    position: "absolute",
    right: SPACING.Regular,
    bottom: SPACING.Regular,
    borderRadius: RADIUS.Medium,
    paddingHorizontal: SPACING.Regular,
    paddingVertical: SPACING.Regular,
    width: SPACING.Large * 2.5,
    height: SPACING.Large * 2.5,
  },
  spacer: { height: SPACING.Huge, width: "100%" },
  spacerSubheadline: { height: SPACING.Regular, width: "100%" },
  wideBtn: { justifyContent: "center" },
});
