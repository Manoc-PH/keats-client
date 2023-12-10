import React from "react";
import { ImageIcon } from "@app/assets/icons";
import { FONT_SIZES } from "@app/common/constants/styles";
import { Image, Pressable, View } from "react-native";

// Basic
import {
  InfoCard,
  Caption1,
  SubHeadline1,
  TextSkeleton,
} from "@app/views/components";

import { styles } from "./styles";

export default function SearchResultCard(props) {
  // Destructure
  const { title, subtitle, thumbnail_url, isLoading, onPress, ...rest } = props;

  return (
    <InfoCard
      image_url={thumbnail_url}
      isLoading={isLoading}
      onPress={onPress}
      {...rest}
      content={
        <>
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
              {subtitle && (
                <Caption1 style={styles.subtitle}>{subtitle || ""}</Caption1>
              )}
            </View>
          )}
        </>
      }></InfoCard>
  );
}
