import { useEffect, useRef, useState } from "react";
import { Dimensions, Keyboard, ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Constants
import { INTAKE_TYPES } from "@app/common/constants/options";

// Store
import { actions } from "@app/core/store";

// Layouts
import {
  AddRecipeIngredientSearchbar,
  ScrollPage,
  SearchResultCard,
} from "@app/views/layouts";

// Utils
import useDebounce from "@app/common/utils/debounce";
// Themes
import themeColors from "@app/common/theme";
// Components
import { Title1 } from "@app/views/components";

// Hooks
import { useGetSearchFood, useGetSearchIngredient } from "@app/core/hooks/api";

import { styles } from "./styles";

export default function SearchRecipeIngredient() {
  // Store Actions
  const { setSelectedIngredientID: sId, setSelectedFoodID: ssf } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setSelectedFoodID = (v) => dispatch(ssf(v));
  // Local State
  const [isSearchActive, setIsSearchActive] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [keyboardIsVisible, setKeyboardVisible] = useState();
  const [text, onChangeText] = useState("");
  const [searchType, setSearchType] = useState(INTAKE_TYPES.generic);

  // Hooks
  const {
    getSearchIngredient,
    getSearchIngredientData,
    isGetSearchIngredientLoading,
  } = useGetSearchIngredient();
  const { getSearchFood, getSearchFoodData } = useGetSearchFood();
  const navigation = useNavigation();

  // Refs
  const scrollViewRef = useRef();

  // Functions
  function search() {
    if (text && searchType === INTAKE_TYPES.generic) getSearchIngredient(text);
    if (text && searchType === INTAKE_TYPES.branded) getSearchFood(text);
    if (!text) {
      setSearchResult([]);
      onChangeText("");
    }
  }

  function scrollDown() {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }
  function handleSelect(id) {
    if (searchType === INTAKE_TYPES.generic) {
      setSelectedIngredientID(id);
      navigation.navigate("Common", { screen: "RecipeIngredientDetails" });
    }
    if (searchType === INTAKE_TYPES.branded) {
      setSelectedFoodID(id);
      navigation.navigate("Common", { screen: "RecipeFoodDetails" });
    }
  }

  function formatSearchData() {
    if (getSearchIngredientData && searchType === INTAKE_TYPES.generic) {
      const newData = [];
      getSearchIngredientData.reverse().map((item) =>
        newData.push({
          id: item.id,
          title: `${item.n}${item?.n_ph && " - " + item?.n_ph}${
            item?.n_o && " - " + item?.n_o
          }`,
          subtitle:
            item.c_l !== item.c_h
              ? `${item.c_l} - ${item.c_h} kcal`
              : `${item.c_h} kcal`,
        })
      );
      setSearchResult(newData);
    }
    if (getSearchFoodData && searchType === INTAKE_TYPES.branded) {
      const newData = [];
      getSearchFoodData.reverse().map((item) =>
        newData.push({
          id: item.id,
          title: `${item.n}${item?.n_o && " - " + item?.n_o}`,
          subtitle: `${item.c} kcal`,
        })
      );
      setSearchResult(newData);
    }
  }

  // UseEffects
  useDebounce(search, [text, searchType], 400);
  useEffect(() => {
    formatSearchData();
  }, [getSearchIngredientData, getSearchFoodData]);

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
    if (text) setIsSearchActive(true);
    if (!text) setIsSearchActive(false);
  }, [keyboardIsVisible, text]);
  return (
    <ScrollPage
      contentContainerStyle={styles.wrapper}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      scrollEnabled={false}
      automaticallyAdjustKeyboardInsets={true}>
      {!isSearchActive && (
        <View style={styles.container}>
          <Title1> Search for an ingredient </Title1>
        </View>
      )}
      {isSearchActive && (
        <View style={styles.container}>
          <ScrollView ref={scrollViewRef} onContentSizeChange={scrollDown}>
            {isGetSearchIngredientLoading &&
              Array.from({ length: 10 }, (index) => (
                <SearchResultCard key={index} isLoading={true} />
              ))}
            {!isGetSearchIngredientLoading &&
              searchResult.map((item) => (
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
      <AddRecipeIngredientSearchbar
        keyboardIsVisible={keyboardIsVisible}
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
        searchType={searchType}
        setSearchType={setSearchType}
        onChangeText={onChangeText}
        text={text}
      />
    </ScrollPage>
  );
}
