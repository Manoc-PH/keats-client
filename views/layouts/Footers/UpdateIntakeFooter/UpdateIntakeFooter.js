import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Utils
import { debounce } from "@app/common/utils/debounce";
// Store
import { actions } from "@app/core/store";
// Hooks
import { usePutIntake } from "@app/core/hooks/api";
// Constants
import { SIZES } from "@app/common/constants/styles";
// Components
import { Body, Button, CircleLoader, SliderInput } from "@app/views/components";

import { styles } from "./styles";

export default function UpdateIntakeFooter(props) {
  const { ingredient_mapping_id, intake_id, selectedIntake } = props;
  // Store State
  const { dailyNutrients, dailyIntakes } = useSelector(
    (state) => state.tracker
  );

  // Store Actions
  const {
    setSelectedIntakeAmount: ssia,
    setDailyNutrients: sdn,
    setDailyIntakes: sdi,
    setSelectedIngredientID: sId,
    setSelectedIngredientMappingID: sMId,
    setIngredientDetails: sD,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIntakeAmount = (value) => dispatch(ssia(value));
  const setDailyNutrients = (value) => dispatch(sdn(value));
  const setDailyIntakes = (v) => dispatch(sdi(v));
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setIngredientDetails = (v) => dispatch(sD(v));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));

  // Local State
  const [amount, setAmount] = useState(selectedIntake?.amount || 100);
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
  const { putIntake, putIntakeData, isPutIntakeLoading, isPutIntakeSuccess } =
    usePutIntake();
  const navigation = useNavigation();

  // Debounced Functions
  const debouncedSetAmount = debounce(setAmount, 100);

  // Functions
  function handleSubmit() {
    const data = {
      intake_id: intake_id,
      ingredient_mapping_id: ingredient_mapping_id,
      amount: parseFloat(amount),
      amount_unit: measureUnit.value,
      amount_unit_desc: measureUnit.desc,
    };
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
      ingredient_mapping_id: putIntakeData.intake.ingredient_mapping_id,
      // food_id: putIntakeData.intake.food_id,
      date_created: putIntakeData.intake.date_created,
      calories: putIntakeData.added_daily_nutrients.calories,
      amount: putIntakeData.intake.amount,
      amount_unit: putIntakeData.intake.amount_unit,
      amount_unit_desc: putIntakeData.intake.amount_unit_desc,
      serving_size: putIntakeData.intake.serving_size,

      ingredient_name: putIntakeData?.ingredient.ingredient.name,
      ingredient_name_ph: putIntakeData?.ingredient.ingredient.name_ph,
      ingredient_name_owner: putIntakeData?.ingredient.ingredient.name_owner,
      ingredient_variant_name:
        putIntakeData?.ingredient.ingredient_variant.name,
      ingredient_variant_name_ph:
        putIntakeData?.ingredient.ingredient_variant.name_ph,
      ingredient_subvariant_name:
        putIntakeData?.ingredient.ingredient_subvariant.name,
      ingredient_subvariant_name_ph:
        putIntakeData?.ingredient.ingredient_subvariant.name_ph,
      thumbnail_image_link:
        putIntakeData?.ingredient.ingredient.thumbnail_image_link,

      // food_name: putIntakeData.food_name,
      // food_name_ph: putIntakeData.food_name_ph,
      // food_name_owner: putIntakeData.food_name_owner,
    };
    setDailyIntakes(() => {
      if (dailyNutrients && dailyNutrients?.length > 0) {
        dailyIntakes.map((item) => {
          if (item?.id === newIntake.id) {
            return newIntake;
          } else return item;
        });
        return dailyIntakes;
      } else return [newIntake];
    });
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
    if (valueRef.current && amount) {
      setSelectedIntakeAmount(amount);
    }
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
              <Button size={SIZES.Regular} onPress={handleSubmit}>
                Save
              </Button>
            </View>
          </View>
        </>
      )}
      {isPutIntakeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
