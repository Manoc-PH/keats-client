import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Utils
import useDebounce from "@app/common/utils/debounce";

// Hooks
import { useGetSearchFood } from "@app/core/hooks/api";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import {
  Button,
  Title1,
  Body,
  TextInput,
  NumberInput,
} from "@app/views/components";
import { SearchIcon, IntakeIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function ConsumeFoodFooter() {
  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  // Store Actions
  const {
    setIsHomeSearchActive,
    setFoodSearchResults,
    setIsFoodSearchLoading,
  } = actions;
  const dispatch = useDispatch();
  const setFoodSearchLoading = (value) =>
    dispatch(setIsFoodSearchLoading(value));
  const setIsSearchActive = (value) => dispatch(setIsHomeSearchActive(value));
  const setFoodSearchRes = (value) => dispatch(setFoodSearchResults(value));

  // Hooks
  const {
    getSearchFood,
    getSearchFoodData,
    isGetSearchFoodSuccess,
    isGetSearchFoodLoading,
  } = useGetSearchFood();

  // Local State
  const [text, onChangeText] = useState("");

  // Functions
  function fetchFoodSearch() {
    if (text) getSearchFood(text);
  }
  function handleCancel() {
    setIsSearchActive(false);
    setFoodSearchRes();
    onChangeText("");
  }

  // Custom Hooks
  // TODO Switch loading state to true when typing
  useDebounce(fetchFoodSearch, [text], 400);

  // UseEffects
  useEffect(() => {
    if (isGetSearchFoodSuccess) setFoodSearchRes(getSearchFoodData);
  }, [getSearchFoodData]);
  useEffect(() => {
    setFoodSearchLoading(isGetSearchFoodLoading);
  }, [isGetSearchFoodLoading]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.searchInputContainer}>
            <NumberInput
              onChangeText={onChangeText}
              value={text}
              onStartIconPress={() => setIsSearchActive(true)}
            />
          </View>
          <Button
            style={styles.btnContainer}
            size={SIZES.Small}
            onPress={handleCancel}>
            Consume
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
