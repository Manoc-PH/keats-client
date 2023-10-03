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
    borderRadius: RADIUS.Regular,
    padding: SPACING.Regular,
    backgroundColor: themeColors.background,
  },
  spacer: {
    paddingBottom: SPACING.Regular,
  },
});
export default styles;
