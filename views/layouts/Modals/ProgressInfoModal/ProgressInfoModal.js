import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

// Theme
import themeColors from "@app/common/theme";

// Store
import { actions } from "@app/core/store";

// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";

// Components
import { Body, Title2, Button } from "@app/views/components";

// styles
import styles from "./styles";

function ProgressInfoModal() {
  // Store Actions
  const { setIsProgressInfoModalVisible: sid } = actions;
  const dispatch = useDispatch();
  const setIsProgressInfoModalVisible = (value) => dispatch(sid(value));

  // Progress
  const notEnufProg = 50 * 0.01 * 2.7;
  const enufProg = 100 * 0.01 * 2.7;
  const tooMuchProg = 150 * 0.01 * 2.7;

  const colors = [
    themeColors.background,
    themeColors.primaryLight,
    themeColors.primary,
    themeColors.yellow,
    themeColors.red,
  ];
  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <Title2 style={styles.text}>What does the big blob mean?</Title2>
        <View style={styles.smallSpacer} />
        <Body style={styles.text}>
          By the end of the day, right before you go to sleep, this is what the
          blob means:
        </Body>
        <View style={styles.spacer} />

        <View style={styles.infoWrapper}>
          <View style={styles.blobContainer}>
            <LinearGradient
              style={styles.colorContainer}
              colors={colors}
              start={{ x: 1 - notEnufProg, y: 0 }}
              end={{ x: 6 - notEnufProg, y: 0 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Body>You have not eaten the amount needed for that day.</Body>
          </View>
        </View>

        <View style={styles.spacer} />

        <View style={styles.infoWrapper}>
          <View style={styles.blobContainer}>
            <LinearGradient
              style={styles.colorContainer}
              colors={colors}
              start={{ x: 1 - enufProg, y: 0 }}
              end={{ x: 6 - enufProg, y: 0 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Body>You have eaten the exact amount needed.</Body>
          </View>
        </View>

        <View style={styles.spacer} />

        <View style={styles.infoWrapper}>
          <View style={styles.blobContainer}>
            <LinearGradient
              style={styles.colorContainer}
              colors={colors}
              start={{ x: 1 - tooMuchProg, y: 0 }}
              end={{ x: 6 - tooMuchProg, y: 0 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Body>You have eaten more than the amount needed.</Body>
          </View>
        </View>

        <View style={styles.spacer} />
        <Button
          style={styles.btn}
          variant={BTN_VARIANTS.outlined}
          onPress={() => setIsProgressInfoModalVisible()}>
          Okay
        </Button>
      </View>
    </View>
  );
}

export default ProgressInfoModal;
