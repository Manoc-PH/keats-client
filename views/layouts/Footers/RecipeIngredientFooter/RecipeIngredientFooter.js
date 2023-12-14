import { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Utils
import { debounce } from "@app/common/utils/debounce";
// Store
import { actions } from "@app/core/store";
// Components
import { Body, Button, SliderInput } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeIngredientFooter(props) {
  const {
    ingredient_mapping_id,
    ingredientDetails,
    nutrient,
    selectedVariant,
    selectedSubvariant,
  } = props;
  // Store State
  const { isRecipeEdit } = useSelector((state) => state.recipe);

  // Store Actions
  const {
    setSelectedIngredientAmount: sfa,
    setSelectedIngredientID: sId,
    setSelectedIngredientMappingID: sMId,
    setIngredientDetails: sD,
    setRecipeIngredient: sri,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientAmount = (value) => dispatch(sfa(value));
  const setSelectedIngredientID = (v) => dispatch(sId(v));
  const setIngredientDetails = (v) => dispatch(sD(v));
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));
  const setRecipeIngredient = (v) => dispatch(sri(v));

  // Local State
  const [amount, setAmount] = useState(100);
  const [measureUnit, setMeasureUnit] = useState({
    value: "g",
    desc: "gram",
    label: "Grams",
    shortLabel: "G",
  });

  // Refs
  const valueRef = useRef();

  // Hooks
  const navigation = useNavigation();

  // Debounced Functions
  const debouncedSetAmount = debounce(setAmount, 100);

  // Functions
  function handleSubmit() {
    const data = {
      ingredient_mapping_id: ingredient_mapping_id,
      name: `${ingredientDetails?.name}${
        selectedVariant && ", " + selectedVariant?.name
      }${selectedSubvariant && ", " + selectedSubvariant?.name}`,
      name_owner: ingredientDetails?.name_owner,
      amount: parseFloat(amount),
      calories: nutrient?.calories * (parseFloat(amount) * 0.01),
    };
    setRecipeIngredient(data);
    setSelectedIngredientAmount();
    setIngredientDetails();
    setSelectedIngredientID();
    setSelectedIngredientMappingID();
    if (isRecipeEdit) navigation.navigate("Common", { screen: "EditRecipe" });
    else navigation.navigate("Common", { screen: "CreateRecipe" });
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

  return (
    <SafeAreaView style={styles.wrapper}>
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
    </SafeAreaView>
  );
}
