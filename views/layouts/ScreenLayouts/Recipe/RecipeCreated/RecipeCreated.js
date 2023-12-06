import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// Hooks
import { useGetRecipeFiltered } from "@app/core/hooks/api";
// Store
import { actions } from "@app/core/store";
// Layouts
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";

export default function RecipeCreated(props) {
  // Props
  const {} = props;

  // Store Actions
  const { setSelectedRecipeID: sdi } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));
  // Local states
  const [recipes, setRecipes] = useState();

  // Hooks
  const navigation = useNavigation();
  const {
    getRecipeFiltered,
    getRecipeFilteredData,
    isGetRecipeFilteredLoading,
  } = useGetRecipeFiltered();

  // Constants
  const loading = isGetRecipeFilteredLoading;

  // Functions
  function handlePress(id) {
    setSelectedRecipeID(id);
    navigation.navigate("Common", { screen: "RecipeDetails" });
  }
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
                  name_owner={item.name_owner}
                  rating={item.rating}
                  rating_count={item.rating_count}
                  image_url={item.thumbnail_url}
                  onPress={() => handlePress(item.id)}
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
