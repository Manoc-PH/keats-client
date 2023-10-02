import { SPACING } from "@app/common/constants/styles";
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
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Huge,
  },
  spacer: { height: SPACING.Huge, width: "100%" },
  spacerSubheadline: { height: SPACING.Regular, width: "100%" },
});
