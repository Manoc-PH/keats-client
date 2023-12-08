import React, { useEffect, useState } from "react";
import { View } from "react-native";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Basic
import { InfoCard, TextSkeleton, Body, TextInput } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeInstructionCard(props) {
  // Destructure
  const {
    description,
    order,
    isLoading,
    onPress,
    editable,
    onChange,
    ...rest
  } = props;

  const [text, setText] = useState(description);

  useEffect(() => {
    if (editable) onChange(text);
  }, [text]);
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
          {!isLoading && !editable && (
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
          {editable && (
            <View style={styles.wrapper}>
              <View style={styles.rowWrapper}>
                <View style={styles.rowContainer}>
                  <View style={styles.orderContainer}>
                    <Body>{order && order}</Body>
                  </View>
                </View>
                <View style={styles.editableRowContainer}>
                  <TextInput
                    wrapperStyle={styles.editableText}
                    multiline
                    value={text}
                    onChangeText={setText}
                  />
                </View>
              </View>
            </View>
          )}
        </>
      }></InfoCard>
  );
}
