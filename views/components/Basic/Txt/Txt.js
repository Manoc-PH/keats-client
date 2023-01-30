import { Text } from "react-native";

import { styles } from "./styles";

export default function Txt(props) {
  return (
    <Text style={{ ...props.style, ...styles.container }} {...props}>
      {props.children}
    </Text>
  );
}
