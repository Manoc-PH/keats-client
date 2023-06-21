import { StyleSheet } from "react-native";
import { SPACING } from "@app/common/constants/styles";

export const styles = StyleSheet.create({
  heightContentWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.Huge,
  },
  heightContentContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subtitle: {
    textAlign: "center",
  },
});
