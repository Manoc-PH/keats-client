import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },
  rowWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: SPACING.Small,
  },
  spacer: { width: "100%", marginTop: SPACING.Regular },
  btn: { alignSelf: "flex-start" },
});
