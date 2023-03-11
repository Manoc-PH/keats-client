import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%", marginTop: SPACING.ExtraLarge },
  container: { width: "100%" },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.Tiny,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    height: "100%",
    marginTop: SPACING.Small,
  },
  subheadline: {
    color: themeColors.primary,
    marginRight: 5,
  },
  title: {
    textTransform: "capitalize",
  },
  skeleton: {
    marginTop: SPACING.Small,
  },
});
