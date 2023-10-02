import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Utils
import { debounce } from "@app/common/utils/debounce";

// Store
import { actions } from "@app/core/store";

// Hooks
import { usePutIntake } from "@app/core/hooks/api";

// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function UpdateFoodIntakeFooter(props) {
  const { food_id, intake_id, details, selectedIntake } = props;
  // Store State
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );

  // Store Actions
  const {
    setSelectedIntakeAmount: ssia,
    setDailyNutrients: sdn,
    setDailyIntakes: sdi,
    setSelectedFoodID: sId,
    setSelectedFoodBarcode: sfb,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIntakeAmount = (value) => dispatch(ssia(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setSelectedFoodID = (v) => dispatch(sId(v));
  const setSelectedFoodBarcode = (v) => dispatch(sfb(v));

  // Local State
  const [amount, setAmount] = useState(selectedIntake?.amount || 100);
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
  const { putIntake, putIntakeData, isPutIntakeLoading, isPutIntakeSuccess } =
    usePutIntake();
  const navigation = useNavigation();

  // Debounced Functions
  const debouncedSetAmount = debounce(setAmount, 100);

  // Functions
  function handleSubmit() {
    const data = {
      intake_id: intake_id,
      food_id: food_id,
      amount: parseFloat(amount),
      // TODO change the amount unit
      amount_unit: measureUnit.value,
      amount_unit_desc: measureUnit.desc,
    };
    console.log(data);
    putIntake(data);
  }
  function handleIntake() {
    const newData = {
      ...dailyNutrients,
      calories:
        dailyNutrients.calories + putIntakeData.added_daily_nutrients.calories,
      protein:
        dailyNutrients.protein + putIntakeData.added_daily_nutrients.protein,
      carbs: dailyNutrients.carbs + putIntakeData.added_daily_nutrients.carbs,
      fats: dailyNutrients.fats + putIntakeData.added_daily_nutrients.fats,
    };
    const newIntake = {
      id: putIntakeData.intake.id,
      account_id: putIntakeData.intake.account_id,
      food_id: putIntakeData.intake.food_id,
      date_created: putIntakeData.intake.date_created,
      calories: putIntakeData.added_daily_nutrients.calories,
      amount: putIntakeData.intake.amount,
      amount_unit: putIntakeData.intake.amount_unit,
      amount_unit_desc: putIntakeData.intake.amount_unit_desc,
      serving_size: putIntakeData.intake.serving_size,
      thumbnail_image_link: putIntakeData?.food?.food.thumbnail_image_link,
      food_name: putIntakeData?.food?.food?.name,
      food_name_ph: putIntakeData?.food?.food?.name_ph,
      food_name_owner: putIntakeData?.food?.food?.name_owner,
    };
    const newIntakes = [];
    if (dailyIntakes && dailyIntakes?.length > 0) {
      dailyIntakes.forEach((item) => {
        if (item?.id === newIntake.id) {
          newIntakes.push(newIntake);
        } else newIntakes.push(item);
      });
      newIntakes;
    } else newIntakes.push(newIntake);
    setDailyIntakes(newIntakes);
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
    setSelectedIntakeAmount(amount);
  }, [amount]);
  useEffect(() => {
    if (putIntakeData && isPutIntakeSuccess) handleIntake();
  }, [putIntakeData]);

  // TODO add support for servings
  return (
    <SafeAreaView style={styles.wrapper}>
      {!isPutIntakeLoading && (
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
              <Button onPress={handleSubmit}>Save</Button>
            </View>
          </View>
        </>
      )}
      {isPutIntakeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
