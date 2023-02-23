import { FONT_SIZES, FONT_WEIGHTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Text } from "react-native";

export default function Caption1(props) {
  const { children, style } = props;
  const styles = {
    ...style,
    fontFamily: style?.fontWeight ? style.fontWeight : FONT_WEIGHTS.Regular,
    fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Small,
    color: style?.color ? style.color : themeColors.secondary,
  };
  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
}
