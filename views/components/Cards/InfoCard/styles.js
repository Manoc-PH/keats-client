import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: SPACING.Tiny,
    marginVertical: SPACING.Tiny,
    borderWidth: 1,
    borderColor: themeColors.backgroundDark,
    backgroundColor: themeColors.background,
    borderRadius: SPACING.Regular,
    padding: SPACING.Tiny,
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: themeColors.backgroundDark,
    maxWidth: SPACING.Huge * 1.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SPACING.Regular - 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: SPACING.Small,
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    paddingHorizontal: SPACING.Regular,
  },
});
