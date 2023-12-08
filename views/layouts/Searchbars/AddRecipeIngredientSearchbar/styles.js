import { HEADER_SIZE, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: SPACING.Regular,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: themeColors.background,
    paddingTop: SPACING.Tiny,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  searchInputContainer: {
    flex: 1,
    marginRight: SPACING.Regular,
  },
  searchIcon: { alignItems: "center", justifyContent: "flex-end" },
});
