import { StyleSheet, Platform, StatusBar } from "react-native";

import {
  FONT_SIZES,
  FONT_FAMILY,
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
    backgroundColor: themeColors.backgroundLight,
    borderRadius: SPACING.Regular,
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  inputContainer: {
    flex: 1,
  },
  txtInput: {
    fontSize: FONT_SIZES.Medium,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.Regular,
  },
});
