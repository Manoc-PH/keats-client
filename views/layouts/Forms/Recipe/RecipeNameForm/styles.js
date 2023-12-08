import { FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
    gap: SPACING.Medium,
  },
  container: {
    width: "100%",
    gap: SPACING.Small,
    justifyContent: "center",
  },
  rowWrapper: {
    gap: SPACING.Regular,
    flexDirection: "row",
  },
  rowContainer: {
    gap: SPACING.Small,
    flexDirection: "row",
  },
  input: {
    width: "auto",
    flex: 1,
  },
});
