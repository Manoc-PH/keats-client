import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";

export default function ScrollPage(props) {
  const { children, style, ...rest } = props;
  return (
    <ScrollView
      style={{ ...styles.wrapper, ...style }}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      overScrollMode='never'
      {...rest}>
      {children}
    </ScrollView>
  );
}
