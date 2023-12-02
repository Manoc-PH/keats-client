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
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.Regular,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  spacer: { width: SPACING.Small },
});
