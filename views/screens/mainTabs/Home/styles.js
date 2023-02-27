import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: themeColors.background,
    padding: SPACING.Medium,
    position: "relative",
  },
  container: {
    flex: 1,
    width: "100%",
    marginBottom: SPACING.Huge,
  },
});
