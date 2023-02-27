import * as React from "react";
import { View } from "react-native";

function HorizontalProgressBar(props) {
  const { progress, foregroundColor, backgroundColor } = props;

  return (
    <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
      <View
        style={{
          width: `${progress}%`,
          height: 6,
          borderRadius: 4,
          backgroundColor: foregroundColor,
          position: "absolute",
        }}
      />
      <View
        style={{
          width: "100%",
          height: 6,
          borderRadius: 4,
          backgroundColor: backgroundColor,
          position: "absolute",
        }}
      />
    </View>
  );
}

export default HorizontalProgressBar;
