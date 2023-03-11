import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, PixelRatio } from "react-native";

import LinearGradient from "react-native-linear-gradient";

import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

const START_HORIZONTAL = { x: 0, y: 0.5 };
const END_HORIZONTAL = { x: 1, y: 0.5 };
const GRADIENT_COLORS = [
  themeColors.backgroundLight,
  themeColors.backgroundLight,
  `${themeColors.backgroundLight}50`,
  `${themeColors.backgroundLight}50`,
  themeColors.backgroundLight,
  themeColors.backgroundLight,
  themeColors.backgroundLight,
];
const GRADIENT_LOCATIONS = [0, 0.2, 0.4, 0.6, 0.8, 1, 1];
const MOVEMENT = GRADIENT_LOCATIONS[1] / 5;
const INTERVAL = 30;

let timeout = undefined;

export default function TextSkeleton(props) {
  // Destructure
  const { fontSize, style } = props;
  let [gradientOptions, setGradientOptions] = useState({
    colors: GRADIENT_COLORS,
    locations: GRADIENT_LOCATIONS,
    start: START_HORIZONTAL,
    end: END_HORIZONTAL,
  });
  const gradientOptionsRef = useRef(gradientOptions);
  gradientOptionsRef.current = gradientOptions;

  let infiniteRainbow = () => {
    if (gradientOptionsRef.current.locations[1] - MOVEMENT <= 0) {
      let gradientColors = [...gradientOptionsRef.current.colors];
      gradientColors.shift();
      gradientColors.push(gradientColors[1]);

      setGradientOptions({
        colors: gradientColors,
        locations: GRADIENT_LOCATIONS,
        start: START_HORIZONTAL,
        end: END_HORIZONTAL,
      });
    } else {
      let updatedLocations = gradientOptionsRef.current.locations.map(
        (item, index) => {
          if (index === gradientOptionsRef.current.locations.length - 1) {
            return 1;
          }

          return parseFloat(Math.max(0, item - MOVEMENT).toFixed(2));
        }
      );

      setGradientOptions({
        colors: [...gradientOptionsRef.current.colors],
        locations: updatedLocations,
        start: START_HORIZONTAL,
        end: END_HORIZONTAL,
      });
    }

    timeout = setTimeout(infiniteRainbow, INTERVAL);
  };

  const localStyles = StyleSheet.create({
    wrapper: {
      height: (fontSize || FONT_SIZES.Regular) * PixelRatio.getFontScale(),
    },
    container: {
      height: "100%",
      borderRadius: SPACING.Tiny,
    },
  });

  useEffect(() => {
    infiniteRainbow();
  }, []);
  return (
    <View style={localStyles.wrapper}>
      <LinearGradient
        style={{
          ...localStyles.container,
          ...style,
        }}
        colors={gradientOptions.colors}
        locations={gradientOptions.locations}
        start={gradientOptions.start}
        end={gradientOptions.end}
      />
    </View>
  );
}
