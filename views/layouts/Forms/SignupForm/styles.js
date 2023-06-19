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
  contentTitle: {
    padding: SPACING.Medium,
    position: "absolute",
    top: SPACING.Regular,
  },
  itemWrapper: { padding: SPACING.Medium, width: "100%" },
  title: { marginBottom: SPACING.Large },
  error: { color: themeColors.red, textAlign: "center" },
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
  heightWrapper: {
    padding: SPACING.Medium,
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
