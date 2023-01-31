import { Text } from "react-native";

export default function Txt(props) {
  const { children } = props;
  return <Text {...props}>{children}</Text>;
}
