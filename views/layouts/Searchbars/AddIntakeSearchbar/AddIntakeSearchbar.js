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

export default function AddIntakeSearchbar() {
  // Refs
  const scrollViewRef = useRef();

  // Local State
  const [scrollHeight, setScrollHeight] = useState(0);
  const [text, onChangeText] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // Hooks
  const navigation = useNavigation();

  // Functions
  const handleCancel = () =>
    navigation.navigate("Home", { screen: "HomeDefault" });
  const handleFocus = () => setIsSearchActive(true);
  const handleBlur = () => setIsSearchActive(false);
  const scrollDown = () =>
    scrollViewRef.current.scrollToEnd({ animated: true });
  function handleBottomLayout(event) {
    var { height } = event.nativeEvent.layout;
    setScrollHeight(Dimensions.get("window").height - height);
  }

  const sampleData = [
    {
      id: 1,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 2,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 3,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 4,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 5,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 6,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 7,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 8,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 9,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 10,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 11,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
    {
      id: 12,
      title: "Lorem Ipsum Doler Ipsut",
      subtitle: "Lorem Ipsum Doler Ipsut",
    },
  ];
  return (
    <View
      style={{
        ...styles.searchWrapper,
        flex: sampleData || isSearchActive ? 1 : 0,
      }}>
      {/* Search Results */}
      {(isSearchActive || sampleData) && (
        <View style={{ ...styles.rowContainer, height: scrollHeight }}>
          <ScrollView ref={scrollViewRef} onContentSizeChange={scrollDown}>
            {sampleData.map((item) => (
              <SearchResultCard
                key={item.id}
                title={item.title}
                subtitle={item.id}
              />
            ))}
          </ScrollView>
        </View>
      )}
      <View onLayout={handleBottomLayout}>
        {(isSearchActive || sampleData) && (
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
              onFocus={handleFocus}
              onBlur={handleBlur}
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
