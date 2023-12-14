import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useMediaLibraryPermissions,
  MediaTypeOptions,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
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
  CreateRecipeFooter,
  RecipeNameForm,
  EditRecipeInfoForm,
} from "@app/views/layouts";

import { styles } from "./styles";

export default function CreateRecipe() {
  // Store State
  const { selectedRecipeID } = useSelector((state) => state.recipe);
  // Local State
  const [recipeNameDetails, setRecipeNameDetails] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();
  const [errMsg, setErrMsg] = useState();

  // Hooks
  const [status, requestPermission] = useMediaLibraryPermissions();

  // Functions

  // UseEffects
  useEffect(() => {
    if (!status) return;
    if (!status.granted) requestPermission();
  }, [status]);
  return (
    <ScrollPage
      contentContainerStyle={styles.wrapper}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      scrollEnabled={false}
      automaticallyAdjustKeyboardInsets={true}>
      <ScrollPage>
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
          />
        </View>
      </ScrollPage>
      <CreateRecipeFooter
        recipe={recipeNameDetails}
        recipe_ingredients={recipeIngredients}
        recipe_instructions={recipeInstructions}
        setErrMsg={setErrMsg}
      />
    </ScrollPage>
  );
}
