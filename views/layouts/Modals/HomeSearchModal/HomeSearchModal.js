import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { FoodCard, Txt } from "@app/views/components";

import { styles } from "./styles";
import { DUMMY_SERACH_DATA } from "@app/common/constants/dummyData";

export default function HomeSearchModal() {
  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  const { foodSearchResults, isFoodSearchLoading } = useSelector(
    (state) => state.food
  );

  // Local State
  const [results, setResults] = useState();
  const inlineStyle = StyleSheet.create({
    wrapper: { display: isHomeSearchActive ? "flex" : "none" },
  });

  // Functions
  function handlePress() {
    console.log("Pressed");
  }

  // UseEffects
  useEffect(() => {
    if (foodSearchResults) setResults(foodSearchResults);
  }, [foodSearchResults]);
  return (
    <View style={{ ...styles.wrapper, ...inlineStyle.wrapper }}>
      <ScrollView style={styles.container} overScrollMode='never'>
        {/* TODO add previously queried items */}
        {results &&
          !isFoodSearchLoading &&
          results.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              name_ph={item.name_ph}
              name_brand={item.name_brand}
              thumbnail_link={item.thumbnail_link}
              onPress={handlePress}
            />
          ))}
        {isFoodSearchLoading &&
          DUMMY_SERACH_DATA.map((item) => (
            <FoodCard key={item.id} isLoading={true} />
          ))}
      </ScrollView>
    </View>
  );
}
