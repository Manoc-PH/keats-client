import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function Boilerplate(props) {
  // Destructure
  const { example } = props;

  return <View style={styles.boilerplate}>{example}</View>;
}
