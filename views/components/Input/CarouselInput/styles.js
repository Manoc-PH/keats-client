import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },

  // Card
  cardWrapper: {
    height: "100%",
    width: Dimensions.get("window").width - SPACING.Medium - SPACING.Medium,
  },
  cardContainer: {
    flex: 1,
    padding: SPACING.Medium,
  },
  card: { flex: 1 },
});
