import { useEffect, useRef, useState } from "react";
import { Dimensions, Keyboard, ScrollView, View } from "react-native";
import themeColors from "@app/common/theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Constants
import { INTAKE_TYPES } from "@app/common/constants/options";

// Hooks
import { useGetSearchIngredient } from "@app/core/hooks/api";

// Utils
import useDebounce from "@app/common/utils/debounce";

// Components
import {
  Body,
  Button,
  SearchResultCard,
  TextInput,
} from "@app/views/components";

// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";

// Assets
import { SearchIcon } from "@app/assets/icons";

import { styles } from "./styles";

export default function AddIntakeSearchbar(props) {
  // Props
  const { isSearchActive, setIsSearchActive } = props;

  // Store Actions
  const { setSelectedIngredientID: sId } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientID = (v) => dispatch(sId(v));

  // Refs
  const scrollViewRef = useRef();

  // Local State
  const [scrollHeight, setScrollHeight] = useState(0);
  const [text, onChangeText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [keyboardIsVisible, setKeyboardVisible] = useState();
  const [searchType, setSearchType] = useState(INTAKE_TYPES.generic);

  // Hooks
  const navigation = useNavigation();
  const {
    getSearchIngredient,
    getSearchIngredientData,
    isGetSearchIngredientLoading,
    getSearchIngredientError,
  } = useGetSearchIngredient();

  // Functions
  function search() {
    if (text) getSearchIngredient(text);
    else {
      setSearchResult([]);
      onChangeText("");
    }
  }
  function handleCancel() {
    navigation.navigate("Home", { screen: "HomeDefault" });
  }
  function scrollDown() {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }
  function handleBottomLayout(event) {
    var { height } = event.nativeEvent.layout;
    setScrollHeight(Dimensions.get("window").height - height);
  }
  function handleSelect(id) {
    setSelectedIngredientID(id);
    navigation.navigate("Home", { screen: "IngredientDetails" });
  }
  function formatSearchData() {
    if (getSearchIngredientData) {
      const newData = [];
      getSearchIngredientData.reverse().map((item) =>
        newData.push({
          id: item.id,
          title: `${item.name}${item?.name_ph && " - " + item?.name_ph}`,
          subtitle: item.name_owner,
        })
      );
      setSearchResult(newData);
    }
  }
  function handleTextClear() {
    onChangeText("");
    if (!keyboardIsVisible) setIsSearchActive(false);
  }

  // UseEffects
  useDebounce(search, [text], 400);
  useEffect(() => {
    formatSearchData();
  }, [getSearchIngredientData]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  useEffect(() => {
    if (!text && !keyboardIsVisible) setIsSearchActive(false);
    if (keyboardIsVisible) setIsSearchActive(true);
  }, [keyboardIsVisible]);

  return (
    <View style={{ ...styles.searchWrapper, flex: isSearchActive ? 1 : 0 }}>
      {/* Search Results */}
      {isSearchActive && (
        <View style={{ ...styles.rowContainer, height: scrollHeight }}>
          <ScrollView ref={scrollViewRef} onContentSizeChange={scrollDown}>
            {searchResult.map((item) => (
              <SearchResultCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                onPress={() => {
                  handleSelect(item.id);
                }}
              />
            ))}
          </ScrollView>
        </View>
      )}
      <View onLayout={isSearchActive && handleBottomLayout}>
        {isSearchActive && (
          <View style={styles.rowContainer}>
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

        <View style={{ ...styles.rowContainer, alignItems: "center" }}>
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
    </View>
  );
}
