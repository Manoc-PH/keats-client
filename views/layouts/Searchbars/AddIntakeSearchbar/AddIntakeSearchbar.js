import { useState } from "react";
import { View } from "react-native";
import themeColors from "@app/common/theme";
import { useNavigation } from "@react-navigation/native";
// Constants
import { INTAKE_TYPES } from "@app/common/constants/options";

// Components
import { Body, Button, TextInput } from "@app/views/components";

// Constants
import {
  BTN_VARIANTS,
  HEADER_SIZE,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

// Assets
import { SearchIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function AddIntakeSearchbar(props) {
  const {
    keyboardIsVisible,
    isSearchActive,
    setIsSearchActive,
    searchType,
    setSearchType,
    onChangeText,
    text,
  } = props;

  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleCancel() {
    navigation.navigate("Home", { screen: "HomeDefault" });
  }
  function handleTextClear() {
    onChangeText("");
    if (!keyboardIsVisible) setIsSearchActive(false);
  }

  return (
    <View
      style={{
        ...styles.wrapper,
        height: isSearchActive
          ? HEADER_SIZE + SPACING.Huge + SPACING.Regular
          : HEADER_SIZE,
      }}>
      {isSearchActive && (
        <View style={{ ...styles.rowContainer }}>
          <Button
            onPress={() => setSearchType(INTAKE_TYPES.generic)}
            size={SIZES.Small}
            style={{ marginRight: SPACING.Small }}
            variant={
              searchType !== INTAKE_TYPES.generic && BTN_VARIANTS.outlined
            }>
            Generic
          </Button>
          <Button
            onPress={() => setSearchType(INTAKE_TYPES.branded)}
            size={SIZES.Small}
            variant={
              searchType !== INTAKE_TYPES.branded && BTN_VARIANTS.outlined
            }>
            Branded
          </Button>
        </View>
      )}

      <View
        style={{
          ...styles.rowContainer,
          alignItems: "center",
          minHeight: HEADER_SIZE,
        }}>
        <View style={styles.searchInputContainer}>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder='Search for a food...'
            onClearPress={handleTextClear}
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
        <Button
          variant={BTN_VARIANTS.transparent}
          size={SIZES.Tiny}
          onPress={handleCancel}>
          <Body>Cancel</Body>
        </Button>
      </View>
    </View>
  );
}
