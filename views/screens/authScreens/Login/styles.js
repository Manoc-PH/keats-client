import { FONT_WEIGHTS, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: themeColors.background,
    padding: SPACING.Medium,
  },
  titleContainer: {
    marginBottom: SPACING.Medium,
  },
  errorContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingBottom: SPACING.Tiny,
    paddingHorizontal: SPACING.Large,
  },
  error: { color: themeColors.red, fontWeight: FONT_WEIGHTS.SemiBold },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: SPACING.Huge,
  },
  btnsContainer: {
    width: "100%",
    alignItems: "stretch",
  },
  login: { marginBottom: SPACING.Medium },
});
