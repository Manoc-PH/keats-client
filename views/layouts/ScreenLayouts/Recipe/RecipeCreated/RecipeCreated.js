import { useEffect, useState } from "react";
import { View } from "react-native";
// Hooks
import { useGetRecipeFiltered } from "@app/core/hooks/api";
// Layouts
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";

export default function RecipeCreated(props) {
  // Props
  const {} = props;

  // Local states
  const [recipes, setRecipes] = useState();
  const {
    getRecipeFiltered,
    getRecipeFilteredData,
    isGetRecipeFilteredLoading,
  } = useGetRecipeFiltered();

  // Constants
  const loading = isGetRecipeFilteredLoading;

  // UseEffects
  useEffect(() => {
    getRecipeFiltered({ created: true });
  }, []);
  useEffect(() => {
    if (getRecipeFilteredData?.recipes)
      setRecipes(getRecipeFilteredData.recipes);
  }, [getRecipeFilteredData]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.recipeWrapper}>
        {recipes &&
          !loading &&
          recipes?.length > 0 &&
          recipes.map((item) => {
            return (
              <View style={styles.recipeContainer} key={item.id}>
                <RecipeCard
                  key={item.id}
                  name={item.name}
                  rating={item.rating}
                  rating_count={item.rating_count}
                  image_url={item.thumbnail_url}
                />
              </View>
            );
          })}
        {loading &&
          Array.from({ length: 4 }, (item, index) => (
            <View key={index} style={styles.recipeContainer}>
              <RecipeCard loading />
            </View>
          ))}
      </View>
    </View>
  );
}
