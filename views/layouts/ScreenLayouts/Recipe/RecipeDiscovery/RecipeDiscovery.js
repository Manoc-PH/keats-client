import { useEffect, useState } from "react";
import { View } from "react-native";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";
// Components
import { SwitchOptions, TextSkeleton, Title3 } from "@app/views/components";
// Hooks
import { useGetRecipeDiscovery } from "@app/core/hooks/api";
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";
import { RECIPE_FILTERS_OPTIONS } from "@app/common/constants/options";

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

  // UseEffects
  useEffect(() => {
    getRecipeDiscovery();
  }, []);
  useEffect(() => {
    if (getRecipeDiscoveryData?.recipes)
      setRecipes(getRecipeDiscoveryData.recipes);
  }, [getRecipeDiscoveryData]);
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
          !isGetRecipeDiscoveryLoading &&
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
        {isGetRecipeDiscoveryLoading &&
          Array.from({ length: 4 }, (item, index) => (
            <View key={index} style={styles.recipeContainer}>
              <RecipeCard loading />
            </View>
          ))}
      </View>
    </View>
  );
}
