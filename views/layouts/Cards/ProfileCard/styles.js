import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  container: { width: "100%" },
  imageContainer: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    borderRadius: Dimensions.get("window").width,
    borderColor: themeColors.backgroundLight,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: { width: "100%", marginTop: SPACING.Large },
});
