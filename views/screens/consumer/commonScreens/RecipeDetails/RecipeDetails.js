import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
} from "@app/views/layouts";
// Components
import { Image, SwitchButton } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { selectedRecipeID } = useSelector((state) => state.recipe);

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
    if (selectedRecipeID) {
      getRecipe({ recipe_id: selectedRecipeID });
    }
  }, [selectedRecipeID]);
  useEffect(() => {
    if (getRecipeData) {
      setRecipeDetails(getRecipeData);
      handleRecipeAmount(getRecipeData.recipe);
    }
  }, [getRecipeData]);
  return (
    <ScrollPage style={styles.wrapper}>
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
        <RecipeInfo />
      </View>
    </ScrollPage>
  );
}
