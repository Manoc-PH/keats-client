import { FONT_SIZES, FONT_FAMILY } from "@app/common/constants/styles";
import { StyleSheet, Text } from "react-native";

export default function Txt(props) {
  const { children, style } = props;
  const styles = StyleSheet.create({
    main: {
      ...style,
      fontFamily: style?.fontFamily ? style.fontFamily : FONT_FAMILY.Regular,
      fontSize: style?.fontSize ? style.fontSize : FONT_SIZES.Regular,
    },
  });
  return (
    <Text {...props} style={styles.main}>
      {children}
    </Text>
  );
}
