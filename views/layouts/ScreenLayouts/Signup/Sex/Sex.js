import React from "react";
import { View } from "react-native";
// Theme
import themeColors from "@app/common/theme";
// Assets
import { MaleSvg, FemaleSvg } from "@app/assets/imageSvg";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
import { SEX } from "@app/common/constants/options";
// Components
import { ImageButton } from "@app/views/components";

import { styles } from "./styles";

export default function Sex(props) {
  const { sex, setSex } = props;
  return (
    <View style={styles.sexContainer}>
      <ImageButton
        variant={BTN_VARIANTS.outlined}
        color={
          sex === SEX.male ? themeColors.primary : themeColors.secondaryLight
        }
        style={{
          borderColor:
            sex === SEX.male
              ? themeColors.primary
              : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex(SEX.male);
        }}
        image={
          <View style={styles.imageButtonImageContainer}>
            <MaleSvg />
          </View>
        }>
        Male
      </ImageButton>
      <ImageButton
        variant={BTN_VARIANTS.outlined}
        color={
          sex === SEX.female ? themeColors.primary : themeColors.secondaryLight
        }
        style={{
          borderColor:
            sex === SEX.female
              ? themeColors.primary
              : themeColors.backgroundLight,
        }}
        onPress={() => {
          setSex(SEX.female);
        }}
        image={
          <View style={styles.imageButtonImageContainer}>
            <FemaleSvg />
          </View>
        }>
        Female
      </ImageButton>
    </View>
  );
}
