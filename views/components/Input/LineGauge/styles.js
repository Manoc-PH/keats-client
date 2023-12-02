import { StyleSheet, Platform, StatusBar } from "react-native";

import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
export const styles = StyleSheet.create({
  container: {
    height: 55,
    width: GAUGE_WIDTH,
    backgroundColor: "#F9F9F9",
  },
  intervals: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: GAUGE_WIDTH / 2,
    marginHorizontal: -INTERVAL_WIDTH / 2,
  },
  intervalContainer: {
    width: INTERVAL_WIDTH,
    alignItems: "center",
  },
  interval: {
    width: 1,
    marginRight: -1,
    backgroundColor: "#979797",
  },
  intervalValue: {
    fontSize: 12,
    marginBottom: 3,
    fontFamily: "bold",
  },
  small: {
    height: 13,
  },
  medium: {
    height: 20,
  },
  large: {
    backgroundColor: "#4A4A4A",
    width: 2,
    height: 26,
  },
  centerline: {
    height: 54,
    width: 1,
    backgroundColor: "red",
    position: "absolute",
    left: GAUGE_WIDTH / 2,
    opacity: 0.6,
    top: 0,
    zIndex: -1,
  },
});
