import {
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Text, Pressable, View } from "react-native";

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
    primary: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
      borderRadius: SPACING.Huge,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      color: color || themeColors.background,
      backgroundColor: backgroundColor || themeColors.primary,
    },
    outlined: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
      borderRadius: SPACING.Huge,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      backgroundColor: backgroundColor || themeColors.background,
      color: color || themeColors.secondary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundLight,
    },
    transparent: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: size ? SPACING[size] * 2 : SPACING.Regular * 2,
      paddingVertical: size ? SPACING[size] * 0.82 : SPACING.Regular * 0.82,
      borderRadius: SPACING.Huge,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      backgroundColor: backgroundColor || `${themeColors.background}00`,
      color: color || themeColors.secondary,
      borderWidth: 0,
    },
  });

  const currentStyle = styles[variant] || styles.primary;
  return (
    <Pressable {...props}>
      <View style={{ ...style, ...currentStyle }}>
        <Text
          style={{
            fontSize: currentStyle.fontSize,
            fontWeight: currentStyle.fontWeight,
            color: currentStyle.color,
          }}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}
