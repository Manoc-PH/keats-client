import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import themeColors from "@app/common/theme";
import { useDispatch } from "react-redux";

// Store
import { actions } from "@app/core/store";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Components
import { TextInput } from "@app/views/components";
// Utils
import useDebounce from "@app/common/utils/debounce";
// Assets
import { LogoIcon, SearchIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function RecipeHeader() {
  // Store Actions
  const { setRecipeSearch: ssi } = actions;
  const dispatch = useDispatch();
  const setRecipeSearch = (v) => dispatch(ssi(v));
  // Hooks
  const [text, onChangeText] = useState();
  // Functions
  function handleTextClear() {
    onChangeText("");
  }
  function search() {
    setRecipeSearch(text);
  }

  // UseEffects
  useDebounce(search, [text], 400);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.titleContainer}>
            <LogoIcon />
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder='Search for a recipe...'
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
        </View>
      </View>
    </SafeAreaView>
  );
}
