import { SPACING } from "@app/common/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: SPACING.Tiny,
  },
  editableWrapper: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: SPACING.Regular,
  },
});
