import { SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CircularProgressBar(props) {
  const {
    size,
    children,
    progress,
    foregroundColor,
    backgroundColor,
    isViewSimple,
  } = props;

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

  // Simple
  const simpleProgress = progress * 0.01 * 2.7;
  const colors = [
    themeColors.background,
    themeColors.primaryLight,
    themeColors.primary,
    themeColors.yellow,
    themeColors.red,
  ];
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
      {isViewSimple ? (
        <View style={simpleStyle.container}>
          <LinearGradient
            style={simpleStyle.colorContainer}
            colors={colors}
            start={{ x: 1 - simpleProgress, y: 0 }}
            end={{ x: 6 - simpleProgress, y: 0 }}
          />
          {children}
        </View>
      ) : (
        <View style={inlineStyle.container}>{children}</View>
      )}
      {isViewSimple ? (
        <View style={simpleStyle.wrapper}></View>
      ) : (
        <Svg height={sizeLocal} width={sizeLocal} fill='none' {...props}>
          <G rotation={145} filter='url(#filter0_d_0_1)' origin={center}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={backgroundColor || themeColors.backgroundLight}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * 70) / 100}
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
                (circumference *
                  0.7 *
                  ((progress > 100 ? 100 : progress) || 0)) /
                  100
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
                  0.7 *
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
                  0.7 *
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
      )}
    </View>
  );
}

export default CircularProgressBar;
