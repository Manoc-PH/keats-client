import { SPACING } from "@app/common/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    bottom: SPACING.Regular,
    paddingHorizontal: SPACING.Large,
  },
  searchInputContainer: { flex: 1, marginRight: SPACING.Regular },
  searchIcon: { alignItems: "center", justifyContent: "flex-end" },
});
