import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: { width: "100%", marginTop: SPACING.Large },
  container: { width: "100%" },
  rowContainer: { flexDirection: "row", justifyContent: "space-between" },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: {
    height: "100%",
    marginTop: SPACING.Small,
  },
});
