import { FONT_WEIGHTS, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },
  container: {},
  title: { color: themeColors.secondary },
  brandname: { color: themeColors.primary, fontWeight: FONT_WEIGHTS.Medium },
});
