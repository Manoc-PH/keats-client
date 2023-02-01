import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%", marginTop: 30 },
  container: { width: "100%" },
  rowContainer: { flexDirection: "row", justifyContent: "space-between" },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    height: "100%",
    marginTop: 7,
  },
  title: {
    fontSize: FONT_SIZES.Large,
  },
  subTitle: {
    fontSize: FONT_SIZES.Small,
    marginBottom: 5,
    color: themeColors.secondaryLight,
    fontWeight: FONT_WEIGHTS.Medium,
  },
});
