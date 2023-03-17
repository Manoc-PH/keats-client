import { StyleSheet, Platform, StatusBar } from "react-native";

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
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
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
