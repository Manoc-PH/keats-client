import { useState } from "react";
import { View, Modal, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { Txt } from "@app/views/components";

import { styles } from "./styles";

export default function HomeSearchModal() {
  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  const { foodSearchResults } = useSelector((state) => state.food);
  // Store Actions
  const { setIsHomeSearchActive, setFoodSearchResults } = actions;
  const dispatch = useDispatch();
  const setIsSearchActive = (txt) => dispatch(setIsHomeSearchActive(txt));
  const setFoodSearchRes = (txt) => dispatch(setFoodSearchResults(txt));

  const [text, onChangeText] = useState("");

  const inlineStyle = StyleSheet.create({
    wrapper: { display: isHomeSearchActive ? "flex" : "none" },
  });
  return (
    <View
      style={{
        ...styles.wrapper,
        ...inlineStyle.wrapper,
      }}>
      <ScrollView style={styles.container}>
        <Txt>Hello</Txt>
      </ScrollView>
    </View>
  );
}
