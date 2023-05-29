import { SPACING } from "@app/common/constants/styles";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%", justifyContent: "flex-start" },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  // TODO MAKE THIS RESPONSIVE WHEN THE SCREEN SIZE CHANGES
  itemContainer: { marginBottom: SPACING.Huge },
  skeleton: {
    width: Dimensions.get("window").width * 0.6,
  },
});
