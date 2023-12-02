import { FONT_SIZES, FONT_FAMILY } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Text } from "react-native";

export default function Caption2(props) {
  const { children, style } = props;
  const styles = StyleSheet.create({
    main: {
      ...style,
      fontFamily: style?.fontFamily ? style.fontFamily : FONT_FAMILY.Regular,
      fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Tiny,
      color: style?.color ? style.color : themeColors.secondary,
    },
  });
  return (
    <Text {...props} style={styles.main}>
      {children}
    </Text>
  );
}
