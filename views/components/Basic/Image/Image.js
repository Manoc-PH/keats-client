import { ImageIcon } from "@app/assets/icons";
import React from "react";
import { View, Image as ImageCom } from "react-native";

import { styles } from "./styles";

export default function Image(props) {
  // Destructure
  const { style, src } = props;

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      {src && <ImageCom src={src} style={styles.image} />}
      {!src && <ImageIcon />}
    </View>
  );
}
