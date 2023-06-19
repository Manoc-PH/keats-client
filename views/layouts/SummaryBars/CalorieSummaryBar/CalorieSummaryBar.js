import { Dimensions, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Theme
import themeColors from "@app/common/theme";

// Constants
import { BTN_VARIANTS, FONT_SIZES } from "@app/common/constants/styles";

import {
  CircleButton,
  CircularProgressBar,
  LargeTitle,
  SubHeadline2,
  TextSkeleton,
} from "@app/views/components";
import { PlusIcon } from "@app/assets/icons";
import { styles } from "./styles";

export default function CalorieSummaryBar(props) {
  const { calories, maxCalories, loading, isViewSimple } = props;

  // Hooks
  const navigation = useNavigation();

  const width = Math.floor(Dimensions.get("screen").width * 0.8);
  return (
    <View style={{ width: "100%" }}>
      <CircularProgressBar
        size={width}
        progress={(calories / maxCalories) * 100 || 0}
        foregroundColor={themeColors.primary}
        backgroundColor={themeColors.backgroundLight}
        isViewSimple={isViewSimple}>
        <View style={styles.container}>
          {!isViewSimple && (
            <>
              {loading ? (
                <View style={styles.loadingContainer}>
                  <TextSkeleton
                    fontSize={FONT_SIZES.Huge}
                    style={styles.skeleton}
                  />
                </View>
              ) : (
                <LargeTitle style={styles.title}>{calories || 0}</LargeTitle>
              )}
              {loading ? (
                <View style={styles.smallLoadingContainer}>
                  <TextSkeleton
                    fontSize={FONT_SIZES.Small}
                    style={styles.smallSkeleton}
                  />
                </View>
              ) : (
                <SubHeadline2>of {maxCalories || 0} Calories</SubHeadline2>
              )}
            </>
          )}
          <View
            style={
              isViewSimple
                ? styles.addSimpleBtnContainer
                : styles.addBtnContainer
            }>
            <CircleButton
              variant={BTN_VARIANTS.outlined}
              onPress={() => {
                navigation.navigate("Home", { screen: "AddIntake" });
              }}>
              <PlusIcon width={25} height={25} color={themeColors.primary} />
            </CircleButton>
          </View>
        </View>
      </CircularProgressBar>
    </View>
  );
}
