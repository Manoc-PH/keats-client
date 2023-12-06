import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: SPACING.Tiny,
  },
  rowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    gap: SPACING.Small,
    alignItems: "center",
  },
  loadingTitle: {
    width: Dimensions.get("window").width / 5,
  },
  loadingBody: {
    width: Dimensions.get("window").width / 2,
  },
  loadingTime: {
    width: Dimensions.get("window").width / 7,
  },
});
