import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Utils
import { debounce } from "@app/common/utils/debounce";

// Store
import { actions } from "@app/core/store";

// Hooks
import { usePostIntake } from "@app/core/hooks/api";

// Constants
import { SIZES } from "@app/common/constants/styles";

// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ConsumeIngredientFooter(props) {
  const { ingredient_mapping_id } = props;
  // Store State
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );

  // Store Actions
  const {
    setSelectedIngredientAmount: sfa,
    setDailyNutrients: sdn,
    setDailyIntakes: sdi,
    setSelectedIngredientID: sId,
    setSelectedIngredientMappingID: sMId,
    setIngredientDetails: sD,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientAmount = (value) => dispatch(sfa(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setIngredientDetails = (v) => dispatch(sD(v));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));

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
      ingredient_mapping_id: ingredient_mapping_id,
      amount: parseFloat(amount),
      amount_unit: measureUnit.value,
      amount_unit_desc: measureUnit.desc,
    };
    postIntake(data);
  }
  //TODO Handle food data
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
      ingredient_mapping_id: postIntakeData.intake.ingredient_mapping_id,
      // food_id: postIntakeData.intake.food_id,
      date_created: postIntakeData.intake.date_created,
      calories: postIntakeData.added_daily_nutrients.calories,
      amount: postIntakeData.intake.amount,
      amount_unit: postIntakeData.intake.amount_unit,
      amount_unit_desc: postIntakeData.intake.amount_unit_desc,
      serving_size: postIntakeData.intake.serving_size,

      ingredient_name: postIntakeData?.ingredient.ingredient.name,
      ingredient_name_ph: postIntakeData?.ingredient.ingredient.name_ph,
      ingredient_name_owner: postIntakeData?.ingredient.ingredient.name_owner,
      ingredient_variant_name:
        postIntakeData?.ingredient.ingredient_variant.name,
      ingredient_variant_name_ph:
        postIntakeData?.ingredient.ingredient_variant.name_ph,
      ingredient_subvariant_name:
        postIntakeData?.ingredient.ingredient_subvariant.name,
      ingredient_subvariant_name_ph:
        postIntakeData?.ingredient.ingredient_subvariant.name_ph,
      thumbnail_image_link:
        postIntakeData?.ingredient.ingredient.thumbnail_image_link,

      // food_name: postIntakeData.food_name,
      // food_name_ph: postIntakeData.food_name_ph,
      // food_name_owner: postIntakeData.food_name_owner,
    };
    setDailyIntakes([newIntake, ...dailyIntakes]);
    setDailyNutrients(newData);
    setIngredientDetails();
    setSelectedIngredientID();
    setSelectedIngredientMappingID();
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
    setSelectedIngredientAmount(amount);
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
