import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// Constants
import { RECIPE_FILTERS_OPTIONS } from "@app/common/constants/options";
// Components
import { SwitchOptions } from "@app/views/components";
// Store
import { actions } from "@app/core/store";
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

  // Store Actions
  const { setSelectedRecipeID: sdi } = actions;
  const dispatch = useDispatch();
  const setSelectedRecipeID = (v) => dispatch(sdi(v));
  // Local states
  const [recipes, setRecipes] = useState();
  const [activeOption, setActiveOption] = useState("recommended");

  // Hooks
  const navigation = useNavigation();
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
  function handlePress(id) {
    setSelectedRecipeID(id);
    navigation.navigate("Common", { screen: "RecipeDetails" });
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
                  image_url={item.image_url}
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
