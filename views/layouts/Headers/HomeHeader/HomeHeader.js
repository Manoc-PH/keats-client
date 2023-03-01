import { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import { Button, Title1, Body, TextInput } from "@app/views/components";
import { SearchIcon, IntakeIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function HomeHeader({ navigation }) {
  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  // Store Actions
  const { setIsHomeSearchActive } = actions;
  const dispatch = useDispatch();
  const setIsSearchActive = (value) => {
    dispatch(setIsHomeSearchActive(value));
    if (value === true) navigation.navigate("Home", { screen: "HomeSearch" });
    else navigation.navigate("Home", { screen: "HomeDefault" });
  };

  const [text, onChangeText] = useState("");

  const inlineStyle = StyleSheet.create({
    btnContainer: {
      padding: isHomeSearchActive ? SPACING.Small : SPACING.SmallMedium,
    },
    txtInput: {
      flex: 1,
      fontSize: FONT_SIZES.Medium,
      paddingVertical: SPACING.Small,
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
                onPress={() => alert("Pressed!")}>
                <IntakeIcon color={themeColors.secondary} />
              </Button>
            </View>
          )}
          {isHomeSearchActive && (
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder='Search for anything...'
              onStartIconPress={() => setIsSearchActive(true)}
              startIcon={
                <SearchIcon
                  height={SPACING.Medium}
                  width={SPACING.Medium}
                  style={styles.startIcon}
                  color={themeColors.secondary}
                />
              }
            />
          )}
          {isHomeSearchActive && (
            <Button
              style={styles.btnContainer}
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Tiny}
              onPress={() => setIsSearchActive(false)}>
              <Body>Cancel</Body>
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
