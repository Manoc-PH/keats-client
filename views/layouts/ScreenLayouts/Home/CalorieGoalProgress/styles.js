import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "start",
    paddingTop: SPACING[4],
  },
  rowWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: SPACING[1],
  },
});
