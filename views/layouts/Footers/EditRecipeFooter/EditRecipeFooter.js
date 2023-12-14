import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Store
import { actions } from "@app/core/store";
// Hooks
import { usePatchRecipe } from "@app/core/hooks/api";
// Components
import { Button, CircleLoader } from "@app/views/components";

import { styles } from "./styles";

export default function EditRecipeFooter(props) {
  const { recipe, recipe_ingredients, recipe_instructions, setErrMsg } = props;

  // Store Actions
  const {
    setSelectedRecipeID: sdi,
    setIsRecipeHomeUpdated: sir,
    setIsRecipeEdit: sire,
    setIsRecipeUpdated: siru,
  } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));
  const setIsRecipeHomeUpdated = (v) => dispatch(sir(v));
  const setIsRecipeEdit = (v) => dispatch(sire(v));
  const setIsRecipeUpdated = (v) => dispatch(siru(v));

  // Hooks
  const { patchRecipe, patchRecipeData, isPatchRecipeLoading } =
    usePatchRecipe();
  const navigation = useNavigation();

  // Functions
  function handleSave() {
    setErrMsg();
    if (!recipe?.name || !recipe?.servings || !recipe?.prep_time) {
      setErrMsg(
        "Missing inputs: recipe name, servings, and preparation time are required"
      );
      return;
    }
    if (recipe_ingredients?.length < 1 && recipe_instructions?.length < 1) {
      setErrMsg(
        "Missing inputs: you must have atleast 1 ingredient and 1 instruction"
      );
      return;
    }
    if (recipe_ingredients?.length < 1) {
      setErrMsg("Missing inputs: you must have atleast 1 ingredient");
      return;
    }
    if (recipe_instructions?.length < 1) {
      setErrMsg("Missing inputs: you must have atleast 1 instruction");
      return;
    }
    if (recipe && recipe_ingredients && recipe_instructions) {
      const newIngredients = formatIngredients(recipe_ingredients);
      const newInstructions = formatInstructions(recipe_instructions);
      const data = {
        recipe,
        recipe_ingredients: newIngredients,
        recipe_instructions: newInstructions,
      };
      // console.log(data);
      patchRecipe(data);
    }
  }
  function handleSaveSuccess(data) {
    setIsRecipeHomeUpdated(true);
    setSelectedRecipeID(data?.recipe?.id);
    setIsRecipeEdit();
    setIsRecipeUpdated(true);
    navigation.navigate("Common", { screen: "RecipeDetails" });
  }
  function formatIngredients(ingredients) {
    if (ingredients) {
      const newIngredients = [];
      ingredients?.forEach((item) => {
        if (item?.id) {
          const newItem = { ...item, action_type: "update" };
          newIngredients.push(newItem);
        } else {
          const newItem = { ...item, action_type: "insert" };
          newIngredients.push(newItem);
        }
      });
      return newIngredients;
    }
  }
  function formatInstructions(instructions) {
    if (instructions) {
      const newInstructions = [];
      instructions?.forEach((item) => {
        if (item?.id) {
          const newItem = { ...item, action_type: "update" };
          newInstructions.push(newItem);
        } else {
          const newItem = { ...item, action_type: "insert" };
          newInstructions.push(newItem);
        }
      });
      return newInstructions;
    }
  }
  function handleCancel() {
    // TODO ASK FOR CONFIRMATION
    setIsRecipeEdit();
    navigation.goBack();
  }

  // UseEffects
  useEffect(() => {
    if (patchRecipeData) {
      handleSaveSuccess(patchRecipeData);
    }
  }, [patchRecipeData]);
  return (
    <SafeAreaView style={styles.wrapper}>
      {!isPatchRecipeLoading && (
        <View style={styles.container}>
          <Button
            style={styles.btn}
            variant={BTN_VARIANTS.tertiary}
            onPress={handleCancel}>
            Cancel
          </Button>
          <Button
            style={styles.btn}
            onPress={handleSave}
            variant={BTN_VARIANTS.primary}>
            Save
          </Button>
        </View>
      )}
      {isPatchRecipeLoading && <CircleLoader />}
    </SafeAreaView>
  );
}
