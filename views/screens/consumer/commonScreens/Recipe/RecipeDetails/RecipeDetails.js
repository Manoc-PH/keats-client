import { View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetRecipe } from "@app/core/hooks/api";
// Layouts
import {
  NutrientSummary,
  ScrollPage,
  RecipeName,
  PageDivider,
  ImagesCarousel,
  RecipeInfo,
  RecipeDetailsFooter,
} from "@app/views/layouts";
// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { selectedRecipeID, isRecipeUpdated } = useSelector(
    (state) => state.recipe
  );

  // Store Actions
  const { setIsRecipeUpdated: siru, setRecipeOwnerId: sro } = actions;
  const dispatch = useDispatch();
  const setIsRecipeUpdated = (value) => dispatch(siru(value));
  const setRecipeOwnerId = (value) => dispatch(sro(value));

  // Local State
  const [recipeDetails, setRecipeDetails] = useState();
  const [recipeTotalAmount, setRecipeTotalAmount] = useState();

  // Hooks
  const { getRecipe, getRecipeData, isGetRecipeLoading } = useGetRecipe();

  // Functions
  function handleRecipeAmount(rec) {
    if (rec?.servings && rec?.servings_size) {
      setRecipeTotalAmount(rec?.servings * rec?.servings_size);
    } else {
      setRecipeTotalAmount(0);
    }
  }

  // UseEffects
  useEffect(() => {
    if (selectedRecipeID) getRecipe({ recipe_id: selectedRecipeID });
  }, [selectedRecipeID]);
  useEffect(() => {
    if (isRecipeUpdated) getRecipe({ recipe_id: selectedRecipeID });
  }, [isRecipeUpdated]);
  useEffect(() => {
    if (getRecipeData) {
      setRecipeDetails(getRecipeData);
      handleRecipeAmount(getRecipeData.recipe);
      setRecipeOwnerId(getRecipeData?.recipe?.owner_id);
      setIsRecipeUpdated();
    }
  }, [getRecipeData]);
  return (
    <ScrollPage
      contentContainerStyle={styles.wrapper}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      scrollEnabled={false}
      automaticallyAdjustKeyboardInsets={true}>
      <ScrollPage>
        <View style={styles.imageWrapper}>
          {recipeDetails?.recipe_images &&
          recipeDetails?.recipe_images?.length > 0 ? (
            <ImagesCarousel data={recipeDetails.recipe_images} />
          ) : (
            <Image src={recipeDetails?.recipe?.thumbnail_image_link} />
          )}
        </View>
        <View style={styles.container}>
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            details={recipeDetails}
            amount={recipeTotalAmount}
            isLoading={isGetRecipeLoading}
          />
          <PageDivider />
          <RecipeName
            recipeDetails={recipeDetails?.recipe}
            isLoading={isGetRecipeLoading}
          />
          <PageDivider />
          <RecipeInfo
            isRecipeUpdated={isRecipeUpdated}
            RecipeID={selectedRecipeID}
          />
        </View>
      </ScrollPage>
      <RecipeDetailsFooter
        isRecipeUpdated={isRecipeUpdated}
        recipe_id={selectedRecipeID}
      />
    </ScrollPage>
  );
}
