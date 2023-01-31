import { FONT_WEIGHTS } from "@app/common/constants/styles";
import { Text } from "react-native";

export default function Txt(props) {
  const { children, style } = props;
  const styles = {
    ...style,
    fontFamily: style.fontWeight ? style.fontWeight : FONT_WEIGHTS.Regular,
  };
  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
}
