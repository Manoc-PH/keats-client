import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
  },
  container: {
    width: "100%",
    paddingHorizontal: SPACING.Medium,
    alignItems: "stretch",
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  titleContainer: { paddingVertical: SPACING.Regular },

  //
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: SPACING.Huge * -1,
  },
});
