import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetRecipeSearch } from "@app/core/hooks/api";
import { useNavigation } from "@react-navigation/native";
// Layouts
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";

export default function RecipeSearched(props) {
  // Props
  const { recipeSearch } = props;

  // Store Actions
  const { setSelectedRecipeID: sdi } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));

  // Local state
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  // Hooks
  const navigation = useNavigation();
  const { getRecipeSearch, getRecipeSearchData, isGetRecipeSearchLoading } =
    useGetRecipeSearch();

  // Functions
  function handlePress(id) {
    setSelectedRecipeID(id);
    navigation.navigate("Common", { screen: "RecipeDetails" });
  }

  // UseEffects
  useEffect(() => {
    if (recipeSearch) getRecipeSearch({ search_term: recipeSearch });
  }, [recipeSearch]);
  useEffect(() => {
    if (getRecipeSearchData) setSearchedRecipes(getRecipeSearchData);
  }, [getRecipeSearchData]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.recipeWrapper}>
        {searchedRecipes &&
          !isGetRecipeSearchLoading &&
          searchedRecipes?.length > 0 &&
          searchedRecipes.map((item) => {
            return (
              <View style={styles.recipeContainer} key={item.id}>
                <RecipeCard
                  key={item.id}
                  name={item.name}
                  name_owner={item.name_owner}
                  rating={item.rating}
                  rating_count={item.rating_count}
                  image_url={item.image_url}
                  onPress={() => handlePress(item.id)}
                />
              </View>
            );
          })}
        {isGetRecipeSearchLoading &&
          Array.from({ length: 4 }, (item, index) => (
            <View key={index} style={styles.recipeContainer}>
              <RecipeCard loading />
            </View>
          ))}
      </View>
    </View>
  );
}
