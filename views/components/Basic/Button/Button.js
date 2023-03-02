import { useRef } from "react";
import { Animated, StyleSheet, Pressable } from "react-native";

import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

import Txt from "../Txt";

export default function Button(props) {
  const {
    style,
    variant,
    size,
    backgroundColor,
    borderColor,
    color,
    children,
  } = props;

  const styles = StyleSheet.create({
    defaults: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
      borderRadius: SPACING.Huge,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
    },
    primary: {
      color: color || themeColors.background,
      backgroundColor: backgroundColor || themeColors.primary,
    },
    outlined: {
      backgroundColor: backgroundColor || themeColors.background,
      color: color || themeColors.secondary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundLight,
    },
    transparent: {
      backgroundColor: backgroundColor || `${themeColors.background}00`,
      color: color || themeColors.secondary,
      borderWidth: 0,
    },
  });

  const currentStyle = styles[variant] || styles.primary;

  const buttonOpacity = useRef(new Animated.Value(1)).current;
  const onPressIn = () =>
    Animated.spring(buttonOpacity, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  const onPressOut = () =>
    Animated.spring(buttonOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();

  return (
    <Pressable {...props} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={{
          ...styles.defaults,
          ...currentStyle,
          ...style,
          opacity: buttonOpacity,
        }}>
        <Txt
          style={{
            fontSize: styles.defaults.fontSize,
            fontWeight: styles.defaults.fontWeight,
            color: currentStyle.color,
          }}>
          {children}
        </Txt>
      </Animated.View>
    </Pressable>
  );
}
