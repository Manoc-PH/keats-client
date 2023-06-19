import { StyleSheet } from "react-native";
import { SPACING, ZINDEX } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: { marginBottom: SPACING.Tiny },
  loadingContainer: { width: "70%", marginBottom: SPACING.Small },
  smallLoadingContainer: { width: "90%", marginBottom: SPACING.Small },
  skeleton: { borderRadius: SPACING.Regular - 2, width: "100%" },
  smallSkeleton: { borderRadius: SPACING.Tiny + 1, width: "100%" },
  ghostTitle: { height: 0 },
  addBtnContainer: {
    position: "absolute",
    top: "220%",
    zIndex: ZINDEX.basicComponent,
    elevation: ZINDEX.basicComponent,
    shadowColor: "#00000000",
  },
  addSimpleBtnContainer: {
    zIndex: ZINDEX.basicComponent,
    elevation: ZINDEX.basicComponent,
    shadowColor: "#00000000",
  },
});
