import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    maxWidth: "100%",
    flex: 0,
    backgroundColor: themeColors.background,
    zIndex: ZINDEX.header,
    elevation: ZINDEX.header,
    shadowColor: "#00000000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: SPACING.Medium,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //
  titleContainer: {
    paddingVertical: SPACING.SmallMedium,
  },

  //
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    padding: SPACING.Small,
    alignItems: "center",
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  activeSearchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: themeColors.backgroundLight,
    borderRadius: 50,
    paddingHorizontal: SPACING.Small,
    marginVertical: SPACING.Small - 1,
    marginRight: SPACING.Small,
  },
  //
  btnContainer: {
    padding: SPACING.SmallMedium,
  },
});
