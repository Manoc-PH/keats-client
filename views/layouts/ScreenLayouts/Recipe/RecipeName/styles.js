import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
    gap: SPACING.Medium,
  },
  container: {
    width: "100%",
    gap: SPACING.Small,
    justifyContent: "center",
  },
  rowWrapper: {
    width: "100%",
    gap: SPACING.Medium,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  rowContainer: {
    gap: SPACING.Small,
    flexDirection: "row",
    alignItems: "center",
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.Small,
    backgroundColor: themeColors.background,
    paddingVertical: SPACING.Medium,
    borderRadius: SPACING.Medium,
    borderWidth: 1,
    borderColor: themeColors.backgroundDark,
    flex: 1,
  },
  body: { textAlign: "center" },

  loadingTitle: { width: Dimensions.get("window").width / 1.5 },
  loadingSubheadline1: { width: Dimensions.get("window").width / 3 },
  loadingBody: { width: Dimensions.get("window").width / 5 },
});
