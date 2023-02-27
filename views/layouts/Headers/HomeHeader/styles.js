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
    paddingHorizontal: SPACING.Medium,
  },
  navContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  titleContainer: {
    paddingVertical: SPACING.SmallMedium,
  },

  //
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    padding: SPACING.Small,
    alignItems: "center",
  },
  activeSearchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
    marginVertical: SPACING.Tiny + 1,
    marginRight: SPACING.Small,
  },
  //
  btnContainer: {
    padding: SPACING.SmallMedium,
  },
});
