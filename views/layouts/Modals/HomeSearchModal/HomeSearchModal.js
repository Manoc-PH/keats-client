import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Constants
import { DUMMY_SERACH_DATA } from "@app/common/constants/dummyData";

// Store
import { actions } from "@app/core/store";

// Components
import { FoodCard, Txt } from "@app/views/components";

import { styles } from "./styles";

export default function HomeSearchModal(props) {
  // Hooks
  const navigation = useNavigation();

  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  const { foodSearchResults, isFoodSearchLoading } = useSelector(
    (state) => state.food
  );

  // Store Actions
  const { setSelectedFoodID: setSelectedFoodid } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodID = (v) => dispatch(setSelectedFoodid(v));

  // Local State
  const [results, setResults] = useState();
  const inlineStyle = StyleSheet.create({
    wrapper: { display: isHomeSearchActive ? "flex" : "none" },
  });

  // Functions
  function handlePress(id) {
    setSelectedFoodID(id);
    navigation.navigate("Home", { screen: "FoodDetails" });
  }

  // UseEffects
  useEffect(() => {
    if (foodSearchResults) setResults(foodSearchResults);
    else setResults();
  }, [foodSearchResults]);
  return (
    <View style={{ ...styles.wrapper, ...inlineStyle.wrapper }}>
      <ScrollView style={styles.container} overScrollMode='never'>
        {/* TODO add previously queried items */}
        {/* TODO add no results component*/}
        {results &&
          !isFoodSearchLoading &&
          results.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              name_ph={item.name_ph}
              name_brand={item.name_brand}
              thumbnail_link={item.thumbnail_link}
              onPress={() => {
                handlePress(item.id);
              }}
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
