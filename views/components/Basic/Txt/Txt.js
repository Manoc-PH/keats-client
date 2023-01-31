import { Text } from "react-native";

export default function Txt(props) {
  const { children, style } = props;
  const styles = {
    ...style,
  };
  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
}
