import themeColors from "@app/common/theme";
import * as React from "react";
import { Text, View } from "react-native";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CircularProgressBar(props) {
  const { size, children, progress, foregroundColor, backgroundColor } = props;

  const sizeLocal = size || 170;
  const strokeWidth = sizeLocal * 0.07;
  const center = sizeLocal / 2;
  const radius = sizeLocal / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          position: "absolute",
          marginTop: sizeLocal / 2,
          marginLeft: sizeLocal / 2,
        }}>
        {children}
      </View>
      <Svg height={sizeLocal} width={sizeLocal} fill='none' {...props}>
        <G rotation={-90} filter='url(#filter0_d_0_1)' origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={backgroundColor || themeColors.backgroundLight}
          />
          <Circle
            stroke={foregroundColor || themeColors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (circumference * (progress || 0)) / 100
            }
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </G>
      </Svg>
    </View>
  );
}

export default CircularProgressBar;
