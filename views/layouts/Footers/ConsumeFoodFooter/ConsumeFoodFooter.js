import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Utils
import { debounce } from "@app/common/utils/debounce";

// Store
import { actions } from "@app/core/store";

// Hooks
import { usePostIntake } from "@app/core/hooks/api";

// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ConsumeFoodFooter(props) {
  const { food_id, details } = props;
  // Store State
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );

  // Store Actions
  const {
    setSelectedFoodAmount: sfa,
    setDailyNutrients: sdn,
    setDailyIntakes: sdi,
    setSelectedFoodID: sId,
    setSelectedFoodBarcode: sfb,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedFoodAmount = (value) => dispatch(sfa(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setSelectedFoodID = (v) => dispatch(sId(v));
  const setSelectedFoodBarcode = (v) => dispatch(sfb(v));

  // Local State
  const [amount, setAmount] = useState(
    details?.nutrient?.serving_size
      ? details?.nutrient?.serving_size
      : details?.nutrient?.amount
  );
  const [maxAmount, setMaxAmount] = useState(0);
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

  // Refs
  const valueRef = useRef();

  // Hooks
  const {
    postIntake,
    postIntakeData,
    isPostIntakeLoading,
    isPostIntakeSuccess,
  } = usePostIntake();
  const navigation = useNavigation();

  // Debounced Functions
  const debouncedSetAmount = debounce(setAmount, 100);

  // Functions
  function handleSubmit() {
    const data = {
      food_id: food_id,
      amount: parseFloat(amount),
      // TODO change the amount unit
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
    const newIntake = {
      id: postIntakeData.intake.id,
      account_id: postIntakeData.intake.account_id,
      food_id: postIntakeData.intake.food_id,
      date_created: postIntakeData.intake.date_created,
      calories: postIntakeData.added_daily_nutrients.calories,
      amount: postIntakeData.intake.amount,
      amount_unit: postIntakeData.intake.amount_unit,
      amount_unit_desc: postIntakeData.intake.amount_unit_desc,
      serving_size: postIntakeData.intake.serving_size,
      thumbnail_image_link: postIntakeData?.food.thumbnail_image_link,
      food_name: postIntakeData?.food?.name,
      food_name_ph: postIntakeData?.food?.name_ph,
      food_name_owner: postIntakeData?.food?.name_owner,
    };
    setDailyIntakes([newIntake, ...dailyIntakes]);
    setDailyNutrients(newData);
    setSelectedFoodID();
    setSelectedFoodBarcode();
    navigation.navigate("Home", { screen: "HomeDefault" });
  }
  function handleChange(v) {
    if (valueRef && valueRef.current) {
      valueRef.current.setNativeProps({ text: `${v}` });
      debouncedSetAmount(v);
    }
  }

  // UseEffects
  useEffect(() => {
    if (details?.nutrient?.serving_size) {
      setIncrementValue(details?.nutrient?.serving_size);
      setAmount(details?.nutrient?.serving_size);
    } else {
      setAmount(details?.nutrient?.amount);
    }
    if (details?.nutrient?.serving_total) {
      setMaxAmount(details?.nutrient?.serving_total);
    }
  }, [details]);
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
        <>
          <SliderInput value={amount} onChangeValue={handleChange} />
          <View style={styles.spacer} />
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <View style={styles.valueContainer}>
                <TextInput
                  style={styles.value}
                  ref={valueRef}
                  defaultValue={amount.toString()}
                />
                <Body>{measureUnit.label}</Body>
              </View>
              <Button onPress={handleSubmit}>Consume</Button>
            </View>
          </View>
        </>
      )}
      {isPostIntakeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
