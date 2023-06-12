import React from "react";
import { ImageIcon } from "@app/assets/icons";
import { FONT_SIZES } from "@app/common/constants/styles";
import { Image, Pressable, View } from "react-native";

// Basic
import Caption1 from "../../Basic/Texts/Caption1";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";
import TextSkeleton from "../../Skeleton/TextSkeleton";

import { styles } from "./styles";

export default function SearchResultCard(props) {
  // Destructure
  const { title, subtitle, thumbnail_link, isLoading, onPress, ...rest } =
    props;

  function handlePress() {
    if (onPress) onPress();
    console.log("Pressed");
  }

  return (
    <Pressable onPress={handlePress} style={styles.wrapper} {...rest}>
      {!isLoading && (
        <View style={styles.imageContainer}>
          {!thumbnail_link && <ImageIcon width={20} />}
          {thumbnail_link && (
            <Image style={styles.image} source={{ uri: thumbnail_link }} />
          )}
        </View>
      )}
      {isLoading && <View style={styles.imageContainer} />}

      <View style={styles.nameContainer}>
        {isLoading && (
          <View style={styles.subHeadlineSkeleton}>
            <TextSkeleton
              style={styles.skeleton}
              fontSize={FONT_SIZES.Medium}
            />
            <TextSkeleton fontSize={FONT_SIZES.Small} />
          </View>
        )}
        {!isLoading && (
          <View>
            <SubHeadline1
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.title}>
              {title}
            </SubHeadline1>
            <Caption1 style={styles.subtitle}>{subtitle || ""}</Caption1>
          </View>
        )}
      </View>
    </Pressable>
  );
}
