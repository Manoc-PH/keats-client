import { useRef } from "react";
import { Animated, StyleSheet, Pressable } from "react-native";

import { FONT_SIZES, FONT_FAMILY, SPACING } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

import Txt from "../Txt";

export default function CircleButton(props) {
  const {
    style,
    variant,
    size,
    backgroundColor,
    borderColor,
    color,
    children,
    endIcon,
    icon,
    ...rest
  } = props;

  const styles = StyleSheet.create({
    defaults: {
      // flexDirection: "row",
      // justifyContent: "center",
      // alignItems: "center",
      paddingHorizontal: size ? SPACING[size] * 1.8 : SPACING.Regular * 1.8,
      paddingVertical: size ? SPACING[size] * 1.8 : SPACING.Regular * 1.8,
      borderRadius: 300,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontFamily: FONT_FAMILY.SemiBold,
      justifyContent: "center",
      alignItems: "center",
    },
    primary: {
      color: color || themeColors.background,
      backgroundColor: backgroundColor || themeColors.primary,
    },
    outlined: {
      backgroundColor: backgroundColor || themeColors.background,
      color: color || themeColors.primary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundDark,
    },
    transparent: {
      backgroundColor: backgroundColor || `${themeColors.background}00`,
      color: color || themeColors.secondary,
      borderWidth: 0,
    },
  });

  const currentStyle = styles[variant] || styles.primary;

  const buttonScale = useRef(new Animated.Value(1)).current;
  const onPressIn = () =>
    Animated.timing(buttonScale, {
      toValue: 0.8,
      useNativeDriver: true,
      duration: 100,
    }).start();
  const onPressOut = () =>
    Animated.timing(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
      duration: 100,
      delay: 0,
    }).start();

  return (
    <Pressable {...rest} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={{
          ...styles.defaults,
          ...currentStyle,
          ...style,
          transform: [{ scale: buttonScale }],
        }}>
        {icon && icon}
        {children && (
          <Txt
            style={{
              fontSize: styles.defaults.fontSize,
              fontFamily: styles.defaults.fontFamily,
              color: currentStyle.color,
              marginRight: endIcon ? SPACING.Small : 0,
            }}>
            {children}
          </Txt>
        )}
        {endIcon && endIcon}
      </Animated.View>
    </Pressable>
  );
}
