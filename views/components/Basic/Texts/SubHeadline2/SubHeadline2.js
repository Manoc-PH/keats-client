import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { StyleSheet, Text } from "react-native";

export default function SubHeadline2(props) {
  const { children, style } = props;
  const styles = StyleSheet.create({
    main: {
      ...style,
      fontFamily: style?.fontWeight ? style.fontWeight : FONT_WEIGHTS.Medium,
      fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Small,
      color: style?.color ? style.color : themeColors.secondaryLight,
    },
  });
  return (
    <Text {...props} style={styles.main}>
      {children}
    </Text>
  );
}
