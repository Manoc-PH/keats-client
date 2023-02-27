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
    flexDirection: "row-reverse",
  },
  rowContainer: {
    height: "100%",
    flex: 1,
    marginRight: SPACING.Tiny,
  },
  colContainer: {
    width: "100%",
    marginBottom: SPACING.Tiny,
  },
  btn: {
    height: 11,
    width: 11,
    borderRadius: 3,
    backgroundColor: themeColors.backgroundLight,
    marginBottom: SPACING.Tiny,
  },
});
