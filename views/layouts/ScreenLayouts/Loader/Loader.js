import React from "react";
import { ActivityIndicator, View } from "react-native";

import themeColors from "@app/common/theme";
import { styles } from "./styles";

export default function Loader() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size='large' color={themeColors.primary} />
    </View>
  );
}
