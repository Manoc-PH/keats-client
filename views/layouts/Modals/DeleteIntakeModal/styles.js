import { RADIUS, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  modalWrapper: {
    padding: SPACING.Regular,
    width: "100%",
  },
  modalContainer: {
    borderRadius: RADIUS.Large,
    padding: SPACING.Large,
    backgroundColor: themeColors.background,
    alignItems: "center",
  },
  spacer: { paddingBottom: SPACING.Large },
  smallSpacer: { paddingBottom: SPACING.Regular },
  text: { textAlign: "center" },
  errorMsg: { textAlign: "center", color: themeColors.red },
  btn: { width: "100%" },
});
export default styles;
