import { StyleSheet, Platform, StatusBar, PixelRatio } from "react-native";

import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
  ZINDEX,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignSelf: "stretch",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: FONT_SIZES.Large * 2 * PixelRatio.getFontScale(),
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: SPACING.Regular,
    paddingLeft: SPACING.Tiny,
  },
  inputContainer: {
    flex: 1,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  txtInput: {
    fontSize: FONT_SIZES.Medium,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.Regular,
  },
  btn: {
    aspectRatio: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginRight: SPACING.Small,
  },
});
