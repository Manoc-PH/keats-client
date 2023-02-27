import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: SPACING.Huge,
  },
  rowWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: SPACING.Small,
  },
});
