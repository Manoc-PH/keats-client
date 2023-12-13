import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
// Store
import { actions } from "@app/core/store";
// Layouts
import {
  RecipeCreated,
  RecipeDiscovery,
  RecipeSearched,
  ScrollPage,
} from "@app/views/layouts";
// Components
import { Button, SwitchButton } from "@app/views/components";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Images
import { AdImage } from "@app/assets/images";
// Styles
import { styles } from "./styles";

export default function Recipes() {
  // Store State
  const { recipeSearch } = useSelector((state) => state.search);
  const { isRecipeHomeUpdated } = useSelector((state) => state.recipe);

  // Store Actions
  const { setIsRecipeHomeUpdated: sir } = actions;
  const dispatch = useDispatch();
  const setIsRecipeHomeUpdated = (value) => dispatch(sir(value));

  // Local States
  const [page, setPage] = useState("Discover");

  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleCreateRecipe() {
    navigation.navigate("Common", { screen: "CreateRecipe" });
  }

  // Functions
  function handleSwitchView(value) {
    if (value === 1) setPage("Discover");
    if (value === 2) setPage("MyRecipes");
  }

  // UseEffects
  useEffect(() => {
    if (isRecipeHomeUpdated) setIsRecipeHomeUpdated(false);
  }, [isRecipeHomeUpdated]);
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        {recipeSearch ? (
          <View style={styles.container}>
            <RecipeSearched recipeSearch={recipeSearch} />
          </View>
        ) : (
          <>
            <View style={styles.container}>
              <AdImage style={styles.image} resizeMode={"cover"} />
            </View>
            <View style={styles.container}>
              <Button onPress={handleCreateRecipe}>+ Create Recipe</Button>
            </View>
            <View style={styles.container}>
              <SwitchButton
                onValueChange={handleSwitchView}
                switchWidth={
                  Dimensions.get("window").width -
                  SPACING.Medium -
                  SPACING.Medium
                }
                options={["Discover", "My Recipes"]}
              />
            </View>
            <View style={styles.container} key={isRecipeHomeUpdated}>
              {page === "Discover" ? <RecipeDiscovery /> : <RecipeCreated />}
            </View>
          </>
        )}
      </View>
    </ScrollPage>
  );
}
