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
  const { title, subtitle, thumbnail_link, isLoading, onPress } = props;

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

      <Pressable style={styles.nameContainer}>
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
          <Pressable onPress={handlePress}>
            <SubHeadline1 style={styles.title}>
              {title}{" "}
              <Caption1 style={styles.subtitle}>{subtitle || ""}</Caption1>
            </SubHeadline1>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
}
