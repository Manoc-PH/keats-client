import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 0,
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
  },
  container: {
    paddingHorizontal: SPACING[2],
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  titleContainer: {
    paddingVertical: SPACING[1.5],
  },

  //
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    padding: SPACING[1],
    alignItems: "center",
  },
  activeSearchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING[1],
    marginVertical: SPACING[0.5] + 1,
    marginRight: SPACING[1],
  },
  //
  btnContainer: {
    padding: SPACING[1.5],
  },
});
