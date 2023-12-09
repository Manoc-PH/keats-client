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
  PatchRecipeMainImage,
  PostRecipeImage,
  PostRecipeImagesCld,
} from "@app/services/api/Consumer/Recipe";
// Components
import { Button, CircleLoader } from "@app/views/components";

import { styles } from "./styles";

export default function CreateRecipeFooter(props) {
  const {
    recipe,
    recipe_ingredients,
    recipe_instructions,
    recipeImages,
    mainImage,
    thumbnail,
  } = props;

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
    const promisesArray = [];
    recipeImages.map((item) => promisesArray.push(postImage(data, item)));
    promisesArray.push(patchRecipe(data));
    Promise.all(promisesArray)
      .then((results) => {
        setLoading(false);
        setSelectedRecipeID(data?.recipe?.id);
        navigation.navigate("Common", { screen: "RecipeDetails" });
      })
      .catch((error) => {
        console.error(error.response);
      });
  }
  async function postImage(data, item) {
    try {
      const res = await PostRecipeImage({
        recipe_id: data?.recipe?.id,
        name_url_local: item.name_url_local,
      });
      const res2 = await PostRecipeImagesCld(res);
      return res2;
    } catch (error) {
      return error;
    }
  }
  async function patchRecipe(data) {
    try {
      const res = await PatchRecipeMainImage({
        recipe_id: data?.recipe?.id,
        thumbnail_url_local: thumbnail,
        image_url_local: mainImage,
      });
      const imageData = {
        name_url_local: mainImage,
        name_file: res.image_name,
        api_key: res.api_key,
        timestamp: res.timestamp,
        signature: res.image_signature,
        upload_url: res.upload_url,
      };
      const thumbnailData = {
        name_url_local: thumbnail,
        name_file: res.thumbnail_name,
        api_key: res.api_key,
        timestamp: res.timestamp,
        signature: res.thumbnail_signature,
        upload_url: res.upload_url,
      };

      const res2 = await PostRecipeImagesCld(imageData);
      const res3 = await PostRecipeImagesCld(thumbnailData);
      return res2 || res3;
    } catch (error) {
      return error;
    }
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
