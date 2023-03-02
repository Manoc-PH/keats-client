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
    alignSelf: "stretch",
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  container: {
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
  inputContainer: {
    flex: 1,
  },
  txtInput: {
    fontSize: FONT_SIZES.Medium,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.Regular,
  },
});
