import themeColors from "@app/common/theme";
import React from "react";
import { ActivityIndicator, View } from "react-native";

import { styles } from "./styles";

export default function CircleLoader() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size='small' color={themeColors.primary} />
    </View>
  );
}
