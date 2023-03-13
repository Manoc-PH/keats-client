import React from "react";
import { ImageIcon } from "@app/assets/icons";
import { FONT_SIZES } from "@app/common/constants/styles";
import { Image, Pressable, View } from "react-native";

// Basic
import Caption1 from "../../Basic/Texts/Caption1";
import Caption2 from "../../Basic/Texts/Caption2";
import TextSkeleton from "../../Skeleton/TextSkeleton";

import { styles } from "./styles";
import themeColors from "@app/common/theme";

export default function FoodCard(props) {
  // Destructure
  const { name, name_ph, name_brand, id, thumbnail_link, isLoading, onPress } =
    props;

  function handlePress() {
    if (onPress) onPress();
  }
  return (
    <View style={styles.wrapper}>
      {!isLoading && (
        <Pressable onPress={handlePress} style={styles.imageContainer}>
          {!thumbnail_link && <ImageIcon width={20} />}
          {thumbnail_link && (
            <Image style={styles.image} source={{ uri: thumbnail_link }} />
          )}
        </Pressable>
      )}
      {isLoading && <View style={styles.imageContainer} />}

      <View style={styles.nameContainer}>
        {isLoading && (
          <View style={styles.titleSkeleton}>
            <TextSkeleton
              style={styles.skeleton}
              fontSize={FONT_SIZES.Medium}
            />
          </View>
        )}
        {isLoading && (
          <View style={styles.subHeadlineSkeleton}>
            <TextSkeleton fontSize={FONT_SIZES.Small} />
          </View>
        )}
        {!isLoading && (
          <Pressable onPress={handlePress}>
            <Caption1 style={styles.title}>
              {name}
              {name_ph && ` - ${name_ph}`}
            </Caption1>
          </Pressable>
        )}
        {!isLoading && (
          <Pressable onPress={handlePress}>
            <Caption2 style={styles.subtitle}>{name_brand}</Caption2>
          </Pressable>
        )}
      </View>
    </View>
  );
}
