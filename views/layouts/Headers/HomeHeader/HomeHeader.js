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

import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";

import { Button, Title1, Body, TextInput } from "@app/views/components";
import { SearchIcon, IntakeIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function HomeHeader() {
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
  const navigation = useNavigation();

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
  function openIntakesPage() {
    navigation.navigate("Home", { screen: "MyIntakes" });
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

  const inlineStyle = StyleSheet.create({
    btnContainer: {
      padding: isHomeSearchActive ? SPACING.Small : SPACING.Regular,
    },
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          {!isHomeSearchActive && (
            <View style={styles.titleContainer}>
              <Title1>KEATS</Title1>
            </View>
          )}
          {!isHomeSearchActive && (
            <View style={styles.iconContainer}>
              <Button
                style={{ ...styles.btnContainer, ...inlineStyle.btnContainer }}
                variant={BTN_VARIANTS.transparent}
                size={SIZES.Tiny}
                onPress={() => setIsSearchActive(true)}>
                <SearchIcon
                  height={22}
                  width={22}
                  style={styles.searchIcon}
                  color={themeColors.secondary}
                />
              </Button>
              <Button
                style={styles.btnContainer}
                variant={BTN_VARIANTS.transparent}
                size={SIZES.Tiny}
                onPress={openIntakesPage}>
                <IntakeIcon color={themeColors.secondary} />
              </Button>
            </View>
          )}
          {isHomeSearchActive && (
            <View style={styles.searchInputContainer}>
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder='Search for anything...'
                onStartIconPress={() => setIsSearchActive(true)}
                startIcon={
                  <SearchIcon
                    height={SPACING.Medium}
                    width={SPACING.Medium}
                    style={styles.searchIcon}
                    color={themeColors.secondary}
                  />
                }
              />
            </View>
          )}
          {isHomeSearchActive && (
            <Button
              style={styles.btnContainer}
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Tiny}
              onPress={handleCancel}>
              <Body>Cancel</Body>
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
