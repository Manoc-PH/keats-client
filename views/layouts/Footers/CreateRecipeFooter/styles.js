import {
  FONT_SIZES,
  FONT_FAMILY,
  SPACING,
  ZINDEX,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
    borderTopColor: themeColors.backgroundDark,
    borderTopWidth: 1,
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Small,
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    gap: SPACING.Medium,
    justifyContent: "space-between",
  },
  btn: { flex: 1 },
  btnLiked: { backgroundColor: themeColors.red, color: themeColors.background },
  btnNotLiked: {
    backgroundColor: themeColors.background,
    color: themeColors.red,
  },
});
