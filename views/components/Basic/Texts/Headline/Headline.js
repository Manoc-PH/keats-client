import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Text } from "react-native";

export default function Headline(props) {
  const { children, style } = props;
  const styles = StyleSheet.create({
    main: {
      ...style,
      fontFamily: style?.fontWeight ? style.fontWeight : FONT_WEIGHTS.Medium,
      fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Medium,
      color: style?.color ? style.color : themeColors.secondary,
    },
  });
  return (
    <Text {...props} style={styles.main}>
      {children}
    </Text>
  );
}
