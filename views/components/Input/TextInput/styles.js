import { StyleSheet, Platform, StatusBar } from "react-native";

import { FONT_SIZES, SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  startIcon: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  startBtnContainer: { padding: SPACING.Small },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: SPACING.Tiny,
  },
  txtInput: {
    flex: 1,
    fontSize: FONT_SIZES.Medium,
    paddingVertical: SPACING.Small,
    paddingHorizontal: SPACING.Small,
  },
});
