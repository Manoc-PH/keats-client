import { SPACING, ZINDEX, HEADER_SIZE } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    height: HEADER_SIZE,
    width: "100%",
    backgroundColor: themeColors.background,
    borderBottomColor: themeColors.backgroundDark,
    borderBottomWidth: 1,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navContainer: {},

  //
  titleContainer: {
    paddingVertical: SPACING.Regular,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: ZINDEX.header + 1,
    width: SPACING.Huge * 2,
    padding: 0,
  },
});
