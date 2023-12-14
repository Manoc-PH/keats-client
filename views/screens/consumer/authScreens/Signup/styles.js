import { StyleSheet } from "react-native";
import { HEADER_SIZE, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: themeColors.background,
  },
  bottomWrapper: {
    width: "100%",
    justifyContent: "space-between",
    padding: SPACING.Medium,
  },
  bottomContentWrapper: {
    marginTop: SPACING.Large,
    width: "100%",
    height: HEADER_SIZE / 1.5,
    flexDirection: "row",
    gap: SPACING.Medium,
    justifyContent: "space-between",
  },
  btn: { flex: 1 },
});
