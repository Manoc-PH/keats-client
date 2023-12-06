import { useEffect, useState } from "react";
import { View } from "react-native";
// Constants
import { RECIPE_FILTERS_OPTIONS } from "@app/common/constants/options";
// Components
import { SwitchOptions } from "@app/views/components";
// Hooks
import {
  useGetRecipeDiscovery,
  useGetRecipeFiltered,
} from "@app/core/hooks/api";
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";

export default function RecipeDiscovery(props) {
  // Props
  const {} = props;

  // Local states
  const [recipes, setRecipes] = useState();
  const [activeOption, setActiveOption] = useState("recommended");

  // Hooks
  const {
    getRecipeDiscovery,
    getRecipeDiscoveryData,
    isGetRecipeDiscoveryLoading,
  } = useGetRecipeDiscovery();
  const {
    getRecipeFiltered,
    getRecipeFilteredData,
    isGetRecipeFilteredLoading,
  } = useGetRecipeFiltered();

  // Constants
  const loading = isGetRecipeDiscoveryLoading || isGetRecipeFilteredLoading;

  // Functions
  function handleOptionChange() {
    if (activeOption === "recommended") {
      getRecipeDiscovery();
    } else {
      getRecipeFiltered({ filter: activeOption });
    }
  }

  // UseEffects
  useEffect(() => {
    handleOptionChange();
  }, [activeOption]);
  useEffect(() => {
    if (getRecipeDiscoveryData?.recipes)
      setRecipes(getRecipeDiscoveryData.recipes);
    if (getRecipeFilteredData?.recipes)
      setRecipes(getRecipeFilteredData.recipes);
  }, [getRecipeFilteredData, getRecipeDiscoveryData]);
  return (
    <View style={styles.wrapper}>
      <SwitchOptions
        options={[
          { label: "Recommended", value: "recommended" },
          ...RECIPE_FILTERS_OPTIONS,
        ]}
        defaultOption={activeOption}
        onChange={setActiveOption}
      />
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
