import * as React from "react";
import { StyleSheet, View } from "react-native";

function HorizontalProgressBar(props) {
  const { progress, foregroundColor, backgroundColor, thickness } = props;

  const inlineStyle = StyleSheet.create({
    foreground: {
      width: `${progress}%`,
      height: thickness || 4,
      borderRadius: 4,
      backgroundColor: foregroundColor,
      position: "absolute",
    },
    background: {
      width: "100%",
      height: thickness || 4,
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
