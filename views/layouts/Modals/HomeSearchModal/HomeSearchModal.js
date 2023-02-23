import { useState } from "react";
import { View, Modal, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

import { Txt } from "@app/views/components";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeSearchModal() {
  // Store State
  const { isHomeSearchActive } = useSelector((state) => state.search);
  // Store Actions
  const { setIsHomeSearchActive } = actions;
  const dispatch = useDispatch();
  const setIsSearchActive = (txt) => dispatch(setIsHomeSearchActive(txt));

  const [text, onChangeText] = useState("");

  return (
    <View
      style={{
        ...styles.wrapper,
        display: isHomeSearchActive ? "flex" : "none",
      }}>
      <Txt>Hello</Txt>
    </View>
  );
}
