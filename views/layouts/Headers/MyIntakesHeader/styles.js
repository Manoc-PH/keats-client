import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
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
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
  },
  navContainer: {
    position: "absolute",
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  //
  titleContainer: { paddingVertical: SPACING.Regular },
  btnContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: SPACING.Large * -1,
    zIndex: ZINDEX.header + 1,
  },
});
