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
  const { setSelectedRecipeID: sdi, setIsRecipeHomeUpdated: sir } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));
  const setIsRecipeHomeUpdated = (v) => dispatch(sir(v));

  // Hooks
  const { patchRecipe, patchRecipeData, isPatchRecipeLoading } =
    usePatchRecipe();
  const navigation = useNavigation();

  // Local state
  const [loading, setLoading] = useState(false);

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
      const data = {
        recipe,
        recipe_ingredients,
        recipe_instructions,
        timestamp: new Date().toISOString(),
      };
      console.log(data);
      // setLoading(true);
      // patchRecipe(data);
    }
  }
  function handleSaveImages(data) {
    setIsRecipeHomeUpdated(true);
    setLoading(false);
    setSelectedRecipeID(data?.recipe?.id);
    navigation.navigate("Common", { screen: "RecipeDetails" });
  }
  function handleCancel() {
    // TODO ASK FOR CONFIRMATION
    navigation.goBack();
  }

  // UseEffects
  useEffect(() => {
    if (patchRecipeData) {
      handleSaveImages(patchRecipeData);
    }
  }, [patchRecipeData]);
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && (
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
      {loading && <CircleLoader />}
    </SafeAreaView>
  );
}
