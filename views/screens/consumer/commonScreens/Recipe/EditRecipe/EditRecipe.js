import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Hooks
import {
  useGetRecipe,
  useGetRecipeIngredients,
  useGetRecipeInstructions,
} from "@app/core/hooks/api";
// Components
import { Button, Image, Title3 } from "@app/views/components";
// Constants
import { BTN_VARIANTS } from "@app/common/constants/styles";
// Theme
import themeColors from "@app/common/theme";
// Layouts
import {
  ScrollPage,
  PageDivider,
  EditRecipeFooter,
  RecipeNameForm,
  EditRecipeInfoForm,
  Loader,
} from "@app/views/layouts";

import { styles } from "./styles";

export default function CreateRecipe() {
  // Store State
  const { selectedRecipeID } = useSelector((state) => state.recipe);
  // Local State
  const [recipeNameDetails, setRecipeNameDetails] = useState();
  const [recipeIngredients, setRecipeIngredients] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();
  const [errMsg, setErrMsg] = useState();

  // Hooks
  const {
    getRecipeIngredients,
    getRecipeIngredientsData,
    isGetRecipeIngredientsLoading,
  } = useGetRecipeIngredients();
  const {
    getRecipeInstructions,
    getRecipeInstructionsData,
    isGetRecipeInstructionsLoading,
  } = useGetRecipeInstructions();
  const { getRecipe, getRecipeData, isGetRecipeLoading } = useGetRecipe();

  // Functions

  // Constants
  const loading =
    isGetRecipeIngredientsLoading ||
    isGetRecipeInstructionsLoading ||
    isGetRecipeLoading;

  // UseEffects
  useEffect(() => {
    getRecipe({ recipe_id: selectedRecipeID });
    getRecipeInstructions({ recipe_id: selectedRecipeID });
    getRecipeIngredients({ recipe_id: selectedRecipeID });
  }, []);
  useEffect(() => {
    if (getRecipeData) setRecipeNameDetails(getRecipeData?.recipe);
  }, [getRecipeData]);
  useEffect(() => {
    if (getRecipeIngredientsData)
      setRecipeIngredients(getRecipeIngredientsData?.ingredients);
  }, [getRecipeIngredientsData]);
  useEffect(() => {
    if (getRecipeInstructionsData)
      setRecipeInstructions(getRecipeInstructionsData?.instructions);
  }, [getRecipeInstructionsData]);
  useEffect(() => {
    console.log(recipeIngredients);
  }, [recipeIngredients]);
  return (
    <ScrollPage
      contentContainerStyle={styles.wrapper}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      scrollEnabled={false}
      automaticallyAdjustKeyboardInsets={true}>
      <ScrollPage>
        {!loading && recipeNameDetails && recipeIngredients && (
          <View style={styles.container}>
            {errMsg && (
              <Title3 style={{ color: themeColors.red, textAlign: "center" }}>
                {errMsg}
              </Title3>
            )}
            <View style={styles.contentWrapper}>
              <RecipeNameForm
                recipeNameDetails={recipeNameDetails}
                setRecipeNameDetails={setRecipeNameDetails}
              />
            </View>
            <PageDivider />
            <EditRecipeInfoForm
              setRecipeIngredients={setRecipeIngredients}
              setRecipeInstructions={setRecipeInstructions}
              recipeIngredients={recipeIngredients}
              recipeInstructions={recipeInstructions}
            />
          </View>
        )}
        {loading && (!recipeNameDetails || !recipeIngredients) && (
          <View style={styles.container}>
            <View style={styles.loader}>
              <Loader />
            </View>
          </View>
        )}
      </ScrollPage>
      <EditRecipeFooter
        recipe={recipeNameDetails}
        recipe_ingredients={recipeIngredients}
        recipe_instructions={recipeInstructions}
        setErrMsg={setErrMsg}
      />
    </ScrollPage>
  );
}
