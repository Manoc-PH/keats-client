import { StyleSheet, Platform, StatusBar } from "react-native";

import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
const width = SPACING.Regular * 3 + SPACING.Regular * 4 + SPACING.Huge;
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
  },
  // LABEL
  labelContainer: {
    paddingVertical: SPACING.Small,
    marginTop: SPACING.Tiny,
  },
  // CONTENT
  itemContainer: {
    padding: SPACING.Small,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
    marginHorizontal: -2,
    width: width,
    height: FONT_SIZES.Huge + SPACING.Small * 2,
  },
  item: { flex: 1, flexDirection: "row", justifyContent: "center" },
  itemSpacingLeft: {
    height: "30%",
    borderColor: themeColors.secondaryLight,
    borderLeftWidth: 1,
    marginRight: SPACING.Regular,
  },
  itemSpacingRight: {
    height: "30%",
    borderColor: themeColors.secondaryLight,
    borderLeftWidth: 1,
    marginLeft: SPACING.Regular,
  },
});
