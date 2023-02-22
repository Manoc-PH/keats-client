import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    justifyContent: "start",
  },
  container: {
    width: "100%",
    paddingTop: SPACING[4],
  },
});
