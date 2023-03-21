import themeColors from "@app/common/theme";
import { Pressable, Text, View } from "react-native";

import { StyleSheet } from "react-native";

export default function Card(props) {
  const { children, style, size } = props;
  const CardPaddingSizeMapping = {
    Small: 10,
    Regular: 15,
  };
  const CardRadiusSizeMapping = {
    Small: 7,
    Regular: 10,
  };

  const styles = StyleSheet.create({
    rowContainer: {
      width: "100%",
      flexDirection: "row",
      backgroundColor: themeColors.background,
      borderWidth: 1,
      borderColor: themeColors.backgroundLight,
      padding: size
        ? CardPaddingSizeMapping[size]
        : CardPaddingSizeMapping.Regular,
      borderRadius: size
        ? CardRadiusSizeMapping[size]
        : CardRadiusSizeMapping.Regular,
      ...style,
    },
    colContainer: {},
  });
  return (
    <Pressable {...props} style={styles.rowContainer}>
      {children}
    </Pressable>
  );
}
