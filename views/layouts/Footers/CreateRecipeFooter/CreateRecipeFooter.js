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
// Services
import {
  PostRecipeImage,
  PostRecipeImagesCld,
} from "@app/services/api/Consumer/Recipe";
// Components
import { Button, CircleLoader } from "@app/views/components";

import { styles } from "./styles";

export default function CreateRecipeFooter(props) {
  const { recipe, recipe_ingredients, recipe_instructions, recipeImages } =
    props;

  // Store Actions
  const { setSelectedRecipeID: sdi } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));

  // Hooks
  const { postRecipe, postRecipeData, isPostRecipeLoading } = usePostRecipe();
  const navigation = useNavigation();

  // Local state
  const [loading, setLoading] = useState(false);

  // Functions
  function handleSave() {
    if (recipe && recipe_ingredients && recipe_instructions) {
      const data = {
        recipe,
        recipe_ingredients,
        recipe_instructions,
        timestamp: new Date().toISOString(),
      };
      setLoading(true);
      postRecipe(data);
    }
  }
  function handleSaveImages(data) {
    let uploaded = 0;
    recipeImages.forEach(async (item) => {
      try {
        const res = await PostRecipeImage({
          recipe_id: data?.recipe?.id,
          name_url_local: item.name_url_local,
        });
        const res2 = await PostRecipeImagesCld(res);
        if (res2 && uploaded + 1 === recipeImages?.length) {
          setLoading(false);
          setSelectedRecipeID(data?.recipe?.id);
          navigation.navigate("Common", { screen: "RecipeDetails" });
        } else {
          uploaded += 1;
        }
      } catch (error) {
        console.error(error);
        if (uploaded + 1 === recipeImages?.length) {
          setLoading(false);
          setSelectedRecipeID(data?.recipe?.id);
          navigation.navigate("Common", { screen: "RecipeDetails" });
        } else uploaded += 1;
      }
    });
  }
  function handleCancel() {
    // TODO ASK FOR CONFIRMATION
    navigation.goBack();
  }

  // UseEffects
  useEffect(() => {
    if (postRecipeData) {
      handleSaveImages(postRecipeData);
    }
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
