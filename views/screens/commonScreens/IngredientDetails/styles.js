import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  container: {
    flex: 1,
    width: "100%",
    marginBottom: SPACING.Huge,
    paddingHorizontal: SPACING.Medium,
    paddingTop: SPACING.Medium,
    paddingBottom: Dimensions.get("window").height / 2.5,
  },
  spacer: { paddingTop: SPACING.Medium },
  imageWrapper: {
    aspectRatio: 1,
    width: "100%",
    backgroundColor: themeColors.backgroundLight,
  },
});
