import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: themeColors.background,
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  titleContainer: {
    paddingVertical: 10,
  },

  //
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    padding: 10,
    alignItems: "center",
  },
  activeSearchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  //
  btnContainer: {
    padding: 8,
  },
});
