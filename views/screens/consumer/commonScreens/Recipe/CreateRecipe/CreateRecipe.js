import { View } from "react-native";
import { useEffect, useState } from "react";
// Layouts
import {
  ScrollPage,
  PageDivider,
  CreateRecipeFooter,
  RecipeNameForm,
  RecipeInfoForm,
} from "@app/views/layouts";

import { styles } from "./styles";

export default function CreateRecipe() {
  // Local State
  const [recipeNameDetails, setRecipeNameDetails] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();
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
          <RecipeInfoForm
            setRecipeIngredients={setRecipeIngredients}
            setRecipeInstructions={setRecipeInstructions}
          />
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
      <CreateRecipeFooter
        recipe={recipeNameDetails}
        recipe_ingredients={recipeIngredients}
        recipe_instructions={recipeInstructions}
      />
    </View>
  );
}
