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
    flex: 1,
    height: "100%",
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT

  startIcon: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: SPACING.Tiny,
  },
  txtInput: {
    flex: 1,
    fontSize: FONT_SIZES.Medium,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.Regular,
  },
});
