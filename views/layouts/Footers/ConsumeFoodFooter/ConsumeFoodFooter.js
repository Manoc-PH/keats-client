import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Utils
import useDebounce from "@app/common/utils/debounce";

// Hooks
import { useGetSearchFood } from "@app/core/hooks/api";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

import {
  Button,
  Title1,
  Body,
  TextInput,
  NumberInput,
} from "@app/views/components";
import { SearchIcon, IntakeIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function ConsumeFoodFooter() {
  // // Store State
  // const { isHomeSearchActive } = useSelector((state) => state.search);
  // // Store Actions
  // const {
  //   setIsHomeSearchActive,
  //   setFoodSearchResults,
  //   setIsFoodSearchLoading,
  // } = actions;
  // const dispatch = useDispatch();
  // const setFoodSearchLoading = (value) =>
  //   dispatch(setIsFoodSearchLoading(value));
  // const setIsSearchActive = (value) => dispatch(setIsHomeSearchActive(value));
  // const setFoodSearchRes = (value) => dispatch(setFoodSearchResults(value));

  // Local State
  const [amount, setAmount] = useState(50);
  const [maxAmount, setMaxAmount] = useState(1000);
  const [incrementValue, setIncrementValue] = useState(50);
  const [measureUnit, setMeasureUnit] = useState({
    value: "g",
    label: "Grams",
    shortLabel: "G",
  });
  const options = [
    { value: "g", label: "Grams", shortLabel: "G" },
    { value: "srvs", label: "Servings", shortLabel: "SRVS" },
  ];
  // TODO add support for servings
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <View style={styles.searchInputContainer}>
            <NumberInput
              value={amount}
              onStartIconPress={() => setIsSearchActive(true)}
              onChange={setAmount}
              incrementValue={incrementValue}
              maxValue={maxAmount}
              options={options}
              onOptionChange={setMeasureUnit}
              optionPlaceholder={measureUnit.shortLabel}
            />
          </View>
          <Button
            style={styles.btnContainer}
            size={SIZES.Small}
            onPress={() => {}}>
            Consume
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
