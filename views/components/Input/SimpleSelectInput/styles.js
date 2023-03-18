import { StyleSheet, Platform, StatusBar } from "react-native";

import {
  FONT_SIZES,
  FONT_WEIGHTS,
  RADIUS,
  SPACING,
  ZINDEX,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "stretch",
    justifyContent: "center",
    position: "relative",
    minWidth: SPACING.Huge,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: SPACING.Small,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  btn: {
    paddingVertical: SPACING.Small + 2,
    paddingHorizontal: 0,
  },
  // OPTIONS
  optionsContainer: {
    position: "absolute",
    bottom: 40,
    right: 0,
    paddingVertical: SPACING.Regular,
    paddingHorizontal: SPACING.Tiny,
    borderRadius: RADIUS.Regular,
    backgroundColor: themeColors.background,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
  },
  optionBtn: {
    justifyContent: "flex-start",
  },
});
