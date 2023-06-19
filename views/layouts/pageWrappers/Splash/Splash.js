import React from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
// Constants
import themeColors from "@app/common/theme";
// Assets
import { LogoIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function Splash() {
  const size = Dimensions.get("window").width / 5;
  return (
    <View style={styles.wrapper}>
      <LogoIcon height={size} width={size} />
      <View style={styles.spacer} />
      <ActivityIndicator size='large' color={themeColors.primary} />
    </View>
  );
}
