import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
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

  const CardPaddingSizeMapping = {
    Small: 10,
    Regular: 15,
  };
  const CardRadiusSizeMapping = {
    Small: 7,
    Regular: 10,
  };
  const styles = StyleSheet.create({
    primary: {
      width: "100%",
      flexDirection: "row",
      padding: size
        ? CardPaddingSizeMapping[size]
        : CardPaddingSizeMapping.Regular,
      borderRadius: size
        ? CardRadiusSizeMapping[size]
        : CardRadiusSizeMapping.Regular,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      color: color || themeColors.background,
      backgroundColor: backgroundColor || themeColors.primary,
    },
    outlined: {
      width: "100%",
      flexDirection: "row",
      padding: size
        ? CardPaddingSizeMapping[size]
        : CardPaddingSizeMapping.Regular,
      borderRadius: size
        ? CardRadiusSizeMapping[size]
        : CardRadiusSizeMapping.Regular,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      backgroundColor: backgroundColor || themeColors.background,
      color: color || themeColors.secondary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundLight,
    },
    transparent: {
      width: "100%",
      flexDirection: "row",
      padding: size
        ? CardPaddingSizeMapping[size]
        : CardPaddingSizeMapping.Regular,
      borderRadius: size
        ? CardRadiusSizeMapping[size]
        : CardRadiusSizeMapping.Regular,
      fontSize: size ? FONT_SIZES[size] : FONT_SIZES.Regular,
      fontWeight: FONT_WEIGHTS.SemiBold,
      backgroundColor: backgroundColor || `${themeColors.background}00`,
      color: color || themeColors.secondary,
      borderWidth: 1,
      borderColor: borderColor || themeColors.backgroundLight,
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
