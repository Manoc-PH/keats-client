import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    height: SPACING.Large * 3 * PixelRatio.getFontScale(),
    width: "100%",
    backgroundColor: themeColors.background,
    borderBottomColor: themeColors.backgroundLight,
    borderBottomWidth: 1,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    paddingHorizontal: SPACING.Medium,
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  //
  titleContainer: { paddingVertical: SPACING.Regular },

  //
  searchIcon: { alignItems: "center", justifyContent: "center" },
  //
  btnContainer: {
    position: "absolute",
    left: 0,
    height: "100%",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: SPACING.Regular,
    paddingVertical: SPACING.Regular,
  },
});
