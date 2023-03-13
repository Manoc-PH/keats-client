import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.modal,
    elevation: ZINDEX.modal,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 138,
    position: "absolute",
    top: 0,
  },
  scrollContainer: { height: "100%", width: "100%" },
  container: {
    paddingBottom: SPACING.Large,
    paddingHorizontal: SPACING.Medium,
    marginBottom: SPACING.Regular,
  },
});
