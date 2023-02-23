import { useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
} from "@app/common/constants/styles";

import { Button, Title1, Body } from "@app/views/components";
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

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          {!isHomeSearchActive && (
            <View style={styles.titleContainer}>
              <Title1>KEATS</Title1>
            </View>
          )}
          <View
            style={[
              styles.searchWrapper,
              isHomeSearchActive && styles.activeSearchWrapper,
            ]}>
            <Button
              style={styles.btnContainer}
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Tiny}
              onPress={() => setIsSearchActive(true)}>
              <SearchIcon
                height={isHomeSearchActive ? 16 : 22}
                width={isHomeSearchActive ? 16 : 22}
                style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                color={themeColors.secondary}
              />
            </Button>
            {isHomeSearchActive && (
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder='Search for anything...'
                style={{
                  flex: 1,
                  fontSize: FONT_SIZES.Medium,
                  paddingVertical: 4,
                }}
                autoCorrect={false}
              />
            )}
            {!isHomeSearchActive && (
              <Button
                style={styles.btnContainer}
                variant={BTN_VARIANTS.transparent}
                size={SIZES.Tiny}
                onPress={() => alert("Pressed!")}>
                <IntakeIcon color={themeColors.secondary} />
              </Button>
            )}
          </View>
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
