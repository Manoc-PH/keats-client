import React from "react";
import { View } from "react-native";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Basic
import { InfoCard, TextSkeleton, Body } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeInstructionCard(props) {
  // Destructure
  const { description, order, isLoading, onPress, ...rest } = props;

  return (
    <InfoCard
      isLoading={isLoading}
      onPress={onPress}
      {...rest}
      hideImage
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
                  <View style={styles.orderContainer}>
                    <Body>{order && order}</Body>
                  </View>
                </View>
                <View style={styles.rowContainer}>
                  <Body>{description && description}</Body>
                </View>
              </View>
            </View>
          )}
        </>
      }></InfoCard>
  );
}
