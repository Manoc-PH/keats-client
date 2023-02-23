import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Text } from "react-native";

export default function SubHeadline1(props) {
  const { children, style } = props;
  const styles = {
    ...style,
    fontFamily: style?.fontWeight ? style.fontWeight : FONT_WEIGHTS.Medium,
    fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Regular,
    color: style?.color ? style.color : themeColors.secondaryLight,
  };
  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
}
