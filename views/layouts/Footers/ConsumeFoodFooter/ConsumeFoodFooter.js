import { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Hooks
import { usePostIntake } from "@app/core/hooks/api";

// Constants
import { SIZES } from "@app/common/constants/styles";

// Components
import { Button, CircleLoader, NumberInput } from "@app/views/components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ConsumeFoodFooter() {
  // Store State
  const { foodDetails } = useSelector((state) => state.food);
  const { dailyNutrients } = useSelector((state) => state.tracker);
  // Store Actions
  const {
    setSelectedFoodAmount: sfa,
    setDailyNutrients: sdn,
    setIsHomeSearchActive: sihsa,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodAmount = (value) => dispatch(sfa(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setIsHomeSearchActive = (value) => dispatch(sihsa(value));

  // Local State
  const [amount, setAmount] = useState(100);
  const [maxAmount, setMaxAmount] = useState(1000);
  const [incrementValue, setIncrementValue] = useState(50);
  const [measureUnit, setMeasureUnit] = useState({
    value: "g",
    desc: "gram",
    label: "Grams",
    shortLabel: "G",
  });
  const options = [
    { value: "g", label: "Grams", desc: "gram", shortLabel: "G" },
    { value: "srvs", desc: "servings", label: "Servings", shortLabel: "SRVS" },
  ];

  // Hooks
  const {
    postIntake,
    postIntakeData,
    isPostIntakeLoading,
    isPostIntakeSuccess,
  } = usePostIntake();
  const navigation = useNavigation();

  // Functions
  function handleSubmit() {
    const data = {
      food_id: foodDetails.id,
      amount: parseFloat(amount),
      amount_unit: measureUnit.value,
      amount_unit_desc: measureUnit.desc,
    };
    postIntake(data);
  }
  function handleIntake() {
    const newData = {
      ...dailyNutrients,
      calories:
        dailyNutrients.calories + postIntakeData.added_daily_nutrients.calories,
      protein:
        dailyNutrients.protein + postIntakeData.added_daily_nutrients.protein,
      carbs: dailyNutrients.carbs + postIntakeData.added_daily_nutrients.carbs,
      fats: dailyNutrients.fats + postIntakeData.added_daily_nutrients.fats,
    };
    setDailyNutrients(newData);
    setIsHomeSearchActive(false);
    navigation.navigate("Home", { screen: "HomeDefault" });
  }
  // UseEffects
  useEffect(() => {
    setSelectedFoodAmount(amount);
  }, [amount]);
  useEffect(() => {
    if (postIntakeData && isPostIntakeSuccess) handleIntake();
  }, [postIntakeData]);

  // TODO add support for servings
  return (
    <SafeAreaView style={styles.wrapper}>
      {!isPostIntakeLoading && (
        <View style={styles.container}>
          <View style={styles.navContainer}>
            <View style={styles.searchInputContainer}>
              <NumberInput
                value={amount}
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
              onPress={handleSubmit}>
              Consume
            </Button>
          </View>
        </View>
      )}
      {isPostIntakeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
