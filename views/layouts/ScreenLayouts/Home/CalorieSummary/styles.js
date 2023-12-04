import { SPACING } from "@app/common/constants/styles";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { justifyContent: "flex-start", flex: 1 },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: { marginBottom: SPACING.ExtraLarge },
  skeleton: {
    width: Dimensions.get("window").width * 0.6,
  },
});
