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
  RecipeNameForm,
  RecipeInfoForm,
} from "@app/views/layouts";
// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function CreateRecipe() {
  // Store State
  // const { dailyNutrients } = useSelector((state) => state.tracker);
  // const { selectedRecipeID, isRecipeUpdated } = useSelector(
  //   (state) => state.recipe
  // );

  // // Store Actions
  // const { setIsRecipeUpdated: siru } = actions;
  // const dispatch = useDispatch();
  // const setIsRecipeUpdated = (value) => dispatch(siru(value));

  // Local State
  const [recipeNameDetails, setRecipeNameDetails] = useState({});
  // const [recipeTotalAmount, setRecipeTotalAmount] = useState();

  // // Hooks
  // const { getRecipe, getRecipeData, isGetRecipeLoading } = useGetRecipe();

  // // Functions
  // function handleRecipeAmount(rec) {
  //   if (rec?.servings && rec?.servings_size) {
  //     setRecipeTotalAmount(rec?.servings * rec?.servings_size);
  //   } else {
  //     setRecipeTotalAmount(0);
  //   }
  // }

  // UseEffects
  useEffect(() => {}, [recipeNameDetails]);
  // useEffect(() => {
  //   if (isRecipeUpdated) getRecipe({ recipe_id: selectedRecipeID });
  // }, [isRecipeUpdated]);
  // useEffect(() => {
  //   if (getRecipeData) {
  //     setRecipeDetails(getRecipeData);
  //     handleRecipeAmount(getRecipeData.recipe);
  //   }
  // }, [getRecipeData]);
  return (
    <View style={styles.wrapper}>
      <ScrollPage>
        <View style={styles.container}>
          <View style={styles.contentWrapper}>
            <RecipeNameForm
              recipeNameDetails={recipeNameDetails}
              setRecipeNameDetails={setRecipeNameDetails}
            />
          </View>
          <PageDivider />
          <RecipeInfoForm />
          {/* <NutrientSummary
            dailyNutrients={dailyNutrients}
            details={recipeDetails}
            amount={recipeTotalAmount}
            isLoading={isGetRecipeLoading}
          />
          <PageDivider />
          <RecipeName
            recipeDetails={recipeDetails?.recipe}
            isLoading={isGetRecipeLoading}
          /> */}
          {/* <RecipeInfo RecipeID={selectedRecipeID} /> */}
        </View>
      </ScrollPage>
      {/* <RecipeDetailsFooter recipe_id={selectedRecipeID} /> */}
    </View>
  );
}
