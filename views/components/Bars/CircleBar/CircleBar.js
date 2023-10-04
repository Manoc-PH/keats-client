import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

// Constants
import { SPACING } from "@app/common/constants/styles";

// Themes
import themeColors from "@app/common/theme";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CircleBar(props) {
  const { size, progress, foregroundColor, backgroundColor } = props;

  // Advanced
  const sizeLocal = size || 170;
  const strokeWidth = sizeLocal * 0.12;
  const center = sizeLocal / 2;
  const radius = sizeLocal / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const inlineStyle = StyleSheet.create({
    wrapper: { alignItems: "center", justifyContent: "center" },
    container: {
      position: "absolute",
      marginTop: sizeLocal / 2,
      marginLeft: sizeLocal / 2,
    },
  });

  // Cheat sheet
  // 0% = s:1 e:6
  // 30% = s:0 e:5
  // 70% = s:-1 e:4
  // 100% = s:-2 e:3
  // 130% = s:-3 e:2
  // 160% = s:-4 e:1
  // 200% = s:-5 e:0
  const simpleStyle = StyleSheet.create({
    wrapper: {
      height: sizeLocal,
      width: sizeLocal,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: themeColors.backgroundLight,
      borderRadius: sizeLocal,
    },
    container: {
      position: "absolute",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    colorContainer: {
      borderRadius: sizeLocal,
      position: "absolute",
      height: sizeLocal - SPACING.Large,
      width: sizeLocal - SPACING.Large,
    },
  });
  return (
    <View style={inlineStyle.wrapper}>
      <Svg height={sizeLocal} width={sizeLocal} fill='none' {...props}>
        <G rotation={145} filter='url(#filter0_d_0_1)' origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={backgroundColor || themeColors.backgroundLight}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - circumference / 100}
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
