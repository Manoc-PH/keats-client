import { useState } from "react";
import { Dimensions, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// Layouts
import {
  Loader,
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
            <View style={styles.container}>
              {page === "Discover" ? <RecipeDiscovery /> : <RecipeCreated />}
            </View>
          </>
        )}
      </View>
    </ScrollPage>
  );
}
