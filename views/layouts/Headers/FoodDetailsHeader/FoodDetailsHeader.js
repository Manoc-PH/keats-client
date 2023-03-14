import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Store
import { actions } from "@app/core/store";

// Utils
import useDebounce from "@app/common/utils/debounce";

// Hooks
import { useGetSearchFood } from "@app/core/hooks/api";

// Constants
import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import { Button, Title3, Body, TextInput } from "@app/views/components";
import { ArrowLeftIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function FoodDetailsHeader() {
  // Hooks
  const navigation = useNavigation();

  // Store State
  const { foodDetails } = useSelector((state) => state.food);

  // Store Actions
  const {
    setSelectedFoodID: setselectedfoodid,
    setFoodDetails: setfooddetails,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodID = (v) => dispatch(setselectedfoodid(v));
  const setFoodDetails = (v) => dispatch(setfooddetails(v));

  // Functions
  function handleBack() {
    setSelectedFoodID();
    setFoodDetails();
    navigation.navigate("Home", { screen: "HomeDefault" });
  }

  // UseEffects

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            variant={BTN_VARIANTS.transparent}
            size={SIZES.Tiny}
            onPress={handleBack}>
            <ArrowLeftIcon
              height={22}
              width={22}
              style={styles.searchIcon}
              color={themeColors.secondary}
            />
          </Button>
        </View>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <Title3>Food Details</Title3>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
