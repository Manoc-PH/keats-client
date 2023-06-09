import { SPACING } from "@app/common/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    position: "absolute",
    bottom: SPACING.Regular,
    paddingHorizontal: SPACING.Large,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: SPACING.Regular,
  },
  searchInputContainer: { flex: 1, marginRight: SPACING.Regular },
  searchIcon: { alignItems: "center", justifyContent: "flex-end" },
});