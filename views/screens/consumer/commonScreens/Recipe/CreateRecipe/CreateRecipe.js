import { View } from "react-native";
import { useEffect, useState } from "react";
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
  RecipeInfoForm,
} from "@app/views/layouts";

import { styles } from "./styles";

export default function CreateRecipe() {
  // Local State
  const [recipeNameDetails, setRecipeNameDetails] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState();
  const [recipeInstructions, setRecipeInstructions] = useState();
  const [recipeImages, setRecipeImages] = useState();
  const [mainImage, setMainImage] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [errMsg, setErrMsg] = useState();

  // Hooks
  const [status, requestPermission] = useMediaLibraryPermissions();

  // Functions
  async function selectImage() {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const mainRes = await manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.5, format: SaveFormat.JPEG }
      );
      const thumbnailRes = await manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 100 } }],
        { compress: 0, format: SaveFormat.JPEG }
      );
      setMainImage(mainRes.uri);
      setThumbnail(thumbnailRes.uri);
    } else {
      alert("You did not select any image.");
    }
  }

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
          <View style={styles.imageWrapper}>
            <View style={styles.imageContainer}>
              <Image src={mainImage} />
            </View>
            <Button onPress={selectImage} variant={BTN_VARIANTS.outlined}>
              Select Main Image
            </Button>
          </View>
          <PageDivider />
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
          <RecipeInfoForm
            setRecipeIngredients={setRecipeIngredients}
            setRecipeInstructions={setRecipeInstructions}
            setRecipeImages={setRecipeImages}
          />
        </View>
      </ScrollPage>
      <CreateRecipeFooter
        recipe={recipeNameDetails}
        recipe_ingredients={recipeIngredients}
        recipe_instructions={recipeInstructions}
        recipeImages={recipeImages}
        mainImage={mainImage}
        thumbnail={thumbnail}
        setErrMsg={setErrMsg}
      />
    </ScrollPage>
  );
}
