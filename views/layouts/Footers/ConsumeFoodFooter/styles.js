import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: SPACING.Large * 3 * PixelRatio.getFontScale(),
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

  //
  iconContainer: { flexDirection: "row", alignItems: "center" },
  searchIcon: { alignItems: "center", justifyContent: "flex-end" },
  activeSearchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  //
  btnContainer: {
    height: "100%",
    alignItems: "center",
  },
});
