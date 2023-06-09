import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function PageDivider(props) {
  return (
    <View {...props}>
      <View style={styles.wrapper}></View>
    </View>
  );
}
