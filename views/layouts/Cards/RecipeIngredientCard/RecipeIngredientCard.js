import React from "react";
import { View } from "react-native";
// Assets
import { ServingIcon, CalorieIcon } from "@app/assets/icons";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Basic
import {
  InfoCard,
  TextSkeleton,
  StarRating,
  SubHeadline2,
  Title3,
} from "@app/views/components";

import { styles } from "./styles";

export default function RecipeIngredientCard(props) {
  // Destructure
  const {
    name,
    name_owner,
    calories,
    amount,
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
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <TextSkeleton
                  style={styles.loadingBody}
                  fontSize={FONT_SIZES.Small}
                />
              </View>
            </View>
          )}
          {!isLoading && (
            <View style={styles.wrapper}>
              <View style={styles.rowWrapper}>
                <View style={styles.rowContainer}>
                  <Title3>{name && name}</Title3>
                </View>
              </View>
              <View style={styles.rowWrapper}>
                {calories > -1 && (
                  <View style={styles.rowContainer}>
                    <CalorieIcon />
                    <SubHeadline2>{calories} Kcal</SubHeadline2>
                  </View>
                )}
                {amount > -1 && (
                  <View style={styles.rowContainer}>
                    <ServingIcon />
                    <SubHeadline2>{amount} G</SubHeadline2>
                  </View>
                )}
                {name_owner && (
                  <View style={styles.rowContainer}>
                    <SubHeadline2>{name_owner}</SubHeadline2>
                  </View>
                )}
              </View>
            </View>
          )}
        </>
      }></InfoCard>
  );
}
