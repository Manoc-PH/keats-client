import { SPACING } from "@app/common/constants/styles";
import * as React from "react";
import { PixelRatio, StyleSheet, View } from "react-native";

function HorizontalProgressBar(props) {
  const { progress, foregroundColor, backgroundColor, thickness } = props;

  const inlineStyle = StyleSheet.create({
    foreground: {
      width: `${progress > 100 ? 100 : progress}%`,
      height: thickness || SPACING.Tiny * PixelRatio.getFontScale(),
      borderRadius: 4,
      backgroundColor: foregroundColor,
      position: "absolute",
    },
    background: {
      width: "100%",
      height: thickness || SPACING.Tiny * PixelRatio.getFontScale(),
      borderRadius: 4,
      backgroundColor: backgroundColor,
      position: "absolute",
    },
  });
  return (
    <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
      <View style={inlineStyle.foreground} />
      <View style={inlineStyle.background} />
    </View>
  );
}

export default HorizontalProgressBar;
