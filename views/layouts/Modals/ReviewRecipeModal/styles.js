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
    gap: SPACING.Medium,
  },
  rowContainer: {
    flexDirection: "row",
    gap: SPACING.Regular,
  },
  text: { textAlign: "center" },
  errorMsg: { textAlign: "center", color: themeColors.red },
  // TODO FIX THIS WHAT THE HECK IS THIS BUTTON DOING
  btn: { flex: 1, height: SPACING.Large * 2 + 1 },
});
export default styles;
