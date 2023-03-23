import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { PixelRatio, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { marginBottom: SPACING.Large },
  error: { color: themeColors.red, textAlign: "center" },
  sexContainer: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageButtonImageContainer: {
    padding: SPACING.Small,
  },
  numberWrapper: {
    width: "100%",
    height: SPACING.Large * 3 * PixelRatio.getFontScale(),
    backgroundColor: themeColors.red,
  },
  numberContainer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberContainer: {
    width: "30%",
    flex: 0,
  },
  heightWrapper: {
    height: "70%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  heightContentWrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.Huge,
  },
  heightContentContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  subtitle: {
    textAlign: "center",
  },
});
