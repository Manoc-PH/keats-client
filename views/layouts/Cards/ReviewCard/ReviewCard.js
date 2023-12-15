import React from "react";
import { ImageIcon } from "@app/assets/icons";
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
import { View } from "react-native";

// Basic
import {
  InfoCard,
  TextSkeleton,
  Body,
  StarRating,
  SubHeadline2,
  Title3,
} from "@app/views/components";

import { styles } from "./styles";
import moment from "moment";

export default function ReviewCard(props) {
  // Destructure
  const {
    name,
    rating,
    description,
    date_created,
    thumbnail_url,
    isLoading,
    onPress,
    ...rest
  } = props;

  return (
    <InfoCard
      image_url={thumbnail_url}
      isLoading={isLoading}
      onPress={onPress}
      {...rest}
      content={
        <>
          {isLoading && (
            <View style={{ ...styles.wrapper, gap: SPACING.Tiny }}>
              <View style={styles.rowWrapper}>
                <View style={styles.rowContainer}>
                  <TextSkeleton
                    style={styles.loadingTitle}
                    fontSize={FONT_SIZES.Regular}
                  />
                  <StarRating />
                </View>
                <View style={styles.rowContainer}>
                  <TextSkeleton
                    style={styles.loadingTime}
                    fontSize={FONT_SIZES.Small}
                  />
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <TextSkeleton
                  style={styles.loadingBody}
                  fontSize={FONT_SIZES.Regular}
                />
              </View>
            </View>
          )}
          {!isLoading && (
            <View style={styles.wrapper}>
              <View style={styles.rowWrapper}>
                <View style={styles.rowContainer}>
                  <Title3>{name && name}</Title3>
                  <StarRating rating={rating} />
                </View>
                <View style={styles.rowContainer}>
                  <SubHeadline2>
                    {/* {date_created && moment(date_created).fromNow()} */}
                  </SubHeadline2>
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <Body>{description && description}</Body>
              </View>
            </View>
          )}
        </>
      }></InfoCard>
  );
}
