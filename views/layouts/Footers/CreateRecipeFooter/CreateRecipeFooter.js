import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Store
import { actions } from "@app/core/store";
// Hooks
import { usePostRecipe } from "@app/core/hooks/api";
// Components
import { Button, CircleLoader } from "@app/views/components";

import { styles } from "./styles";

export default function CreateRecipeFooter(props) {
  const { recipe, recipe_ingredients, recipe_instructions } = props;

  // Store Actions
  const { setSelectedRecipeID: sdi } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));

  // Hooks
  const { postRecipe, postRecipeData, isPostRecipeLoading } = usePostRecipe();
  const navigation = useNavigation();

  // Constants
  const loading = isPostRecipeLoading;

  // Functions
  function handleSave() {
    if (recipe && recipe_ingredients && recipe_instructions) {
      const data = {
        recipe,
        recipe_ingredients,
        recipe_instructions,
        timestamp: new Date().toISOString(),
      };
      postRecipe(data);
    }
  }
  function handleSuccessfullSave(data) {
    setSelectedRecipeID(data?.recipe?.id);
    navigation.navigate("Common", { screen: "RecipeDetails" });
  }
  function handleCancel() {
    // TODO ASK FOR CONFIRMATION
    navigation.goBack();
  }

  // UseEffects
  useEffect(() => {
    if (postRecipeData) handleSuccessfullSave(postRecipeData);
  }, [postRecipeData]);
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
