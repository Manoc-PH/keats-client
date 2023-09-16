import { SPACING } from "@app/common/constants/styles";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    marginBottom: SPACING.Huge,
    paddingVertical: SPACING.Medium,
  },
  loadingWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
  container: {
    paddingHorizontal: SPACING.Medium,
    paddingVertical: SPACING.Huge,
  },
  spacer: { height: SPACING.Huge, width: "100%" },
});
