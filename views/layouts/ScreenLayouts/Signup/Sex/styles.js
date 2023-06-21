import { SPACING } from "@app/common/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sexContainer: {
    padding: SPACING.Medium,
    width: "100%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageButtonImageContainer: {
    padding: SPACING.Small,
  },
});
