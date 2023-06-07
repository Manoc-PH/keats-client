import { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import themeColors from "@app/common/theme";
import { useNavigation } from "@react-navigation/native";

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
import { useGetSearchIngredient } from "@app/core/hooks/api";
import useDebounce from "@app/common/utils/debounce";

export default function AddIntakeSearchbar() {
  // Refs
  const scrollViewRef = useRef();

  // Local State
  const [scrollHeight, setScrollHeight] = useState(0);
  const [text, onChangeText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Hooks
  const navigation = useNavigation();
  const {
    getSearchIngredient,
    getSearchIngredientData,
    isGetSearchIngredientLoading,
    getSearchIngredientError,
  } = useGetSearchIngredient();

  // Constants
  const isOptionsShown = text || searchResult?.length > 0;

  // Functions
  function search() {
    if (text) getSearchIngredient(text);
    else {
      setSearchResult([]);
      onChangeText("");
    }
  }
  const handleCancel = () =>
    navigation.navigate("Home", { screen: "HomeDefault" });
  const scrollDown = () =>
    scrollViewRef.current.scrollToEnd({ animated: true });
  function handleBottomLayout(event) {
    var { height } = event.nativeEvent.layout;
    setScrollHeight(Dimensions.get("window").height - height);
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

  // UseEffects
  useDebounce(search, [text], 400);
  useEffect(() => {
    formatSearchData();
  }, [getSearchIngredientData]);

  return (
    <View style={{ ...styles.searchWrapper, flex: isOptionsShown ? 1 : 0 }}>
      {/* Search Results */}
      {isOptionsShown && (
        <View style={{ ...styles.rowContainer, height: scrollHeight }}>
          <ScrollView ref={scrollViewRef} onContentSizeChange={scrollDown}>
            {searchResult.map((item) => (
              <SearchResultCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </ScrollView>
        </View>
      )}
      <View onLayout={isOptionsShown && handleBottomLayout}>
        {isOptionsShown && (
          <View style={styles.rowContainer}>
            <Button style={{ marginRight: SPACING.Small }}>Generic</Button>
            <Button variant={BTN_VARIANTS.outlined}>Branded</Button>
          </View>
        )}

        <View style={styles.rowContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder='Search for a food...'
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
