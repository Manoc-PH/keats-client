import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

// Themes
import themeColors from "@app/common/theme";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CircleBar(props) {
  const { size, progress, foregroundColor, backgroundColor, children } = props;

  // Advanced
  const sizeLocal = size || 50;
  const strokeWidth = sizeLocal * 0.12;
  const center = sizeLocal / 2;
  const radius = sizeLocal / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const inlineStyle = StyleSheet.create({
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    container: {
      position: "absolute",
    },
  });
  return (
    <View style={inlineStyle.wrapper}>
      <View style={inlineStyle.container}>{children}</View>
      <Svg height={sizeLocal} width={sizeLocal} fill='none' {...props}>
        <G rotation={270} filter='url(#filter0_d_0_1)' origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={backgroundColor || themeColors.backgroundLight}
            strokeDasharray={circumference}
            strokeDashoffset={circumference / 100}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <Circle
            stroke={foregroundColor || themeColors.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference -
              (circumference * ((progress > 100 ? 100 : progress) || 0)) / 100
            }
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <Circle
            stroke={themeColors.yellow}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference -
              (circumference *
                70 *
                ((progress > 100 && progress < 151
                  ? progress - 100
                  : progress > 151 && 100) || 0)) /
                100
            }
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <Circle
            stroke={themeColors.red}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference -
              (circumference *
                70 *
                ((progress > 150 && progress < 201
                  ? progress - 150
                  : progress > 200 && 100) || 0)) /
                100
            }
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </G>
      </Svg>
    </View>
  );
}

export default CircleBar;
