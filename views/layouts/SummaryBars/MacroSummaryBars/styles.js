import { StyleSheet } from "react-native";
import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { fontSize: FONT_SIZES.ExtraLarge },
  subtitle: {
    textTransform: "capitalize",
    fontWeight: FONT_WEIGHTS.Light,
  },
  // TODO USE GAP WHEN IT FINALLY WORKS
  rowContainer: { flex: 1 },
  valueContainer: { flexDirection: "row", alignItems: "flex-end" },
  barContainer: { paddingTop: 5, paddingBottom: 10 },
});
