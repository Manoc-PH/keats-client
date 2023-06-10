import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    // height: SPACING.Large * 3 * PixelRatio.getFontScale(),
    width: "100%",
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
    borderTopColor: themeColors.backgroundLight,
    borderTopWidth: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Small,
    alignItems: "stretch",
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInputContainer: { flex: 1, marginRight: SPACING.Regular },
});
