import React from "react";
import { ImageIcon } from "@app/assets/icons";
import { FONT_SIZES } from "@app/common/constants/styles";
import { Image, Pressable, View } from "react-native";

import { styles } from "./styles";

export default function InfoCard(props) {
  // Destructure
  const { image_url, isLoading, onPress, content, ...rest } = props;

  function handlePress() {
    if (onPress) onPress();
  }

  return (
    <Pressable onPress={handlePress} style={styles.wrapper} {...rest}>
      {!isLoading && (
        <View style={styles.imageContainer}>
          {!image_url && <ImageIcon width={20} />}
          {image_url && (
            <Image style={styles.image} source={{ uri: image_url }} />
          )}
        </View>
      )}
      {isLoading && <View style={styles.imageContainer} />}

      <View style={styles.nameContainer}>{content}</View>
    </Pressable>
  );
}
