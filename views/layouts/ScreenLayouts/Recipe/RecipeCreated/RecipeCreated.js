import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
// Hooks
import { useGetRecipeFiltered } from "@app/core/hooks/api";
// Components
import { SwitchOptions } from "@app/views/components";
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
  const [activeOption, setActiveOption] = useState("created");

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
  function handleSwitchOption(value) {
    if (value === "created") {
      getRecipeFiltered({ created: true, liked: false });
    }
    if (value === "liked") {
      getRecipeFiltered({ created: false, liked: true });
    }
  }

  // UseEffects
  useEffect(() => {
    getRecipeFiltered({ created: true, liked: false });
  }, []);
  useEffect(() => {
    if (getRecipeFilteredData?.recipes)
      setRecipes(getRecipeFilteredData.recipes);
  }, [getRecipeFilteredData]);
  useEffect(() => {
    handleSwitchOption(activeOption);
  }, [activeOption]);
  return (
    <View style={styles.wrapper}>
      <SwitchOptions
        options={[
          { label: "Created", value: "created" },
          { label: "Liked", value: "liked" },
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
